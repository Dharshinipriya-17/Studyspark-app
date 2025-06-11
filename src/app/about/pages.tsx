'use client';
import Navbar from '@/components/navbar';
import React from 'react';

export default function AboutPage() {
  return (
    <div style={styles.container}>
      <Navbar showsignin={true} />

      <main style={styles.main}>
        <h1 style={styles.title}>📘 About StudySpark</h1>
        <p style={styles.text}>
          StudySpark is a smart study companion designed to help students plan, stay focused, and reach their academic goals more efficiently.
        </p>

        <p style={styles.text}>
          Whether you're preparing for exams or tracking your daily progress, StudySpark offers personalized schedules, focus tools, reminders, and a supportive community. We combine technology with productivity science to bring you a smoother study experience.
        </p>

        <p style={styles.text}>
          Our mission is simple: make your study journey effective, stress-free, and even enjoyable.
        </p>
      </main>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: '#0a192f',
    minHeight: '100vh',
    color: '#f0f4f8',
    fontFamily: 'Poppins, sans-serif',
  },
  main: {
    maxWidth: '800px',
    margin: '100px auto',
    padding: '0 30px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.8rem',
    color: '#64ffda',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#cbd5e0',
    marginBottom: '20px',
  },
};
