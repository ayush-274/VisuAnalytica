from fastapi import APIRouter, Depends, HTTPException, BackgroundTasks, status
from sqlalchemy.orm import Session
from app.schemas import UserCreate, UserLogin
from app.crud import get_user_by_email, create_user
from app.utils import send_welcome_email, create_access_token
from app.database import get_db
from app.auth import authenticate_user

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

@router.post("/auth/login")
async def login_user(user: UserLogin, db: Session = Depends(get_db)):
    db_user = authenticate_user(db, user.email, user.password)
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Incorrect email or password"
        )
    access_token = create_access_token({"sub": db_user.email})
    return {"access_token": access_token, "token_type": "bearer"}
