'use client';
import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <h1 style={styles.logo}>StudySpark</h1>
        <div style={styles.navLinks}>
          <Link href="/" style={styles.link}>Home</Link>
        </div>
      </nav>

      <section style={styles.formWrapper}>
        <h2 style={styles.heading}>📬 Contact Us</h2>
        <form style={styles.form}>
          <input placeholder="Your Name" style={styles.input} />
          <input placeholder="Your Email" type="email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea} />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    background: '#0a192f',
    color: '#f0f4f8',
    minHeight: '100vh',
    fontFamily: 'Poppins, sans-serif',
    padding: '20px',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.8rem',
    color: '#64ffda',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#f0f4f8',
    textDecoration: 'none',
  },
  formWrapper: {
    maxWidth: '600px',
    margin: '80px auto 0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #1c2c44',
    backgroundColor: '#112240',
    color: '#f0f4f8',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #1c2c44',
    backgroundColor: '#112240',
    color: '#f0f4f8',
    height: '100px',
  },
  button: {
    backgroundColor: '#64ffda',
    color: '#0a192f',
    padding: '12px',
    borderRadius: '8px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
  },
};
