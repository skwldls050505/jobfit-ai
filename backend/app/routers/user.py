from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate
from app.auth import hash_password
from app.schemas.user import UserLogin
from app.auth import verify_password, create_access_token

router = APIRouter()

@router.post("/signup")
def signup(user: UserCreate, db: Session = Depends(get_db)):
    
    new_user = User(
        email=user.email,
        password=hash_password(user.password),
        name=user.name
    )

    db.add(new_user)
    db.commit()

    return {
        "message": "회원가입 성공"
    }
@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    db_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not db_user:
        return {
            "error": "이메일 없음"
        }

    if not verify_password(
        user.password,
        db_user.password
    ):
        return {
            "error": "비밀번호 틀림"
        }

    access_token = create_access_token(
        data={
            "sub": db_user.email
        }
    )

    return {
        "message": "로그인 성공",
        "access_token": access_token
    }