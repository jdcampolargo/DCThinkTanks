
import requests
from config import SUPABASE_URL, SUPABASE_KEY
import logging


headers = {
    "Content-Type": "application/json",
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}"
}

# Upload event data to Supabase
def upload_to_supabase(event_data):
    for event in event_data:
        response = requests.post(f"{SUPABASE_URL}/rest/v1/events", headers=headers, json=event)
        if response.status_code == 201:
            logging.info(f"Uploaded event: {event['title']}")
        else:
            logging.error(f"Failed to upload event: {response.text}")
