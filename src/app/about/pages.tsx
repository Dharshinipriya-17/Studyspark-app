'use client';
import React from 'react';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <Navbar showSignIn={true} />

      <section style={styles.section}>
        <h1 style={styles.heading}>📚 About StudySpark</h1>
        <p style={styles.intro}>
          StudySpark is your intelligent study companion, built to make learning smarter, not harder. We believe that every student deserves personalized, distraction-free, and effective study planning tailored to their goals.
        </p>

        <div style={styles.valuesBox}>
          <h2 style={styles.subheading}>🌟 Our Mission</h2>
          <p style={styles.text}>
            To empower learners with tools that understand their habits, optimize their study sessions, and guide them towards consistent academic success.
          </p>
        </div>

        <div style={styles.valuesBox}>
          <h2 style={styles.subheading}>🚀 What We Offer</h2>
          <ul style={styles.list}>
            <li>🧠 AI-driven study plans based on your syllabus & exam date.</li>
            <li>📈 Real-time progress tracking and performance feedback.</li>
            <li>⏰ Intelligent reminders and Pomodoro-based focus sessions.</li>
            <li>🎯 Personalized dashboards for motivation and goal-setting.</li>
            <li>🤝 Community-driven peer learning and accountability.</li>
          </ul>
        </div>

        <div style={styles.valuesBox}>
          <h2 style={styles.subheading}>🔧 Our Vision</h2>
          <p style={styles.text}>
            We aim to become the go-to platform for students seeking a balance between discipline and mental well-being while preparing for exams.
          </p>
        </div>

        <p style={styles.footerNote}>
          Built with 💚 by a team passionate about technology and education.
        </p>
      </section>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    backgroundColor: '#0a192f',
    color: '#f0f4f8',
    minHeight: '100vh',
    fontFamily: 'Poppins, sans-serif',
    paddingBottom: '40px',
  },
  section: {
    maxWidth: '900px',
    margin: '80px auto',
    padding: '0 20px',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '30px',
    color: '#64ffda',
  },
  intro: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    textAlign: 'center',
    marginBottom: '50px',
    color: '#cbd5e0',
  },
  valuesBox: {
    marginBottom: '40px',
  },
  subheading: {
    fontSize: '1.6rem',
    fontWeight: 700,
    color: '#64ffda',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#d1d5db',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    lineHeight: '1.8',
    fontSize: '1.1rem',
    color: '#d1d5db',
  },
  footerNote: {
    marginTop: '60px',
    textAlign: 'center',
    fontSize: '1rem',
    color: '#94a3b8',
    fontStyle: 'italic',
  },
};
