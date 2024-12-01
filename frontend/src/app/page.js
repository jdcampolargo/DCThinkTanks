import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const styles = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f5f5f4, #d6d3d1)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif',
      position: 'relative',
      overflow: 'hidden'
    },
    container: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem',
      textAlign: 'center'
    },
    title: {
      fontSize: '4.5rem',
      color: '#44403c',
      marginBottom: '1rem',
      letterSpacing: '0.05em',
      textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
    },
    subtitle: {
      fontSize: '1.5rem',
      color: '#57534e',
      maxWidth: '600px',
      margin: '0 auto 2rem',
      fontStyle: 'italic'
    },
    navSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '2rem'
    },
    navButton: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: '12px',
      padding: '1.5rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '200px'
    },
    navButtonHover: {
      transform: 'scale(1.05)',
      backgroundColor: 'rgba(255,255,255,0.9)'
    },
    icon: {
      width: '3rem',
      height: '3rem',
      color: '#44403c'
    },
    navText: {
      marginTop: '1rem',
      color: '#44403c',
      fontWeight: 'bold'
    },
    quote: {
      fontSize: '1.5rem',
      color: '#57534e',
      fontStyle: 'italic',
      maxWidth: '500px',
      margin: '0 auto 2rem',
      position: 'relative',
      padding: '0 2rem'
    },
    quoteMarks: {
      position: 'absolute',
      fontSize: '4rem',
      color: 'rgba(0,0,0,0.1)',
      top: '-1rem'
    },
    footer: {
      backgroundColor: 'rgba(255,255,255,0.5)',
      padding: '1rem',
      marginTop: 'auto',
      color: '#44403c',
      textAlign: 'center'
    }
  };

  // Custom SVG Icons (same as previous version)
  const EventIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.icon}>
      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );

  const StoryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.icon}>
      <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
    </svg>
  );

  const MapIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={styles.icon}>
      <path fill="currentColor" d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
      <path fill="currentColor" d="M9 7.53l6 2.1V19l-6-2.11z"/>
    </svg>
  );

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Where George Goes</h1>
        
        <p style={styles.subtitle}>
          Tracing the extraordinary journeys and untold stories of exploration
        </p>
        
        <div style={styles.navSection}>
          <Link href="/events" style={styles.navButton}>
            <EventIcon />
            <span style={styles.navText}>Explore Events</span>
          </Link>
          
          <Link href="/about" style={styles.navButton}>
            <StoryIcon />
            <span style={styles.navText}>Our Story</span>
          </Link>
          
          <Link href="/map" style={styles.navButton}>
            <MapIcon />
            <span style={styles.navText}>Journey Map</span>
          </Link>
        </div>
        
        <blockquote style={styles.quote}>
          <span style={{...styles.quoteMarks, left: 0}}>"</span>
          Not all those who wander are lost
          <span style={{...styles.quoteMarks, right: 0}}>"</span>
        </blockquote>
      </div>
      
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Where George Goes - Mapping History's Paths
      </footer>
  </div>
  );
};

export default HomePage;