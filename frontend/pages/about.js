import Link from 'next/link';

export default function AboutPage() {
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
      maxWidth: '800px',
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
    content: {
      backgroundColor: 'rgba(255,255,255,0.7)',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      marginBottom: '2rem'
    },
    paragraph: {
      color: '#57534e',
      lineHeight: '1.6',
      marginBottom: '1rem'
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
        <h1 style={styles.title}>Our Story</h1>
        
        <div style={styles.content}>
          <p style={styles.paragraph}>
            Where George Goes is a passionate project dedicated to tracing and sharing extraordinary journeys of exploration. Our mission is to uncover and celebrate the untold stories of adventurers, travelers, and wanderers who have shaped our understanding of the world.
          </p>
          <p style={styles.paragraph}>
            We believe that every journey tells a story, and every story connects us to the broader tapestry of human experience. Our team researches, curates, and presents historical and contemporary narratives that inspire curiosity and adventure.
          </p>
          <p style={styles.paragraph}>
            From historical expeditions to modern-day explorations, we aim to illuminate the spirit of discovery that drives human beings to explore the unknown, challenge boundaries, and expand our collective understanding of the world around us.
          </p>
        </div>

        <Link href="/" style={styles.backLink}>
          Back to Home
        </Link>
      </div>
      
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Where George Goes - Mapping History's Paths
      </footer>
    </div>
  );
}