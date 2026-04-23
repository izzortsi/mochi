from __future__ import annotations
import os
import threading
from typing import Any

from anthropic_oauth import OAuthManager, create_oauth_client


_client: Any = None
_lock = threading.Lock()


def _get_client() -> Any:
    global _client
    if _client is not None:
        return _client
    with _lock:
        if _client is None:
            # Override the default ~/.config path on platforms (e.g. Render)
            # where HOME isn't on a persistent disk. Set SP_OAUTH_TOKEN_PATH
            # to a file under the mounted disk so refreshed tokens survive
            # restarts.
            token_path = os.environ.get("SP_OAUTH_TOKEN_PATH") or None
            manager = OAuthManager(token_path) if token_path else OAuthManager()
            if not manager.has_valid_tokens():
                raise RuntimeError(
                    "No anthropic-oauth tokens found. "
                    "Run `anthropic-oauth auth` locally, then upload "
                    "tokens.json to SP_OAUTH_TOKEN_PATH on the disk."
                )
            _client = create_oauth_client(
                auto_auth=False,
                app_names=["study-plan"],
                token_path=token_path,
            )
    return _client


def _split_system(messages: list[dict]) -> tuple[str, list[dict]]:
    system_parts: list[str] = []
    rest: list[dict] = []
    for m in messages:
        role = m.get("role")
        content = str(m.get("content", ""))
        if role == "system":
            system_parts.append(content)
        elif role in ("user", "assistant"):
            rest.append({"role": role, "content": content})
    return "\n\n".join(system_parts), rest


def _merge_consecutive(messages: list[dict]) -> list[dict]:
    # Anthropic requires alternating user/assistant turns.
    merged: list[dict] = []
    for m in messages:
        if merged and merged[-1]["role"] == m["role"]:
            merged[-1]["content"] = merged[-1]["content"] + "\n\n" + m["content"]
        else:
            merged.append(dict(m))
    return merged


def chat(model: str, messages: list[dict], max_tokens: int = 64000) -> str:
    client = _get_client()
    system, rest = _split_system(messages)
    rest = _merge_consecutive(rest)
    kwargs: dict[str, Any] = {
        "model": model,
        "max_tokens": max_tokens,
        "messages": rest,
    }
    if system:
        kwargs["system"] = system
    # Streaming is required by the SDK when max_tokens implies >10min generation.
    parts: list[str] = []
    with client.messages.stream(**kwargs) as stream:
        for chunk in stream.text_stream:
            parts.append(chunk)
    return "".join(parts)


def call_single_turn(
    model: str,
    system_prompt: str,
    user_content: str,
    max_tokens: int = 64000,
) -> str:
    messages = [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_content},
    ]
    return chat(model, messages, max_tokens=max_tokens)
