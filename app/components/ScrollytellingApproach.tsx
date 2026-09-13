'use client';

import { useState, useEffect, useRef } from 'react';

const features = [
  {
    id: 'deep-expertise',
    title: 'Deep Ai Expertise',
    description: 'We've designed and deployed Ai across regulated enterprises, fintech firms, healthcare providers, and government agencies. We know what works, what doesn't, and how to explain it to your board.',
    illustration: 'expertise',
  },
  {
    id: 'embedded-partnership',
    title: 'Embedded Partnership Model',
    description: 'We don't parachute in with a 200-page report. We work embedded with your teams—designing architecture, building systems, and training your people so you own the result.',
    illustration: 'partnership',
  },
  {
    id: 'security-compliance',
    title: 'Born from Compliance and Security',
    description: 'Governance isn't bolted on at the end. We design security, compliance, and audit trails into the foundation. Your deployment is audit-ready from day one.',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkDesktop = () => {
      const isLargeEnough = window.innerWidth >= 1024 && window.innerHeight >= 740;
      setIsDesktop(isLargeEnough);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find which panel is most visible (closest to center of viewport)
        let mostVisibleIndex = 0;
        let maxVisibility = 0;

        entries.forEach((entry) => {
          const index = panelsRef.current.indexOf(entry.target as HTMLDivElement);
          if (index === -1) return;

          // Calculate how centered the panel is
          const rect = entry.boundingClientRect;
          const viewportCenter = window.innerHeight / 2;
          const panelCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(panelCenter - viewportCenter);
          const visibility = 1 - (distanceFromCenter / (window.innerHeight / 2));

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleIndex = index;
          }
        });

        if (maxVisibility > 0.1) {
          setActiveIndex(mostVisibleIndex);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '0px',
      }
    );

    panelsRef.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    return () => observer.disconnect();
  }, [isDesktop]);

  const scrollToPanel = (index: number) => {
    setActiveIndex(index);
    const panel = panelsRef.current[index];
    if (panel) {
      panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!isDesktop) {
    // Mobile: simple stacked layout
    return (
      <section className="bg-[#0a0a0a] py-16 px-4">
        <div className="max-w-1200px mx-auto">
          <h2 className="text-4xl font-800 text-white mb-4">How We Approach Ai Implementation</h2>
          <p className="text-base text-[#aaa] mb-12 max-w-[600px]">
            We're not consultants who hand off a report. We're implementation partners who work inside your organization to build systems that stick.
          </p>

          {features.map((feature) => (
            <div key={feature.id} className="mb-12">
              <h3 className="text-xl font-700 text-white mb-3">{feature.title}</h3>
              <p className="text-sm text-[#999] mb-6 leading-relaxed">{feature.description}</p>
              <div className="aspect-square rounded-2xl overflow-hidden border border-pink-500/20 bg-white/3">
                <IllustrationPanel type={feature.illustration} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop: scrollytelling layout
  return (
    <section className="bg-[#0a0a0a] py-0 px-0">
      <div className="flex gap-0 min-h-screen">
        {/* Left sticky column */}
        <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center px-8 py-20 bg-[#0a0a0a]">
          <div className="max-h-[580px] overflow-hidden">
            <h2 className="text-4xl font-800 text-white mb-6">How We Approach Ai Implementation</h2>
            <p className="text-base text-[#aaa] mb-10 leading-relaxed">
              We're not consultants who hand off a report. We're implementation partners who work inside your organization to build systems that stick.
            </p>

            {/* Accordion */}
            <div className="space-y-0 border-t border-gray-800">
              {features.map((feature, index) => (
                <div key={feature.id} className={`border-b border-gray-800 transition-all duration-300 ${
                  activeIndex === index ? 'bg-gray-900/50' : ''
                }`}>
                  <button
                    onClick={() => scrollToPanel(index)}
                    className="w-full py-4 px-0 text-left transition-colors duration-200 hover:text-white"
                    aria-expanded={activeIndex === index}
                  >
                    <h3 className={`text-base font-700 transition-all duration-300 ${
                      activeIndex === index
                        ? 'text-white text-lg'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}>
                      {feature.title}
                    </h3>
                  </button>
                  {activeIndex === index && (
                    <div className="pb-4 px-0 text-xs text-gray-400 leading-relaxed border-t border-gray-800 pt-4 animate-fadeInUp">
                      {feature.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right scrolling column */}
        <div className="w-1/2">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                panelsRef.current[index] = el;
              }}
              className="relative h-screen flex items-center justify-center p-8"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden border border-pink-500/20 bg-white/3">
                <IllustrationPanel type={feature.illustration} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
