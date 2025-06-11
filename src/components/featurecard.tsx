'use client';
import React from 'react';

interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export default function FeatureCard({ emoji, title, description }: FeatureCardProps) {
  return (
    <div style={styles.card} className="feature-card">
      <div style={styles.emoji}>{emoji}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <style jsx>{`
        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 24px rgba(100, 255, 218, 0.2);
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    backgroundColor: '#112240',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  emoji: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: '#f0f4f8',
  },
  description: {
    fontSize: '1rem',
    color: '#cbd5e0',
  },
};
