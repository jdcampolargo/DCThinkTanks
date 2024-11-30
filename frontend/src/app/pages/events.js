     // pages/events.js
     import React from 'react';
     import EventList from '../src/components/EventList';

     const EventsPage = ({ events }) => {
       return (
         <div>
           <h1>Upcoming Events</h1>
           <EventList events={events} />
         </div>
       );
     };

     export async function getServerSideProps() {
       try {
         const res = await fetch('https://your-api-endpoint/events');
         const events = await res.json();
         return { props: { events } };
       } catch (error) {
         console.error('Error fetching events:', error);
         return { props: { events: [] } };
       }
     }

     export default EventsPage;