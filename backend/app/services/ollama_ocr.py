from __future__ import annotations
import base64
import subprocess
import tempfile
from pathlib import Path
import httpx
from app.config import settings

OLLAMA_TIMEOUT = 180
OCR_CACHE_DIR = settings.data_dir / "ocr"


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

        if need_ocr:
            async with httpx.AsyncClient(timeout=OLLAMA_TIMEOUT) as client:
                for idx, page_path in need_ocr:
                    print(f"[ocr] page {idx + 1}/{to_process}...")
                    text = await _call_ollama(client, page_path)
                    texts[idx] = text
                    _page_cache_path(pdf_path, idx + 1).write_text(
                        text, encoding="utf-8"
                    )

    result = "\n\n".join(t for t in texts if t is not None)
    if to_process < total:
        result += f"\n\n[... {total - to_process} more pages not OCR'd]"
    return result


async def _ocr_image(image_path: Path) -> str:
    async with httpx.AsyncClient(timeout=OLLAMA_TIMEOUT) as client:
        return await _call_ollama(client, image_path)


async def _call_ollama(client: httpx.AsyncClient, image_path: Path) -> str:
    b64 = base64.b64encode(image_path.read_bytes()).decode()
    resp = await client.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "glm-ocr:latest",
            "prompt": "OCR this page. Output the text preserving structure, formulas, and tables as markdown.",
            "stream": False,
            "images": [b64],
        },
    )
    resp.raise_for_status()
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
