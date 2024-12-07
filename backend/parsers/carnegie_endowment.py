from utils import fetch_page, clean_text, get_scraped_date, validate_event
import logging

def scrape_carnegie_endowment():
    url = 'https://www.carnegieendowment.org/events/'
    soup = fetch_page(url)
    if not soup:
        return []

    events = soup.find_all('div', class_='context-block')
    event_data = []

    for event in events:
        try:
            title = clean_text(event.find('div', class_='heading').text)
            month = clean_text(event.find('div', class_='month').text).title()  # Capitalize the first letter
            day = clean_text(event.find('div', class_='day').text)
            year = clean_text(event.find('div', class_='year').text)
            formatted_date = f"{month} {day}, {year}"

            time = clean_text(event.find('div', class_='time').text)

            link = event.find('a', class_='anchor')['href']
            full_link = f"https://www.carnegieendowment.org{link}"

            event_data.append({
                'title': title,
                'thinktank': 'Carnegie Endowment for International Peace',
                'date': formatted_date,
                'time': time,
                'category': 'Public Policy',  # Adjust as needed
                'location': 'Check Link',  # So for this, we'll need something much more complicated. maybe selenium
                'link': full_link,
                'scraped_date': get_scraped_date()
            })

            validate_event(event_data[-1])  # Validate event data
            logging.info(f"Scraped Carnegie event: {title}")
        except AttributeError as e:
            logging.warning(f"Missing data in event: {e}")
    
    return event_data