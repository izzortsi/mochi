from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.routers import progress, courses, import_, ws, pet, notes, llm, srs, memory

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
