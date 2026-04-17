from __future__ import annotations
import asyncio
from fastapi import APIRouter, HTTPException
from app.services import llm, llm_anthropic


router = APIRouter()


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

    try:
        if provider == "anthropic-oauth":
            content = await asyncio.to_thread(
                llm_anthropic.chat, model, messages, 32000
            )
        elif provider == "zai":
            api_key = (body.get("api-key") or body.get("apiKey") or "").strip()
            if not api_key:
                raise HTTPException(400, "api-key required for zai provider")
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
