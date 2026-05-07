from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    
    new_user = User(
        email=user.email,
        password=user.password,
        name=user.name
    )

    db.add(new_user)
    db.commit()

    return {
        "message": "회원가입 성공"
    }