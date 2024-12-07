from parsers.brookings import scrape_brookings
from parsers.aei import scrape_aei
from db import upload_to_supabase
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def main():
    # Scrape events from Brookings
    brookings_events = scrape_brookings()
    if brookings_events:
        logging.info(f"Scraped {len(brookings_events)} Brookings events.")
        upload_to_supabase(brookings_events)
    else:
        logging.info("No Brookings events found.")

    # Scrape events from AEI
    aei_events = scrape_aei()
    if aei_events:
        logging.info(f"Scraped {len(aei_events)} AEI events.")
        upload_to_supabase(aei_events)

if __name__ == "__main__":
    main()
