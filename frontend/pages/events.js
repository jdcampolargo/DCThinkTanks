import { supabase } from '../lib/supabaseClient';
import Link from 'next/link';

// // Use getServerSideProps to reload everytime
// export async function getServerSideProps() {
//   const { data: events, error } = await supabase
//     .from('events')
//     .select('*')
//     .order('date', { ascending: true });

//   if (error) {
//     console.error('Error fetching events:', error);
//     return { props: { events: [] } };
//   }

//   return {
//     props: {
//       events,
//     },
//     // revalidate: 86400, // Revalidate once per day
//   };
// }

function getTodayDate() {
  return new Date('2024-12-02'); // Assume today is December 2, 2024
}

function getWeekDateRange() {
  const today = new Date('2024-12-02'); // Assume today is December 2, 2024
  const dayOfWeek = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - dayOfWeek); // Start of the current week
  const endOfNextWeek = new Date(startOfWeek);
  endOfNextWeek.setDate(startOfWeek.getDate() + 13); // End of the next week

  console.log('Start of Week:', startOfWeek.toISOString().split('T')[0]);
  console.log('End of Next Week:', endOfNextWeek.toISOString().split('T')[0]);

  return { startOfWeek, endOfNextWeek };
}

function parseDateString(dateString) {
  return new Date(dateString);
}

// Use getServerSideProps to reload every time
export async function getServerSideProps() {
  const today = getTodayDate();

  const { data: events, error } = await supabase
    .from('events')
    .select('*');

  if (error) {
    console.error('Error fetching events:', error);
    return { props: { events: [] } }; // Return an empty array if there's an error
  }

  // Filter and sort events in JavaScript
  const filteredAndSortedEvents = events
    .filter(event => {
      const eventDate = parseDateString(event.date);
      return eventDate >= today; // Only include events on or after today
    })
    .sort((a, b) => parseDateString(b.date) - parseDateString(a.date)); // Sort in descending order

  console.log('Filtered and Sorted Events:', filteredAndSortedEvents);

  return {
    props: {
      events: filteredAndSortedEvents || [], // Ensure events is an array
    },
  };
}



export default function EventsPage({ events }) {
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f5f5f4, #d6d3d1)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      padding: '2rem'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%'
    },
    title: {
      fontSize: '3.5rem',
      color: '#44403c',
      marginBottom: '2rem',
      textAlign: 'center',
      letterSpacing: '0.05em',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    },
    eventList: {
      listStyle: 'none',
      padding: 0
    },
    eventItem: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease'
    },
    eventTitle: {
      fontSize: '1.5rem',
      color: '#44403c',
      marginBottom: '0.5rem',
      textDecoration: 'none'
    },
    eventDetails: {
      color: '#57534e',
      margin: '0.5rem 0'
    },
    backLink: {
      textAlign: 'center',
      marginTop: '2rem',
      textDecoration: 'none',
      color: '#44403c',
      fontWeight: 'bold'
    },
    footer: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      padding: '1rem',
      marginTop: 'auto',
      color: '#44403c',
      textAlign: 'center'
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Upcoming Events</h1>
        
        <ul style={styles.eventList}>
          {events.map((event) => (
            <li key={event.id} style={styles.eventItem}>
              <a 
                href={event.link} 
                target="_blank" 
                rel="noopener noreferrer"
                style={styles.eventTitle}
              >
                <h2 style={styles.eventTitle}>{event.title}</h2>
              </a>
              <p style={styles.eventDetails}>{event.date}</p>
              <p style={styles.eventDetails}>{event.location}</p>
            </li>
          ))}
        </ul>

        <Link href="/" style={styles.backLink}>
          Back to Home
        </Link>
      </div>
      
      <footer style={styles.footer}>
        &copy; {new Date().getFullYear()} Where George Goes - Mapping History&apos;s Paths
      </footer>
    </div>
  );
}