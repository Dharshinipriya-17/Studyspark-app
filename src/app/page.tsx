'use client';
import Link from 'next/link';
import React from 'react';

export default function HomePage() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>StudySpark</h1>
        <ul style={styles.navList}>
          <li><Link href="/features" style={styles.navLink}>Features</Link></li>
          <li><Link href="/about" style={styles.navLink}>About</Link></li>
          <li><Link href="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
        <Link href="/signin" style={styles.signInButton}>Sign In</Link>
      </nav>

      <section style={styles.hero}>
        <h2 style={styles.heading}>Plan Smarter with StudySpark</h2>
        <p style={styles.subtext}>
          Enter your exam date and topics — get a personalized daily study plan instantly.
        </p>
        <Link href="/getstarted" style={styles.ctaButton}>Get Started</Link>
      </section>

      <footer style={styles.footer}>
        <p>&copy; 2025 StudySpark. All rights reserved.</p>
      </footer>

      <style>{`
        a:hover {
          opacity: 0.85;
        }
        .cta:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        .nav-link:hover {
          color: #64ffda;
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
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
    transition: 'color 0.2s ease',
  },
  signInButton: {
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'opacity 0.2s ease',
  },
  hero: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3.5rem',
    fontWeight: 800,
    marginBottom: '20px',
    color: '#ffffff',
  },
  subtext: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '40px',
    color: '#b0bec5',
  },
  ctaButton: {
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '14px 36px',
    borderRadius: '30px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    boxShadow: '0 8px 24px rgba(100,255,218,0.3)',
  },
  footer: {
    textAlign: 'center',
    padding: '20px 0',
    borderTop: '1px solid #64ffda33',
    fontSize: '0.9rem',
    color: '#90a4ae',
  },
};
