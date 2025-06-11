// app/components/FeatureCard.tsx
import React from 'react';

type Props = {
  emoji: string;
  title: string;
  description: string;
};

export default function FeatureCard({ emoji, title, description }: Props) {
  return (
    <div style={styles.card}>
      <span style={styles.emoji}>{emoji}</span>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.desc}>{description}</p>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    backgroundColor: '#112240',
    padding: '20px',
    borderRadius: '12px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  emoji: {
    fontSize: '2rem',
  },
  title: {
    fontSize: '1.5rem',
    margin: '10px 0',
  },
  desc: {
    fontSize: '1rem',
    color: '#b0bec5',
  },
};
