import { supabase } from '../lib/supabaseClient';

export async function getStaticProps() {
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });

  if (error) {
    console.error('Error fetching events:', error);
    return { props: { events: [] } };
  }

  return {
    props: {
      events,
    },
    revalidate: 86400, // Revalidate once per day
  };
}

export default function EventsPage({ events }) {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              <h2>{event.title}</h2>
            </a>
            <p>{event.date}</p>
            <p>{event.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
