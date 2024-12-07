from utils import fetch_page, clean_text, get_scraped_date, validate_event, parse_event_time_brookings, parse_event_date_brookings, parse_event_location_brookings
import logging

def scrape_brookings():
    url = 'https://www.brookings.edu/events/'
    soup = fetch_page(url)
    if not soup:
        return []

    events = soup.find_all('article', class_='article event article-one-fourth')
    event_data = []

    for event in events:
        try:
            title = clean_text(event.find('span', class_='article-title').text)
            date = clean_text(event.find('div', class_='event-date').text)
            formatted_date = parse_event_date_brookings(date)

            location = clean_text(event.find('p', class_='location').text)
            formatted_location = parse_event_location_brookings(location)

            time = clean_text(event.find('p', class_='time').text)
            formatted_time = parse_event_time_brookings(time)
            if not formatted_time:
                raise ValueError("Invalid time format")

            link = event.find('a', class_='overlay-link')['href']

            event_data.append({
                'title': title,
                'thinktank': 'Brookings Institution',
                'date': formatted_date,
                'time': formatted_time,
                'category': 'Public Policy',  # Adjust as needed
                'location': formatted_location,
                'link': link,
                'scraped_date': get_scraped_date()
            })

            validate_event(event_data[-1])  # Validate event data
            logging.info(f"Scraped Brookings event: {title}")
        except AttributeError as e:
            logging.warning(f"Missing data in event: {e}")
    
    return event_data
