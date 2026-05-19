from __future__ import annotations
import asyncio
import base64
from pathlib import Path
import httpx

from app.config import settings

OLLAMA_TIMEOUT = 180
PAGE_RETRIES = 2
# DPI fallbacks tried when an image-shape assertion fires in the vision model.
# The first value matches the initial rasterization; the rest are fallbacks.
DPI_FALLBACKS = [150, 120, 100, 200]


async def ocr_single(model: str, image_path: Path) -> str:
    model = model or settings.ollama_model
    async with httpx.AsyncClient(timeout=OLLAMA_TIMEOUT) as client:
        return await _call_with_retry(client, model, image_path)


async def ocr_pages(
    model: str,
    pages: list[tuple[int, Path]],
    pdf_path: Path,
    tmp_dir: Path,
) -> dict[int, str | BaseException]:
    """OCR a batch of pre-rendered pages. Returns {idx: text} or {idx: exc}."""
    model = model or settings.ollama_model
    results: dict[int, str | BaseException] = {}
    async with httpx.AsyncClient(timeout=OLLAMA_TIMEOUT) as client:
        for idx, page_path in pages:
            print(f"[ocr/ollama] page {idx + 1}...")
            try:
                results[idx] = await _ocr_page_with_dpi_fallback(
                    client, model, pdf_path, idx + 1, page_path, tmp_dir
                )
            except BaseException as e:
                results[idx] = e
    return results


def _is_shape_assert_error(exc: BaseException) -> bool:
    """Detect the GGML vision-model tensor-shape assertion seen with some
    page resolutions. Retrying at a different DPI usually avoids it."""
    msg = str(exc)
    return "GGML_ASSERT" in msg or "ne[" in msg


async def _ocr_page_with_dpi_fallback(
    client: httpx.AsyncClient,
    model: str,
    pdf_path: Path,
    page_num: int,
    initial_image: Path,
    tmp_dir: Path,
) -> str:
    """Try OCR at the initial DPI; on shape-assertion failures, re-rasterize
    the page at fallback DPIs."""
    from app.services import ocr as ocr_pipeline  # avoid circular import at module load

    last_err: BaseException | None = None
    try:
        return await _call_with_retry(client, model, initial_image)
    except BaseException as e:
        last_err = e
        if not _is_shape_assert_error(e):
            raise

    for dpi in DPI_FALLBACKS[1:]:
        print(f"[ocr/ollama] page {page_num} re-rendering at {dpi}dpi")
        img = ocr_pipeline.render_single_page(pdf_path, tmp_dir, dpi, page_num)
        if img is None:
            continue
        try:
            return await _call_with_retry(client, model, img)
        except BaseException as e:
            last_err = e
            if not _is_shape_assert_error(e):
                raise

    raise last_err if last_err else RuntimeError("no DPI fallback produced an image")


async def _call_with_retry(
    client: httpx.AsyncClient, model: str, image_path: Path
) -> str:
    """Call Ollama; retry on 5xx errors once with a short backoff."""
    last_err: BaseException | None = None
    for attempt in range(PAGE_RETRIES):
        try:
            return await _call_ollama(client, model, image_path)
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
    raise last_err if last_err else RuntimeError("ollama retry loop exited without result")


async def _call_ollama(client: httpx.AsyncClient, model: str, image_path: Path) -> str:
    b64 = base64.b64encode(image_path.read_bytes()).decode()
    url = settings.ollama_url.rstrip("/") + "/api/generate"
    resp = await client.post(
        url,
        json={
            "model": model,
            "prompt": (
                "OCR this page. Output the text preserving structure, "
                "formulas, and tables as markdown."
            ),
            "stream": False,
            "images": [b64],
        },
    )
    if resp.status_code >= 400:
        try:
            detail = resp.json()
        except Exception:
            detail = resp.text[:400]
        raise httpx.HTTPStatusError(
            f"Ollama {resp.status_code} ({model}): {detail}",
            request=resp.request,
            response=resp,
        )
    return resp.json().get("response", "")
