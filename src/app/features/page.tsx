'use client';
import Link from 'next/link';

export default function FeaturesPage() {
  const features = [
    ['📅', 'Smart Planner', 'Automatically creates study schedules for you.'],
    ['⏰', 'Intelligent Reminders', 'Alerts you when it’s the best time to study.'],
    ['📊', 'Progress Tracking', 'Track completion and motivation daily.'],
    ['🎷', 'Focus Tools', 'Pomodoro + calming music combo.'],
    ['🔍', 'Personalized Feedback', 'See your strengths and weaknesses clearly.'],
    ['🤝', 'Community Support', 'Share tips and stay motivated together.'],
  ];

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>StudySpark</h1>
        <div style={styles.navLinks}>
          <Link href="/" style={styles.link}>Home</Link>
          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/contact" style={styles.link}>Contact</Link>
          <Link href="/signin" style={styles.signin}>Sign In</Link>
        </div>
      </nav>

      <main style={styles.main}>
        <h2 style={styles.heading}>Explore Our Ultra Smart Features</h2>
        <p style={styles.subtext}>Everything you need to crush your study goals with style.</p>

        <div style={styles.grid}>
          {features.map(([emoji, title, desc], i) => (
            <div key={i} style={styles.card} className="feature-card">
              <div style={styles.emoji}>{emoji}</div>
              <h3 style={styles.cardTitle}>{title}</h3>
              <p style={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </main>

      <style>{`
        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(100, 255, 218, 0.2);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    background: '#0a192f',
    color: '#f0f4f8',
    minHeight: '100vh',
    paddingBottom: '50px',
  },
  nav: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '20px 50px', borderBottom: '1px solid #1c2c44',
  },
  logo: {
    fontSize: '1.8rem', fontWeight: 'bold', color: '#64ffda',
  },
  navLinks: {
    display: 'flex', gap: '30px',
  },
  link: {
    textDecoration: 'none', color: '#f0f4f8', fontSize: '1rem',
  },
  signin: {
    textDecoration: 'none', backgroundColor: '#64ffda', color: '#0a192f',
    padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold',
  },
  main: {
    textAlign: 'center', padding: '80px 30px 30px 30px',
  },
  heading: {
    fontSize: '2.6rem', fontWeight: 700, marginBottom: '10px',
  },
  subtext: {
    fontSize: '1.2rem', color: '#cbd5e0', marginBottom: '50px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '0 50px',
  },
  card: {
    background: '#112240',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'left',
    cursor: 'pointer',
  },
  emoji: {
    fontSize: '2rem', marginBottom: '12px',
  },
  cardTitle: {
    fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '10px', color: '#64ffda',
  },
  cardDesc: {
    fontSize: '1rem', color: '#cbd5e0',
  },
};
