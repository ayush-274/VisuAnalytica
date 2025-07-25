from passlib.context import CryptContext
import aiosmtplib
from email.message import EmailMessage
import os

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

async def send_welcome_email(email: str):
    msg = EmailMessage()
    msg["From"] = os.getenv("MAIL_FROM", "no-reply@visuanalytica.com")
    msg["To"] = email
    msg["Subject"] = "Welcome to VisuAnalytica!"
    msg.set_content("Thank you for registering. Explore, visualize, and model data with ease!")
    await aiosmtplib.send(
        msg,
        hostname=os.getenv("SMTP_HOST"),
        port=int(os.getenv("SMTP_PORT", "587")),
        username=os.getenv("SMTP_USER"),
        password=os.getenv("SMTP_PASS"),
        use_tls=True,
    )
