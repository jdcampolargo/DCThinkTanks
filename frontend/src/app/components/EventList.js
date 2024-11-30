import React from 'react';
import EventItem from './EventItem';

const EventList = ({ events }) => (
  <ul>
    {events.map(event => (
      <EventItem key={event.id} event={event} />
    ))}
  </ul>
);

export default EventList;