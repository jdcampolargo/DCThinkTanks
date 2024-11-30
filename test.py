import requests
from bs4 import BeautifulSoup
import logging

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
            category = event.find('a', class_='article-type').text.strip()
            link = event.find('a', class_='overlay-link')['href']
            event_data.append({
                'title': title,
                'date': date,
                'location': location,
                'link': link
            })
            logging.info(f"Scraped event: {title}, {date}, {location}, {link}")
        except AttributeError as e:
            logging.warning(f"Missing data in event: {e}")

    return event_data

# Main function
def main():
    events = scrape_brookings()
    if events:
        logging.info(f"Scraped {len(events)} events.")
        for event in events:
            print(event)
    else:
        logging.info("No events found.")

if __name__ == "__main__":
    main()