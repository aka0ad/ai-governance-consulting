'use client';

import { useState, useEffect, useRef } from 'react';

const features = [
  {
    id: 'deep-expertise',
    title: 'Deep Ai Expertise',
    description: "We've designed and deployed Ai across regulated enterprises, fintech firms, healthcare providers, and government agencies. We know what works, what doesn't, and how to explain it to your board.",
    illustration: 'expertise',
  },
  {
    id: 'embedded-partnership',
    title: 'Embedded Partnership Model',
    description: "We don't parachute in with a 200-page report. We work embedded with your teams—designing architecture, building systems, and training your people so you own the result.",
    illustration: 'partnership',
  },
  {
    id: 'security-compliance',
    title: 'Born from Compliance and Security',
    description: "Governance isn't bolted on at the end. We design security, compliance, and audit trails into the foundation. Your deployment is audit-ready from day one.",
    illustration: 'security',
  },
  {
    id: 'practical-architecture',
    title: 'Practical, Proven Architecture',
    description: 'No theoretical frameworks. We use battle-tested patterns from real enterprise deployments. Your systems are built to scale, not to impress architects.',
    illustration: 'architecture',
  },
];

const IllustrationPanel = ({ type }: { type: string }) => {
  const gradientId = `grad-${type}`;

  const illustrations: Record<string, React.ReactNode> = {
    expertise: (
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="240" height="240" rx="20" fill="rgba(255,255,255,0.03)" stroke={`url(#${gradientId})`} strokeWidth="2" />
        <g opacity="0.8">
          <circle cx="80" cy="80" r="28" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <circle cx="150" cy="80" r="28" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.6" />
          <circle cx="220" cy="80" r="28" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.4" />
        </g>
        <path d="M 80 108 L 150 130 L 220 108" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" opacity="0.6" strokeDasharray="6,4" />
        <g opacity="0.9">
          <circle cx="80" cy="170" r="32" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
          <circle cx="220" cy="170" r="32" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" />
        </g>
        <path d="M 112 170 L 188 170" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.5" />
        <circle cx="150" cy="240" r="20" fill={`url(#${gradientId})`} opacity="0.8" />
      </svg>
    ),
    partnership: (
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="240" height="240" rx="20" fill="rgba(255,255,255,0.03)" stroke={`url(#${gradientId})`} strokeWidth="2" />
        <g>
          <circle cx="70" cy="100" r="24" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" opacity="0.9" />
          <circle cx="150" cy="70" r="24" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" opacity="0.9" />
          <circle cx="230" cy="100" r="24" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" opacity="0.9" />
          <circle cx="115" cy="180" r="24" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" opacity="0.9" />
          <circle cx="185" cy="180" r="24" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" opacity="0.9" />
        </g>
        <g stroke={`url(#${gradientId})`} strokeWidth="1.5" opacity="0.4">
          <path d="M 94 94 L 126 76" />
          <path d="M 174 76 L 206 94" />
          <path d="M 70 124 L 115 156" />
          <path d="M 230 124 L 185 156" />
          <path d="M 139 156 L 161 156" />
        </g>
        <circle cx="70" cy="100" r="5" fill={`url(#${gradientId})`} opacity="0.8" />
        <circle cx="150" cy="70" r="5" fill={`url(#${gradientId})`} opacity="0.8" />
        <circle cx="230" cy="100" r="5" fill={`url(#${gradientId})`} opacity="0.8" />
        <circle cx="115" cy="180" r="5" fill={`url(#${gradientId})`} opacity="0.8" />
        <circle cx="185" cy="180" r="5" fill={`url(#${gradientId})`} opacity="0.8" />
      </svg>
    ),
    security: (
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="240" height="240" rx="20" fill="rgba(255,255,255,0.03)" stroke={`url(#${gradientId})`} strokeWidth="2" />
        <g>
          <path d="M 150 60 L 220 90 L 220 160 C 220 200 150 240 150 240 C 150 240 80 200 80 160 L 80 90 Z" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2.5" opacity="0.9" />
          <circle cx="150" cy="135" r="20" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <path d="M 150 155 L 150 175" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <circle cx="145" cy="180" r="3" fill={`url(#${gradientId})`} opacity="0.8" />
          <circle cx="155" cy="180" r="3" fill={`url(#${gradientId})`} opacity="0.8" />
        </g>
        <rect x="90" y="210" width="120" height="8" rx="4" fill={`url(#${gradientId})`} opacity="0.5" />
      </svg>
    ),
    architecture: (
      <svg viewBox="0 0 300 300" className="w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <rect x="30" y="30" width="240" height="240" rx="20" fill="rgba(255,255,255,0.03)" stroke={`url(#${gradientId})`} strokeWidth="2" />
        <g>
          <rect x="60" y="70" width="50" height="50" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <rect x="125" y="70" width="50" height="50" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <rect x="190" y="70" width="50" height="50" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <rect x="92" y="145" width="50" height="50" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <rect x="157" y="145" width="50" height="50" fill="none" stroke={`url(#${gradientId})`} strokeWidth="2" opacity="0.7" />
          <rect x="125" y="220" width="50" height="15" rx="4" fill={`url(#${gradientId})`} opacity="0.6" />
        </g>
        <g stroke={`url(#${gradientId})`} strokeWidth="1" opacity="0.4">
          <line x1="85" y1="120" x2="117" y2="145" />
          <line x1="150" y1="120" x2="117" y2="145" />
          <line x1="150" y1="120" x2="182" y2="145" />
          <line x1="215" y1="120" x2="182" y2="145" />
        </g>
      </svg>
    ),
  };

  return <div className="w-full h-full flex items-center justify-center">{illustrations[type]}</div>;
};

export default function ScrollytellingApproach() {
  return (
    <section>
      <h2>How We Approach Ai Implementation</h2>
      <p>We're not consultants who hand off a report. We're implementation partners who work inside your organization to build systems that stick.</p>

      {features.map((feature) => (
        <div key={feature.id}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <div>
            <IllustrationPanel type={feature.illustration} />
          </div>
        </div>
      ))}
    </section>
  );
}
