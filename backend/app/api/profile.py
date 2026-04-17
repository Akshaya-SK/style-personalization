from fastapi import APIRouter
from app.services.rule_engine import generate_profile

router = APIRouter()

@router.post("/generate-profile")
def generate_user_profile(data: dict):
    result = generate_profile(data)
    return result
