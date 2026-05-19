from __future__ import annotations
import asyncio
import base64
from pathlib import Path

from app.services import llm_anthropic

OCR_PROMPT = (
    "OCR this page. Output the text preserving structure, formulas, "
    "and tables as markdown. Output ONLY the page content, no preamble."
)
OCR_MAX_TOKENS = 8000
_EXT_TO_MEDIA = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".webp": "image/webp",
}


async def ocr_single(model: str, image_path: Path) -> str:
    return await asyncio.to_thread(_ocr_page_sync, model, image_path)


async def ocr_pages(
    model: str,
    pages: list[tuple[int, Path]],
    pdf_path: Path,  # noqa: ARG001 - kept for interface symmetry with ocr_ollama
    tmp_dir: Path,  # noqa: ARG001
) -> dict[int, str | BaseException]:
    results: dict[int, str | BaseException] = {}
    for idx, page_path in pages:
        print(f"[ocr/anthropic-oauth] page {idx + 1}...")
        try:
            results[idx] = await asyncio.to_thread(_ocr_page_sync, model, page_path)
        except BaseException as e:
            results[idx] = e
    return results


def _ocr_page_sync(model: str, image_path: Path) -> str:
    client = llm_anthropic._get_client()
    b64 = base64.standard_b64encode(image_path.read_bytes()).decode("ascii")
    media = _EXT_TO_MEDIA.get(image_path.suffix.lower(), "image/png")
    parts: list[str] = []
    with client.messages.stream(
        model=model,
        max_tokens=OCR_MAX_TOKENS,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "image",
                        "source": {
                            "type": "base64",
                            "media_type": media,
                            "data": b64,
                        },
                    },
                    {"type": "text", "text": OCR_PROMPT},
                ],
            }
        ],
    ) as stream:
        for chunk in stream.text_stream:
            parts.append(chunk)
    return "".join(parts)
