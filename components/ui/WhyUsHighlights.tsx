import React from 'react';
import Award from '../../assets/award.png';
import Leaf from '../../assets/leaf.png';

const highlights = [
  {
    icon: '🌱',
    title: 'Quality Manufacturing',
    description: 'Carbon-neutral manufacturing with premium materials and advanced practices.',
  },
  {
    title: 'Quality Assurance',
    description: 'Advanced manufacturing technology and strict quality control processes for healthcare and industry.',
    icon: '🏆',
  },
  {
    title: 'Global Support',
    description: '24/7 technical support and customized solutions for clients across 40+ countries.',
    icon: '🌍',
  },
];

export default function WhyUsHighlights() {
  return (
    <section style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
      {highlights.map((item) => (
        <div
          key={item.title}
          style={{
            background: '#fff',
            borderRadius: '1rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '2rem',
            minWidth: '250px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
          <h3 style={{ color: '#218838' }}>{item.title}</h3>
          <p style={{ color: '#555' }}>{item.description}</p>
        </div>
      ))}
    </section>
  );
}