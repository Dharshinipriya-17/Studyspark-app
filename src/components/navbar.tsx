// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import React from 'react';

type NavbarProps = {
  showSignIn?: boolean;
};

export default function Navbar({ showSignIn = true }: NavbarProps) {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>StudySpark</h1>
      <ul style={styles.navList}>
        <li><Link href="/" style={styles.navLink}>Home</Link></li>
        <li><Link href="/features" style={styles.navLink}>Features</Link></li>
        <li><Link href="/about" style={styles.navLink}>About</Link></li>
        <li><Link href="/contact" style={styles.navLink}>Contact</Link></li>
      </ul>
      {showSignIn && (
        <Link href="/signin" style={styles.signInButton}>Sign In</Link>
      )}
    </nav>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #64ffda33',
    backgroundColor: '#0a192f',
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
};
