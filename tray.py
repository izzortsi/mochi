#!/usr/bin/env python3
"""
System-tray launcher for study-plan.

Shows a tray icon with live pet + progress state. Click "open" to launch the
web UI in a browser. If the backend isn't responding when the tray starts,
spawns ./start.sh and shuts it down on Quit.

Run on the HOST (not inside the Docker container), since the system tray is
a host UI surface.

Install (Manjaro):
    sudo pacman -S python-pillow libayatana-appindicator
    pip install --user pystray requests

Run:
    python tray.py
"""
from __future__ import annotations

import os
import signal
import subprocess
import sys
import threading
import time
import webbrowser
from pathlib import Path

import requests
from PIL import Image
from pystray import Icon, Menu, MenuItem

ROOT = Path(__file__).resolve().parent
ICON_PATH = ROOT / "frontend" / "public" / "icon-512.png"
BACKEND_URL = os.environ.get("SP_BACKEND", "http://localhost:4000")
WEB_URL = os.environ.get("SP_WEB", "http://localhost:3000")
POLL_SECS = 30

state: dict = {
    "online": False,
    "name": None,
    "mood": "…",
    "health": None,
    "happiness": None,
    "xp": None,
    "streak": None,
    "best_streak": None,
}

_stop = threading.Event()
_child: subprocess.Popen | None = None


def backend_alive() -> bool:
    try:
        return requests.get(f"{BACKEND_URL}/api/pet", timeout=1.5).ok
    except requests.RequestException:
        return False


def maybe_spawn_backend() -> None:
    global _child
    if backend_alive():
        return
    script = ROOT / "start.sh"
    if not script.exists():
        return
    _child = subprocess.Popen(
        [str(script)],
        cwd=str(ROOT),
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        preexec_fn=os.setsid,
    )
    for _ in range(80):
        if _stop.is_set() or backend_alive():
            return
        time.sleep(0.5)


def shutdown_child() -> None:
    global _child
    if _child is None:
        return
    try:
        os.killpg(os.getpgid(_child.pid), signal.SIGINT)
        _child.wait(timeout=5)
    except Exception:
        try:
            os.killpg(os.getpgid(_child.pid), signal.SIGKILL)
        except Exception:
            pass
    _child = None


def poll_loop(icon: Icon) -> None:
    while not _stop.is_set():
        try:
            pet = requests.get(f"{BACKEND_URL}/api/pet", timeout=2).json()
            prog = requests.get(f"{BACKEND_URL}/api/progress", timeout=2).json()
            state.update(
                online=True,
                name=pet.get("name"),
                mood=pet.get("mood") or "…",
                health=pet.get("health"),
                happiness=pet.get("happiness"),
                xp=prog.get("xp"),
                streak=prog.get("streak"),
                best_streak=prog.get("best-streak") or prog.get("bestStreak"),
            )
        except Exception:
            state["online"] = False
        icon.title = tooltip()
        icon.update_menu()
        _stop.wait(POLL_SECS)


def tooltip() -> str:
    if not state["online"]:
        return "study plan · offline"
    name = state["name"] or "no pet"
    return (
        f"study plan · {name} ({state['mood']}) · "
        f"streak {state['streak']}d · xp {state['xp']}"
    )


def pet_label(_):
    if not state["online"]:
        return "— offline —"
    if not state["name"]:
        return "no pet yet"
    return f"pet: {state['name']} · {state['mood']}"


def health_label(_):
    return "health: —" if state["health"] is None else f"health: {state['health']}/100"


def happy_label(_):
    return "happiness: —" if state["happiness"] is None else f"happiness: {state['happiness']}/100"


def streak_label(_):
    if state["streak"] is None:
        return "streak: —"
    best = state["best_streak"] or 0
    return f"streak: {state['streak']}d (best {best})"


def xp_label(_):
    return "xp: —" if state["xp"] is None else f"xp: {state['xp']}"


def on_open(icon, item):
    webbrowser.open(WEB_URL)


def on_quit(icon, item):
    _stop.set()
    icon.stop()


def build_menu() -> Menu:
    return Menu(
        MenuItem("open study plan", on_open, default=True),
        Menu.SEPARATOR,
        MenuItem(pet_label, None, enabled=False),
        MenuItem(health_label, None, enabled=False),
        MenuItem(happy_label, None, enabled=False),
        Menu.SEPARATOR,
        MenuItem(streak_label, None, enabled=False),
        MenuItem(xp_label, None, enabled=False),
        Menu.SEPARATOR,
        MenuItem("quit", on_quit),
    )


def main() -> int:
    if not ICON_PATH.exists():
        print(f"icon not found at {ICON_PATH}", file=sys.stderr)
        return 1

    img = Image.open(ICON_PATH).convert("RGBA").resize((64, 64), Image.NEAREST)
    icon = Icon("study-plan", img, title="study plan · starting…", menu=build_menu())

    threading.Thread(target=maybe_spawn_backend, daemon=True).start()
    threading.Thread(target=poll_loop, args=(icon,), daemon=True).start()

    try:
        icon.run()
    finally:
        _stop.set()
        shutdown_child()
    return 0


if __name__ == "__main__":
    sys.exit(main())
