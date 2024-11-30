# Idea

Automated Aggregator Website with all of the DC Think Tank Events.

# Structure

High-level

1. Scrape
2. Reads it
3. Display


BACKEND
- Scrape using AWS Lambda
- Add to Database AWS RDS (PostgreSQL)
- Automate (Every Sunday Night) using AWS Cloud Watch

Another option is
- manually
- appsScript


Frontend
- NEXTJS
- Fetch it from database
- Display

What other things?
- Good design
    - Display
        - By Day
        - By Week (Show by hour and so on) (ex:https://www.aei.org/events/?gad_source=1&gclid=CjwKCAiA6aW6BhBqEiwA6KzDc48-kw92JU29SfTnq97h5FtPSZxCzvHRbOofYqxPA5YCtEDbEqK-3RoC-a8QAvD_BwE#:~:text=Substance%20Use-,Events%20Calendar,-December%2C%202024)
    - Automatic Google Calendar Addition 
- Monetization
- Distribution
- 

Instead of scraping websites, a better solution could be accessing the RSS Feeds of Think Tanks:
- RAND Corp: https://www.rand.org/events.xml
- 
