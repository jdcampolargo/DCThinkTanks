# Idea

Automated Aggregator Website with all of the DC Think Tank Events.

Websites

- https://www.csis.org/events
- https://carnegieendowment.org/events?lang=en
- https://www.heritage.org/events/12/2024/#event-calendar
[x] https://www.brookings.edu/events/
- https://www.urban.org/events
- https://www.piie.com/events
- http://www.cdt.org/
- https://www.wilsoncenter.org/events
- https://www.americanprogress.org/events/
- https://www.atlanticcouncil.org/events/
- https://www.rand.org/events.html
- https://www.hudson.org/events
- https://www.cfr.org/event
- https://www.cato.org/events
- https://www.cnas.org/events
[x] https://www.aei.org/events/
- https://www.rff.org/events/
- https://freedomhouse.org/events
- https://itif.org/events/
- http://www.ips-dc.org/
- https://mediarelations.gwu.edu/gws-institute-politics-democracy-and-internet-announces-new-director
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
- https://www.sais-jhu.edu/
- https://www.press.org/
- https://www.progressivepolicy.org/
- https://www.mei.edu/
- http://www.archives.gov/



- https://www.wri.org/events

- Other Events

https://www.loc.gov/events/
Smithsonian

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
    - Fiter by tags / section / and more

- Filter by ThinkTank, by week, by hour, etc


- Monetization
- Distribution
    - Linkedin, Reddit, News Around The City (EASY) --> WASHINGTONIAN, POST, Hispanic ONES, ETC



Instead of scraping websites, a better solution could be accessing the RSS Feeds of Think Tanks:
- RAND Corp: https://www.rand.org/events.xml
- List of RSS Feeds: https://guides.libraries.indiana.edu/c.php?g=199682&p=1313704
- 



VULNERABILITIES
- Fix supabase, only add files from authenticated users
- For all the links, add so people know they're coming from here

VERSION 1

1) SCRAPE FROM THREE WEBSITES
[x] Brookings
[x] AEI
[] One more 

2) DESIGN
[] Show who it's from
[] 


List


What would be ideal instead of writing every scraper?

- Here all the links. Scrape it every week. Whatever, just copy and poaste, whatever
    - Similar Google Notebook
    - And then boom!!! 
- Upload it to Supabase

Another thing I could do is figure out a way to be like, "VISH, here are all the links. Upload it to supabase and done deal."


Maybe https://spider.cloud/ this could be useful
- PERPLEXITY API



