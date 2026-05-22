"""Anthropic-based OCR for PDF imports.

Alternative to the local Ollama pipeline (services/ollama_ocr.py). Sends
the whole PDF as a single Anthropic `document` content block — Anthropic
rasterizes server-side and returns markdown text in one call. Faster and
higher quality than the local vision-model loop, but costs API spend
and requires anthropic-oauth tokens on disk.

PDF limits (per Anthropic): 32 MB per file, 100 pages per file. The
existing SP_MAX_UPLOAD_BYTES already caps uploads at 32 MB; this module
additionally enforces the page count to fail loudly before sending a
doomed request.
"""
from __future__ import annotations
import asyncio
import base64
import subprocess
from pathlib import Path

from app.services import llm_anthropic


# Anthropic limits for document content blocks. Refusing in-process so
# the user sees a clear error instead of a 400 returned from the API
# mid-OCR.
ANTHROPIC_PDF_MAX_PAGES = 100
ANTHROPIC_PDF_MAX_BYTES = 32 * 1024 * 1024

# OCR model. Haiku is fast, cheap, and accurate enough for textbook PDFs
# — switching to Sonnet/Opus would burn tokens with negligible quality
# gain. Kept as a module constant so a future call site can swap it
# without touching the call signature.
OCR_MODEL = "claude-haiku-4-5-20251001"

# Output budget. 64K tokens covers a 100-page chapter at typical
# textbook density (~500 tokens of OCR output per page). The underlying
# llm_anthropic.chat already streams via messages.stream, so long
# generations don't hit the 10-minute non-streaming ceiling.
OCR_MAX_TOKENS = 64000

SYSTEM_PROMPT = (
    "You are an OCR engine. Transcribe the provided PDF into clean markdown. "
    "Preserve structure, headings, math (in LaTeX between $...$ or $$...$$), "
    "tables (as markdown tables), and code blocks. Do not summarize, "
    "paraphrase, or add commentary — output only the transcribed content. "
    "Between pages, insert a '---' separator on its own line."
)

USER_INSTRUCTION = "Transcribe every page of this PDF. Markdown output only."


async def extract_text(pdf_path: str | Path) -> str:
    """OCR a PDF via Anthropic and return concatenated markdown.

    Mirrors services/ollama_ocr.extract_text's public contract — same
    return shape (one string with page boundaries embedded), same error
    semantics (raises on failure). Caller in routers/import_ chooses
    between the two based on the request's ocr-provider field.

    Unlike Ollama's per-page loop, this is a single API call. There is
    no per-page caching — re-importing the same PDF re-runs the call.
    Add caching keyed by PDF hash if cost / iteration speed becomes an
    issue.
    """
    pdf_path = Path(pdf_path)
    if not pdf_path.exists():
        raise FileNotFoundError(f"pdf not found: {pdf_path}")

    blob = pdf_path.read_bytes()
    if len(blob) > ANTHROPIC_PDF_MAX_BYTES:
        raise RuntimeError(
            f"PDF exceeds Anthropic 32 MB limit "
            f"({len(blob)} bytes); use Ollama for larger files."
        )

    pages = _count_pages(pdf_path)
    if pages > ANTHROPIC_PDF_MAX_PAGES:
        raise RuntimeError(
            f"PDF has {pages} pages; Anthropic caps document blocks at "
            f"{ANTHROPIC_PDF_MAX_PAGES} pages per request. Trim the PDF "
            f"or use Ollama for larger files."
        )

    b64 = base64.b64encode(blob).decode("ascii")
    # System prompt rides as the first message; llm_anthropic._split_system
    # peels it off into the Anthropic `system` kwarg. User content carries
    # the document block followed by a short instruction — the document
    # block alone would work, but a brief text instruction sharpens the
    # model's intent (no summarization, markdown only).
    messages = [
        {"role": "system", "content": SYSTEM_PROMPT},
        {
            "role": "user",
            "content": [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": b64,
                    },
                },
                {"type": "text", "text": USER_INSTRUCTION},
            ],
        },
    ]
    # Stream off the event loop so the async request handler stays
    # responsive while the model generates.
    return await asyncio.to_thread(
        llm_anthropic.chat, OCR_MODEL, messages, OCR_MAX_TOKENS,
    )


def _count_pages(pdf_path: Path) -> int:
    """Return the page count via pdfinfo, or 0 if pdfinfo isn't
    available / can't read the file. A 0 return causes the caller to
    skip the page-limit pre-check and let Anthropic surface its own
    error if the PDF actually exceeds the 100-page hard cap."""
    try:
        result = subprocess.run(
            ["pdfinfo", str(pdf_path)],
            capture_output=True,
            text=True,
            check=True,
        )
        for line in result.stdout.splitlines():
            if line.startswith("Pages:"):
                return int(line.split(":")[1].strip())
    except Exception:
        pass
    return 0
