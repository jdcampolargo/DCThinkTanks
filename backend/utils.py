import requests
from bs4 import BeautifulSoup
from datetime import datetime
import logging

# Utility function to fetch and parse a webpage
def fetch_page(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        logging.info(f"Successfully fetched {url}.")
        return BeautifulSoup(response.content, 'html.parser')
    except requests.RequestException as e:
        logging.error(f"Request failed for {url}: {e}")
        return None

# Utility function to clean text
def clean_text(text):
    if text:
        return " ".join(text.strip().split())
    return ""

# Utility function to format the current datetime as "YYYY-MM-DD HH:MM"
def get_scraped_date():
    return datetime.now().strftime("%Y-%m-%d %H:%M")

# Function to validate event data against the schema
def validate_event(event):
    required_fields = ["title", "thinktank", "date", "time", "category", "location", "link", "scraped_date"]
    for field in required_fields:
        if field not in event or not event[field]:
            raise ValueError(f"Missing or empty field: {field}")
    return True

#Brookings
def parse_event_time_brookings(time_str):
    try:
        # Example input: "Tuesday, 9:00 am - 10:00 am EST"
        # Remove the day for simplicity
        time_str = time_str.split(', ', 1)[1]  # Keep everything after the first comma
        return time_str
    except Exception as e:
        logging.error(f"Failed to parse time: {time_str} with error: {e}")
        return None
    
def parse_event_date_brookings(date_str):
    try:
        # Example input: "December 09 2024"
        # Convert to "December 09, 2024"
        parts = date_str.split()
        if len(parts) == 3:
            formatted_date = f"{parts[0]} {parts[1]}, {parts[2]}"
            return formatted_date
        else:
            raise ValueError("Invalid date format")
    except Exception as e:
        logging.error(f"Failed to parse date: {date_str} with error: {e}")
        return None
    
def parse_event_location_brookings(location):
    try:
        location = location.strip().lower()
        if "online" in location:
            return "Online"
        elif "brookings institution" in location or "washington d.c." in location:
            return "The Brookings Institution"
        else:
            return location  # Return the location as is if it doesn't match known patterns
    except Exception as e:
        logging.error(f"Failed to parse location: {location} with error: {e}")
        return location  # Return the original location if there's an error


#AEI 

def parse_event_location_aei(location):
    try:
        location = location.strip().lower()
        if "online" in location:
            return "Online"
        elif "aei" in location or "washington d.c." or "person" in location:
            return "The American Enterprise Institute"
        else:
            return location  # Return the location as is if it doesn't match known patterns
    except Exception as e:
        logging.error(f"Failed to parse location: {location} with error: {e}")
        return location  # Return the original location if there's an error


