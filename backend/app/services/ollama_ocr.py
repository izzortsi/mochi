from __future__ import annotations
import asyncio
import base64
import subprocess
import tempfile
from pathlib import Path
import httpx
from app.config import settings

OLLAMA_TIMEOUT = 180
OCR_CACHE_DIR = settings.data_dir / "ocr"
PAGE_RETRIES = 2  # retry each page once before giving up


def _page_cache_path(pdf_path: Path, page_num: int) -> Path:
    return OCR_CACHE_DIR / f"{pdf_path.stem}_p{page_num:04d}.md"


def _page_cached(cache: Path, source: Path) -> bool:
    if not cache.exists():
        return False
    return cache.stat().st_size > 10 and cache.stat().st_mtime >= source.stat().st_mtime


async def extract_text(pdf_path: str | Path, max_pages: int = 30) -> str:
    pdf_path = Path(pdf_path)
    ext = pdf_path.suffix.lower()
    if ext == ".pdf":
        return await _ocr_pdf(pdf_path, max_pages)
    if ext in (".png", ".jpg", ".jpeg"):
        return await _ocr_image(pdf_path)
    raise ValueError(f"unsupported file type: {ext}")


async def _ocr_pdf(pdf_path: Path, max_pages: int = 30) -> str:
    total = _count_pages(pdf_path)
    to_process = min(max_pages, total)
    OCR_CACHE_DIR.mkdir(parents=True, exist_ok=True)

    with tempfile.TemporaryDirectory() as tmp_dir:
        subprocess.run(
            [
                "pdftoppm",
                "-png",
                "-r",
                "150",
                str(pdf_path),
                str(Path(tmp_dir) / "page"),
            ],
            check=True,
            capture_output=True,
        )
        all_pages = sorted(Path(tmp_dir).glob("page-*.png"))[:to_process]

        texts: list[str | None] = [None] * to_process
        need_ocr: list[tuple[int, Path]] = []

        for i, page_path in enumerate(all_pages):
            cache = _page_cache_path(pdf_path, i + 1)
            if _page_cached(cache, pdf_path):
                print(f"[ocr] page {i + 1}/{to_process} (cached)")
                texts[i] = cache.read_text(encoding="utf-8")
            else:
                need_ocr.append((i, page_path))

        failures: list[tuple[int, str]] = []
        if need_ocr:
            async with httpx.AsyncClient(timeout=OLLAMA_TIMEOUT) as client:
                for idx, page_path in need_ocr:
                    print(f"[ocr] page {idx + 1}/{to_process}...")
                    try:
                        text = await _call_ollama_with_retry(client, page_path)
                    except Exception as e:
                        failures.append((idx + 1, str(e)[:200]))
                        print(f"[ocr] page {idx + 1} FAILED: {e}")
                        continue
                    texts[idx] = text
                    _page_cache_path(pdf_path, idx + 1).write_text(
                        text, encoding="utf-8"
                    )

    # If every page failed, bubble up a clear error instead of silently succeeding.
    if failures and all(t is None for t in texts):
        raise RuntimeError(
            f"Ollama returned errors on every page. First: page {failures[0][0]}: {failures[0][1]}"
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


async def _ocr_image(image_path: Path) -> str:
    async with httpx.AsyncClient(timeout=OLLAMA_TIMEOUT) as client:
        return await _call_ollama_with_retry(client, image_path)


async def _call_ollama_with_retry(
    client: httpx.AsyncClient, image_path: Path
) -> str:
    """Call Ollama; retry on 5xx errors once with a short backoff."""
    last_err: Exception | None = None
    for attempt in range(PAGE_RETRIES):
        try:
            return await _call_ollama(client, image_path)
        except httpx.HTTPStatusError as e:
            last_err = e
            if 500 <= e.response.status_code < 600 and attempt + 1 < PAGE_RETRIES:
                await asyncio.sleep(1.5)
                continue
            raise
        except (httpx.TimeoutException, httpx.ReadError) as e:
            last_err = e
            if attempt + 1 < PAGE_RETRIES:
                await asyncio.sleep(1.5)
                continue
            raise
    # Unreachable, but satisfies type checkers.
    raise last_err if last_err else RuntimeError("ollama retry loop exited without result")


async def _call_ollama(client: httpx.AsyncClient, image_path: Path) -> str:
    b64 = base64.b64encode(image_path.read_bytes()).decode()
    url = settings.ollama_url.rstrip("/") + "/api/generate"
    resp = await client.post(
        url,
        json={
            "model": settings.ollama_model,
            "prompt": "OCR this page. Output the text preserving structure, formulas, and tables as markdown.",
            "stream": False,
            "images": [b64],
        },
    )
    if resp.status_code >= 400:
        # Surface the Ollama-side error message in the raised exception.
        try:
            detail = resp.json()
        except Exception:
            detail = resp.text[:400]
        raise httpx.HTTPStatusError(
            f"Ollama {resp.status_code} ({settings.ollama_model}): {detail}",
            request=resp.request,
            response=resp,
        )
    return resp.json().get("response", "")


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
