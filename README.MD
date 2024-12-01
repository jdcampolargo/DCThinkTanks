# Idea

Automated Aggregator Website with all of the DC Think Tank Events.

Websites

- https://www.csis.org/events
- https://carnegieendowment.org/events?lang=en
- https://www.heritage.org/events/12/2024/#event-calendar
- https://www.brookings.edu/events/
- https://www.urban.org/events
- https://www.piie.com/events
- https://www.wilsoncenter.org/events
- https://www.americanprogress.org/events/
- https://www.atlanticcouncil.org/events/
- https://www.rand.org/events.html
- https://www.hudson.org/events
- https://www.cfr.org/event
- https://www.cato.org/events
- https://www.cnas.org/events
- https://www.aei.org/events/
- https://www.rff.org/events/
- https://freedomhouse.org/events
- https://itif.org/events/
- https://www.cgdev.org/section/events
- https://www.usip.org/events
- https://www.thedialogue.org/events/
- https://www.nbr.org/event-listing/
- https://www.mei.edu/events
- https://www.aspeninstitute.org/location/washington-dc-events/
- https://www.ifpri.org/events/
- https://www.rstreet.org/events/
- https://www.newamerica.org/events/
- https://www.piie.com/events
- https://theird.org/events/



- https://www.wri.org/events

- Other Events

https://www.loc.gov/events/

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

- Filter by ThinkTank, by week, by hour, etc


- Monetization
- Distribution
- 

Instead of scraping websites, a better solution could be accessing the RSS Feeds of Think Tanks:
- RAND Corp: https://www.rand.org/events.xml
- List of RSS Feeds: https://guides.libraries.indiana.edu/c.php?g=199682&p=1313704
- 



VULNERABILITIES
- Fix supabase, only add files from authenticated users
- For all the links, add so people know they're coming from here