from utils import fetch_page, clean_text, get_scraped_date, validate_event, parse_event_location_aei
import logging

def scrape_aei():
    url = 'https://www.aei.org/events/'
    soup = fetch_page(url)
    if not soup:
        return []

    events_section = soup.find('section', class_='upcoming-events image-posts')
    if not events_section:
        logging.warning("No upcoming events section found.")
        return []

    events = events_section.find_all('div', class_='post event')
    event_data = []


    for event in events:
        try:
            title = clean_text(event.find('h4', class_='post-image__title').text)
            date = clean_text(event.find('div', class_='time').find_all('span')[1].text)
    

            location = clean_text(event.find('div', class_='location').text)
            formatted_location = parse_event_location_aei(location)

            time = clean_text(event.find('div', class_='time').find_all('span')[0].text)
            link = event.find('h4', class_='post-image__title').find('a')['href']

            event_data.append({
                'title': title,
                'thinktank': 'AEI',
                'date': date,
                'time': time,
                'category': 'Public Policy',  # Adjust as needed
                'location': formatted_location,
                'link': link,
                'scraped_date': get_scraped_date()
            })

            validate_event(event_data[-1])  # Validate event data
            logging.info(f"Scraped AEI event: {title}")
        except AttributeError as e:
            logging.warning(f"Missing data in AEI event: {e}")
    
    return event_data