from __future__ import annotations
import asyncio
import base64
from fastapi import APIRouter, HTTPException
from app.services import llm, llm_anthropic
from app.routers.chat_images import resolve_image_path, ALLOWED_MEDIA_TYPES
from app.routers.chat_pdfs import resolve_pdf_path, ALLOWED_MEDIA_TYPE as PDF_MEDIA_TYPE


router = APIRouter()


# Reverse lookup: file extension → media type. Used when fetching a
# stored image off disk to attach it to an Anthropic content block.
_EXT_TO_MEDIA = {ext: media for media, ext in ALLOWED_MEDIA_TYPES.items()}


def _attach_attachments_anthropic(messages: list[dict]) -> list[dict]:
    """Fold image and pdf refs into Anthropic content blocks.

    Each message that carries `images` and/or `pdfs` is rewritten so
    `content` becomes a list with the prose text first, then `image`
    blocks, then `document` (pdf) blocks. Refs that fail to resolve on
    disk are silently dropped so a stale chat history can't poison
    future turns.
    """
    out: list[dict] = []
    for m in messages:
        images = m.get("images") or []
        pdfs = m.get("pdfs") or []
        rest = {k: v for k, v in m.items() if k not in ("images", "pdfs")}
        if not images and not pdfs:
            out.append(rest)
            continue
        text = str(m.get("content", ""))
        blocks: list[dict] = []
        if text:
            blocks.append({"type": "text", "text": text})
        for ref in images:
            name = str(ref).rsplit("/", 1)[-1]
            try:
                path = resolve_image_path(name)
            except HTTPException:
                continue
            ext = path.suffix.lower()
            media = _EXT_TO_MEDIA.get(ext, "image/png")
            data = base64.standard_b64encode(path.read_bytes()).decode("ascii")
            blocks.append({
                "type": "image",
                "source": {"type": "base64", "media_type": media, "data": data},
            })
        for ref in pdfs:
            # PDF refs are {url, label} dicts; URL trailing component
            # is the disk filename. Tolerate plain-string entries too
            # (older clients, manual edits) by treating the string as
            # the URL.
            url = ref.get("url") if isinstance(ref, dict) else str(ref)
            if not url:
                continue
            name = url.rsplit("/", 1)[-1]
            try:
                path = resolve_pdf_path(name)
            except HTTPException:
                continue
            data = base64.standard_b64encode(path.read_bytes()).decode("ascii")
            blocks.append({
                "type": "document",
                "source": {"type": "base64", "media_type": PDF_MEDIA_TYPE, "data": data},
            })
        rest["content"] = blocks
        out.append(rest)
    return out


def _strip_attachments(messages: list[dict]) -> list[dict]:
    """Drop attachment fields for providers that don't support multimodal."""
    return [
        {k: v for k, v in m.items() if k not in ("images", "pdfs")}
        for m in messages
    ]


def _normalize_messages(messages: list[dict]) -> list[dict]:
    """Collapse tool-role messages to user-role with a structured wrapper.

    The tutor loop sends the LLM its own prior tool results as
    ``{role: "tool", name: "<tool-name>", content: "<raw>"}``. Neither
    provider (Anthropic OAuth / zai OpenAI-compat) accepts a "tool" role on
    this endpoint, so we fold them into a user turn with an explicit
    "[tool-result: <name>]" prefix — the LLM reads the prefix as a protocol
    signal that the preceding assistant's ``<tool>...</tool>`` call just
    returned, without needing native tool-use plumbing on the provider side.

    Non-tool messages pass through unchanged. List-shaped content (an
    Anthropic multimodal block list — see _attach_images_anthropic) is
    preserved as-is; only scalar content is stringified.
    """
    out: list[dict] = []
    for m in messages:
        role = m.get("role")
        if role == "tool":
            name = str(m.get("name") or m.get("tool_name") or "tool")
            body = str(m.get("content", ""))
            out.append({
                "role": "user",
                "content": f"[tool-result: {name}]\n{body}",
            })
        else:
            content = m.get("content", "")
            if not isinstance(content, list):
                content = str(content)
            out.append({"role": role, "content": content})
    return out


