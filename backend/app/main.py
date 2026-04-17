from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.profile import router as profile_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # open everything temporarily
    allow_credentials=True,
    allow_methods=["*"],   # must include OPTIONS
    allow_headers=["*"],
)

app.include_router(profile_router, prefix="/api")
