import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')
