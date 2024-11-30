   // components/EventItem.js
   import React from 'react';

   const EventItem = ({ event }) => (
     <li>
       <h2>{event.title}</h2>
       <p>Date: {event.date}</p>
       <p>Location: {event.location}</p>
       <p>Category: {event.category}</p>
       <a href={event.link} target="_blank" rel="noopener noreferrer">More Info</a>
     </li>
   );

   export default EventItem;