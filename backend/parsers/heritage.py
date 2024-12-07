from utils import fetch_page, clean_text, get_scraped_date, validate_event, parse_event_date_heritage
import logging
from datetime import datetime


def scrape_heritage():
    url = 'https://www.heritage.org/events'
    soup = fetch_page(url)
    if not soup:
        return []

    events = soup.find_all('section', class_='result-card__event--upcoming')
    event_data = []

    for event in events:
        try:


            title = clean_text(event.find('a', class_='result-card__title').text)
            
            date_str = clean_text(event.find('p', class_='result-card__event-date').text)
            date = parse_event_date_heritage(date_str)


            time = clean_text(event.find('p', class_='result-card__time').text)


            time = clean_text(event.find('p', class_='result-card__time').text)
            category = clean_text(event.find('a', class_='result-card__event-issue').text)
            link = event.find('a', class_='result-card__title')['href']
            full_link = f"https://www.heritage.org{link}"

            # Assuming location is not provided, set a default or handle accordingly
            location = "Check Link"  # Adjust as needed

            event_data.append({
                'title': title,
                'thinktank': 'Heritage Foundation',
                'date': date,
                'time': time,
                'category': category,
                'location': location,
                'link': full_link,
                'scraped_date': get_scraped_date()
            })

            validate_event(event_data[-1])  # Validate event data
            logging.info(f"Scraped Heritage event: {title}")
        except AttributeError as e:
            logging.warning(f"Missing data in event: {e}")
    
    return event_data