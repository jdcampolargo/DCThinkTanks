# Idea

Automated Aggregator Website with all of the DC Think Tank Events.

Websites

- https://www.csis.org/events
- https://carnegieendowment.org/events
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
[

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

Another solution would be to scrape everything and just pass it to OPENAI, let it make sense and then show it nicely. But that's expneisve

Ok so what is the plan of attack?

1. Figure out how to do Brookings pretty well
2. Figure out database
    1. a) only show this week and b) next week, and future, and anything past that week should not be shown, how can I write that in the database and call it and so on?


How would a human do it?
- Check all the links
- Add it to the database depending on the parameters
- Done

What would I like?
- I would provide all the links for the websites
- Computer would use AI to understand what events to look for and add it to the database that week, and upload to database
- It shows

Why can't I do that?
- Maybe AI is expensive. But don't think like that. 

What is the future of events? Perplexity has been useful, actually. Like what would I use? Sure, think tanks is something kinda useful but not really. Maybe the think tankers would use but I would love to know everything that is happening in any given day. You would have a calendar of Think Tanks but there's more. I don't know if you can't just do this, like tell me all the conferences, who's coming, and why, what, where, and how to get in. Now, that would be exciting. Where George Goes. 


What are the paremeters / my data schema?


id: int8
title: text
thinktank: text
date: date
time: time
category: text
location: text
link: text
scraped_date: date and time including time zone


SQL
INSERT INTO "public"."events" ("id", "title", "thinktank", "date", "time", "category", "location", "link", "scraped_date") VALUES ('304', 'Relations with Turkey under Trump 2.0', 'Brookings Institution', 'December 11, 2024', '9:00 am - 10:00 am EST', 'Public Policy', 'Online', 'https://www.brookings.edu/events/relations-with-turkey-under-trump-2-0/', '2024-12-06 20:07:00+00');

STRUCTURE EXAMPLE
("id", "title", "thinktank", "date", "time", "category", "location", "link", "scraped_date") VALUES ('304', 'Relations with Turkey under Trump 2.0', 'Brookings Institution', 'December 11, 2024', '9:00 am - 10:00 am EST', 'Public Policy', 'Online', 'https://www.brookings.edu/events/relations-with-turkey-under-trump-2-0/', '2024-12-06 20:07:00+00');

I suppose the next steps are just like you gotta figure out how to do this. Continue writing customized parsers for everyone and then work on the design. Is that it? I guess so, alright onto the next one.


PROMPT:

@utils.py
@brookings.py

Parser code

It should fit this example

STRUCTURE EXAMPLE
(, "title", "thinktank", "date", "time", "category", "location", "link", "scraped_date") VALUES ('304', 'Relations with Turkey under Trump 2.0', 'Brookings Institution', 'December 11, 2024', '9:00 am - 10:00 am EST', 'Public Policy', 'Online', 'https://www.brookings.edu/events/relations-with-turkey-under-trump-2-0/', '2024-12-06 20:07:00+00');
