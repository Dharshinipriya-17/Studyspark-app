'use client';
import Navbar from '@/components/navbar';
import FeatureCard from '@/components/featurecard';
import React from 'react';

const features = [
  ['📅', 'Smart Planner', 'Automatically creates study schedules for you.'],
  ['⏰', 'Intelligent Reminders', 'Alerts you when it’s the best time to study.'],
  ['📊', 'Progress Tracking', 'Track completion and motivation daily.'],
  ['🎷', 'Focus Tools', 'Pomodoro + calming music combo.'],
  ['🔍', 'Personalized Feedback', 'See your strengths and weaknesses clearly.'],
  ['🤝', 'Community Support', 'Share tips and stay motivated together.'],
];

export default function FeaturesPage() {
  return (
    <div style={{ background: '#0a192f', color: '#f0f4f8', minHeight: '100vh' }}>
      <Navbar showsignin={true} />

      <main style={{ textAlign: 'center', padding: '60px 30px' }}>
        <h2 style={{ fontSize: '2.6rem', marginBottom: '20px' }}>
          Explore Our Ultra Smart Features
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '50px', color: '#cbd5e0' }}>
          Everything you need to crush your study goals with style.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          padding: '0 50px',
        }}>
          {features.map(([emoji, title, desc], i) => (
            <FeatureCard key={i} emoji={emoji} title={title} description={desc} />
          ))}
        </div>
      </main>
    </div>
  );
}
