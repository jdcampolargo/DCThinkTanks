import requests
from bs4 import BeautifulSoup
import logging
import os
from dotenv import load_dotenv

load_dotenv()




# Supabase URL and API Key
SUPABASE_URL = os.getenv('SUPABASE_URL')
SUPABASE_KEY = os.getenv('SUPABASE_KEY')


headers = {
    "Content-Type": "application/json",
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}"
}

response = requests.get(f"{SUPABASE_URL}/rest/v1/events", headers=headers)

if response.status_code == 200:
    print("Authenticated successfully!")
else:
    print("Failed to authenticate:", response.text)



# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def scrape_brookings():
    url = 'https://www.brookings.edu/events/'
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        logging.info("Successfully fetched the webpage.")
    except requests.RequestException as e:
        logging.error(f"Request failed: {e}")
        return []

    soup = BeautifulSoup(response.content, 'html.parser')
    events = soup.find_all('article', class_='article event article-one-fourth')

    event_data = []
    for event in events:
        try:
            title = event.find('span', class_='article-title').text.strip()
            date = event.find('div', class_='event-date').text.strip()
            location = event.find('p', class_='location').text.strip()
            link = event.find('a', class_='overlay-link')['href']
            event_data.append({
                'title': title,
                'date': date,
                'location': location,
                'link': link
            })
            logging.info(f"Scraped event: {title}")
        except AttributeError as e:
            logging.warning(f"Missing data in event: {e}")

    return event_data

def upload_to_supabase(events):
    headers = {
        "Content-Type": "application/json",
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}"
    }

    for event in events:
        response = requests.post(f"{SUPABASE_URL}/rest/v1/events", headers=headers, json=event)
        if response.status_code == 201:
            logging.info(f"Uploaded event: {event['title']}")
        else:
            logging.error(f"Failed to upload event: {response.text}")

# Main function
def main():
    events = scrape_brookings()
    if events:
        logging.info(f"Scraped {len(events)} events.")
        upload_to_supabase(events)
    else:
        logging.info("No events found.")

if __name__ == "__main__":
    main()
