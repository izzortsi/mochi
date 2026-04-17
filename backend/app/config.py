from pydantic_settings import BaseSettings
from pathlib import Path


class Settings(BaseSettings):
    host: str = "0.0.0.0"
    port: int = 4000
    data_dir: Path = Path(__file__).resolve().parent.parent / "data"
    pdfs_dir: Path = Path(__file__).resolve().parent.parent / "pdfs"
    ollama_url: str = "http://localhost:11434"
    ollama_model: str = "glm-ocr:latest"
    max_upload_bytes: int = 32 * 1024 * 1024

    model_config = {"env_prefix": "SP_"}


settings = Settings()
