from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.routers import progress, courses, import_, ws, pet, notes, llm, srs, memory
from app.seed import seed_data_dir, seed_oauth_tokens

# Sync git-tracked data files into the runtime data dir before any router
# touches state. On Render this overwrites whatever's on the persistent
# disk with the bundled copy; locally this is a no-op since the bundled
# path IS the data dir. See app/seed.py for the full contract.
seed_data_dir()
# Restore the anthropic-oauth tokens.json from env var if the file is
# missing — survives disk rebuilds without manual shell-paste recovery.
seed_oauth_tokens()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(progress.router)
app.include_router(courses.router)
app.include_router(import_.router)
app.include_router(pet.router)
app.include_router(notes.router)
app.include_router(llm.router)
app.include_router(srs.router)
app.include_router(memory.router)


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await ws._handle(websocket)
