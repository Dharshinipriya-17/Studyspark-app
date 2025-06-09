'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>StudySpark</h1>
        <div style={styles.navLinks}>
          <Link href="/" style={styles.link}>Home</Link>
        </div>
      </nav>

      <section style={styles.content}>
        <h2 style={styles.heading}>About StudySpark</h2>
        <p style={styles.text}>
          StudySpark is your all-in-one study companion, helping you prepare for exams in the smartest way possible.
          We believe in data-driven learning and motivation that fuels long-term success.
        </p>
      </section>
    </div>
  );
}

const styles = {
  container: { background: '#0a192f', color: '#f0f4f8', minHeight: '100vh', fontFamily: 'Poppins, sans-serif', padding: '20px' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' },
  logo: { fontSize: '1.8rem', color: '#64ffda' },
  navLinks: { display: 'flex', gap: '20px' },
  link: { color: '#f0f4f8', textDecoration: 'none' },
  content: { maxWidth: '800px', margin: '100px auto 0', textAlign: 'center' },
  heading: { fontSize: '2.5rem', marginBottom: '20px' },
  text: { fontSize: '1.1rem', color: '#cbd5e0' },
};
