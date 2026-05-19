from __future__ import annotations
import re
import subprocess
import tempfile
from pathlib import Path

from app.config import settings
from app.services import ocr_ollama, ocr_anthropic

OCR_PROMPT = (
    "OCR this page. Output the text preserving structure, formulas, "
    "and tables as markdown."
)
OCR_CACHE_DIR = settings.data_dir / "ocr"
DEFAULT_DPI = 150


def _sanitize(s: str) -> str:
    return re.sub(r"[^a-zA-Z0-9._-]", "_", s) or "x"


def _cache_path(provider: str, model: str, pdf_path: Path, page_num: int) -> Path:
    key = f"{_sanitize(provider)}__{_sanitize(model)}"
    return OCR_CACHE_DIR / f"{key}__{pdf_path.stem}_p{page_num:04d}.md"


def _page_cached(cache: Path, source: Path) -> bool:
    if not cache.exists():
        return False
    return cache.stat().st_size > 10 and cache.stat().st_mtime >= source.stat().st_mtime


def _render_pages(
    pdf_path: Path,
    out_dir: Path,
    dpi: int,
    first_page: int | None = None,
    last_page: int | None = None,
) -> None:
    """Rasterize PDF pages with pdftoppm. Output: out_dir/page-{dpi}-NNN.png."""
    cmd = ["pdftoppm", "-png", "-r", str(dpi)]
    if first_page is not None:
        cmd += ["-f", str(first_page)]
    if last_page is not None:
        cmd += ["-l", str(last_page)]
    cmd += [str(pdf_path), str(out_dir / f"page-{dpi}")]
    subprocess.run(cmd, check=True, capture_output=True)


def _count_pages(pdf_path: Path, fallback: int = 30) -> int:
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
    return fallback


def _backend(provider: str):
    if provider == "ollama":
        return ocr_ollama
    if provider == "anthropic-oauth":
        return ocr_anthropic
    raise ValueError(f"unknown ocr provider: {provider}")


async def extract_text(
    provider: str,
    model: str,
    pdf_path: str | Path,
    max_pages: int = 30,
) -> str:
    pdf_path = Path(pdf_path)
    ext = pdf_path.suffix.lower()
    if ext == ".pdf":
        return await _ocr_pdf(provider, model, pdf_path, max_pages)
    if ext in (".png", ".jpg", ".jpeg"):
        backend = _backend(provider)
        return await backend.ocr_single(model, pdf_path)
    raise ValueError(f"unsupported file type: {ext}")


async def _ocr_pdf(provider: str, model: str, pdf_path: Path, max_pages: int) -> str:
    backend = _backend(provider)
    total = _count_pages(pdf_path)
    to_process = min(max_pages, total)
    OCR_CACHE_DIR.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmp_dir:
        tmp = Path(tmp_dir)
        _render_pages(pdf_path, tmp, DEFAULT_DPI)
        all_pages = sorted(tmp.glob(f"page-{DEFAULT_DPI}-*.png"))[:to_process]

        texts: list[str | None] = [None] * to_process
        need_ocr: list[tuple[int, Path]] = []

        for i, page_path in enumerate(all_pages):
            cache = _cache_path(provider, model, pdf_path, i + 1)
            if _page_cached(cache, pdf_path):
                print(f"[ocr/{provider}] page {i + 1}/{to_process} (cached)")
                texts[i] = cache.read_text(encoding="utf-8")
            else:
                need_ocr.append((i, page_path))

        failures: list[tuple[int, str]] = []
        if need_ocr:
            results = await backend.ocr_pages(model, need_ocr, pdf_path, tmp)
            for idx, result in results.items():
                if isinstance(result, BaseException):
                    failures.append((idx + 1, str(result)[:200]))
                    print(f"[ocr/{provider}] page {idx + 1} FAILED: {result}")
                    continue
                texts[idx] = result
                _cache_path(provider, model, pdf_path, idx + 1).write_text(
                    result, encoding="utf-8"
                )

    if failures and all(t is None for t in texts):
        raise RuntimeError(
            f"{provider} OCR returned errors on every page. "
            f"First: page {failures[0][0]}: {failures[0][1]}"
        )

    parts: list[str] = []
    for i, t in enumerate(texts):
        if t is not None:
            parts.append(t)
        else:
            parts.append(f"[page {i + 1} failed OCR — skipped]")
    result = "\n\n".join(parts)
    if to_process < total:
        result += f"\n\n[... {total - to_process} more pages not OCR'd]"
    if failures:
        result += f"\n\n[{len(failures)} page(s) failed OCR]"
    return result


# Re-rasterize a single page at a different DPI. Used by ocr_ollama for the
# GGML shape-assertion fallback; lives here because rendering is shared.
def render_single_page(pdf_path: Path, tmp_dir: Path, dpi: int, page_num: int) -> Path | None:
    _render_pages(pdf_path, tmp_dir, dpi, first_page=page_num, last_page=page_num)
    candidates = sorted(
        tmp_dir.glob(f"page-{dpi}-*.png"), key=lambda p: p.stat().st_mtime
    )
    return candidates[-1] if candidates else None
