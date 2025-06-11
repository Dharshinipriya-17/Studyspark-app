// app/about/page.tsx
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
        <Link href="/signin" style={styles.signInButton}>Sign In</Link>
      </nav>

      <section style={styles.section}>
        <h2 style={styles.title}>📘 About StudySpark</h2>
        <p style={styles.text}>
          StudySpark is your personal study planner. We help students prepare smarter
          by offering personalized study schedules based on your goals and time.
        </p>
      </section>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#0a192f',
    color: 'white',
    minHeight: '100vh',
    paddingBottom: '40px',
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
  signInButton: {
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  section: {
    maxWidth: '700px',
    margin: '60px auto',
    textAlign: 'center',
    padding: '0 20px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    color: '#b0bec5',
    lineHeight: 1.6,
  },
};
