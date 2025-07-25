from fastapi import APIRouter, Depends, HTTPException, status, BackgroundTasks
from sqlalchemy.orm import Session
from app.schemas import UserCreate
from app.crud import get_user_by_email, create_user
from app.database import get_db
from app.utils import send_welcome_email

router = APIRouter()

@router.post("/auth/register")
async def register_user(
    user: UserCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db)
):
    if get_user_by_email(db, user.email):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email is already registered"
        )
    db_user = create_user(db, user)
    background_tasks.add_task(send_welcome_email, user.email)
    return {"msg": "Registration successful! Check your email for a welcome message."}
