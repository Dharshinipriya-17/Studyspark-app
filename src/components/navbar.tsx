'use client';
import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>StudySpark</h1>
      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/features" style={styles.link}>Features</Link>
        <Link href="/about" style={styles.link}>About</Link>
        <Link href="/contact" style={styles.link}>Contact</Link>
        <Link href="/signin" style={styles.signIn}>Sign In</Link>
      </div>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    background: '#0a192f',
    borderBottom: '1px solid #1c2c44',
  },
  logo: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#64ffda',
  },
  links: {
    display: 'flex',
    gap: '25px',
  },
  link: {
    color: '#f0f4f8',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  signIn: {
    textDecoration: 'none',
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
  },
};
