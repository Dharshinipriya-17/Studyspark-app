'use client';
import Link from 'next/link';
import React from 'react';

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>StudySpark</h1>
        <ul style={styles.navList}>
          <li><Link href="/" style={styles.navLink}>Home</Link></li>
          <li><Link href="/features" style={styles.navLink}>Features</Link></li>
          <li><Link href="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>

      <section style={styles.section}>
        <h2 style={styles.title}>About StudySpark</h2>
        <p style={styles.description}>
          StudySpark helps students create effective study schedules based on their exam dates and topics.
          Our goal is to help students plan smarter, not harder.
        </p>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#0a192f',
    color: 'white',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #64ffda33',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#64ffda',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
  },
  section: {
    maxWidth: '700px',
    margin: '80px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.1rem',
    color: '#b0bec5',
  },
};
