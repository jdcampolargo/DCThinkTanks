from parsers.brookings import scrape_brookings
from parsers.aei import scrape_aei
from parsers.carnegie_endowment import scrape_carnegie_endowment
from parsers.heritage import scrape_heritage
from db import upload_to_supabase
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')


def main():

    # brookings_events = scrape_brookings()
    # if brookings_events:
    #     logging.info(f"Scraped {len(brookings_events)} Brookings events.")
    #     upload_to_supabase(brookings_events)
    # else:
    #     logging.info("No Brookings events found.")

    # aei_events = scrape_aei()
    # if aei_events:
    #     logging.info(f"Scraped {len(aei_events)} AEI events.")
    #     upload_to_supabase(aei_events)

    # carnegie_events = scrape_carnegie_endowment()
    # if carnegie_events:
    #     logging.info(f"Scraped {len(carnegie_events)} Carnegie events.")
    #     upload_to_supabase(carnegie_events)

    heritage_events = scrape_heritage()
    if heritage_events:
        logging.info(f"Scraped {len(heritage_events)} Carnegie events.")
        upload_to_supabase(heritage_events) 

if __name__ == "__main__":
    main()