async def _call_eval(provider: str, model: str, api_key: str,
                     system_prompt: str, user_content: str) -> str:
    if provider == "anthropic-oauth":
        return await asyncio.to_thread(
            llm_anthropic.call_single_turn,
            model,
            system_prompt,
            user_content,
            llm.EVAL_MAX_TOKENS,
        )
    if provider == "zai":
        if not api_key:
            raise HTTPException(400, "api-key required for zai provider")
        return await llm.call_openai_chat(
            api_key=api_key,
            model=model,
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_content},
            ],
            temperature=0.2,
            max_tokens=llm.EVAL_MAX_TOKENS,
        )
    raise HTTPException(400, f"unknown provider: {provider}")


@router.post("/api/llm/chat")
async def chat(body: dict):
    provider = body.get("provider", "zai")
    model = body.get("model", "")
    messages = body.get("messages", [])
    temperature = body.get("temperature", 0.3)

    if not model:
        raise HTTPException(400, "model required")
    if not isinstance(messages, list) or not messages:
        raise HTTPException(400, "messages required")

    # Attachment folding (images + pdfs) runs BEFORE _normalize_messages
    # — once normalize rewrites a message it strips unknown fields, so
    # we need to bake them into the content blocks first.
    try:
        if provider == "anthropic-oauth":
            messages = _attach_attachments_anthropic(messages)
            messages = _normalize_messages(messages)
            content = await asyncio.to_thread(
                llm_anthropic.chat, model, messages, 32000
            )
        elif provider == "zai":
            api_key = (body.get("api-key") or body.get("apiKey") or "").strip()
            if not api_key:
                raise HTTPException(400, "api-key required for zai provider")
            # zai's GLM models are text-only; drop image + pdf refs so
            # the provider doesn't reject the request. The frontend
            # blocks pdf upload on zai but a stale chat history might
            # still carry refs.
            messages = _strip_attachments(messages)
            messages = _normalize_messages(messages)
            content = await llm.call_openai_chat(
                api_key=api_key,
                model=model,
                messages=messages,
                temperature=temperature,
            )
        else:
            raise HTTPException(400, f"unknown provider: {provider}")
    except HTTPException:
        raise
    except RuntimeError as e:
        raise HTTPException(503, str(e))
    except Exception as e:
        raise HTTPException(502, f"LLM error: {type(e).__name__}: {e}")

    return {"choices": [{"message": {"content": content}}]}


@router.post("/api/llm/eval")
async def eval_attempt(body: dict):
    """Grade a student's retrieval or elaborate attempt via the LLM."""
    kind = body.get("kind", "")
    prompt = (body.get("prompt") or "").strip()
    attempt = (body.get("attempt") or "").strip()
    provider = body.get("provider", "zai")
    model = body.get("model", "")
    api_key = (body.get("api-key") or body.get("apiKey") or "").strip()

    if kind not in ("retrieval", "elaborate"):
        raise HTTPException(400, "kind must be 'retrieval' or 'elaborate'")
    if not prompt:
        raise HTTPException(400, "prompt required")
    if not attempt:
        raise HTTPException(400, "attempt required")
    if not model:
        raise HTTPException(400, "model required")

    if kind == "retrieval":
        canonical = (body.get("answer") or "").strip()
        system_prompt = llm.RETRIEVAL_EVAL_PROMPT
        user_content = (
            f"PROMPT:\n{prompt}\n\n"
            f"CANONICAL ANSWER:\n{canonical or '(not provided)'}\n\n"
            f"STUDENT ATTEMPT:\n{attempt}"
        )
    else:
        concept = (body.get("concept") or "").strip()
        system_prompt = llm.ELABORATE_EVAL_PROMPT
        context = f"\n\nConcept under discussion: {concept}" if concept else ""
        user_content = f"PROMPT:\n{prompt}{context}\n\nSTUDENT ATTEMPT:\n{attempt}"

    try:
        raw = await _call_eval(provider, model, api_key, system_prompt, user_content)
    except HTTPException:
        raise
    except RuntimeError as e:
        raise HTTPException(503, str(e))
    except Exception as e:
        raise HTTPException(502, f"LLM error: {type(e).__name__}: {e}")

    try:
        parsed = llm.parse_json_response(raw)
    except Exception:
        # If the model returned prose, wrap it.
        return {"verdict": "unknown", "feedback": raw.strip()[:800]}

    verdict = str(parsed.get("verdict", "unknown")).lower()
    feedback = str(parsed.get("feedback", "")).strip()
    return {"verdict": verdict, "feedback": feedback}
