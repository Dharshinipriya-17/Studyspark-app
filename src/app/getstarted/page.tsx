'use client';
import Link from 'next/link';
import React from 'react';

export default function GetStartedPage() {
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

      <section style={styles.section}>
        <h2 style={styles.title}>📝 Let’s Build Your Study Plan</h2>
        <p style={styles.subtitle}>Enter your exam date and topics to generate your personalized schedule.</p>

        <form style={styles.form}>
          <input type="date" placeholder="Exam Date" style={styles.input} />
          <textarea placeholder="List your topics..." style={styles.textarea} rows={6}></textarea>
          <button type="submit" style={styles.submitBtn}>Generate Plan</button>
        </form>

        <Link href="/" style={styles.backLink}>← Back to Home</Link>
      </section>

      <style>{`
        input:hover, textarea:hover {
          border-color: #64ffda;
        }
        button:hover {
          background-color: #52e0c4;
        }
        a:hover {
          opacity: 0.85;
        }
      `}</style>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#0a192f',
    color: 'white',
    minHeight: '100vh',
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
    maxWidth: '600px',
    margin: '80px auto',
    padding: '0 20px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 800,
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#b0bec5',
    marginBottom: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #ccc',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '2px solid #ccc',
    outline: 'none',
    resize: 'vertical',
  },
  submitBtn: {
    backgroundColor: '#64ffda',
    color: '#0a192f',
    fontWeight: 'bold',
    padding: '12px 24px',
    borderRadius: '30px',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
  },
  backLink: {
    display: 'inline-block',
    marginTop: '30px',
    color: '#64ffda',
    textDecoration: 'none',
  },
};
