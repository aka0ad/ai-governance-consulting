import ScrollytellingApproach from './components/ScrollytellingApproach';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-box">
          <h1>Claude Ai Governance, Security & Enterprise Implementation</h1>
          <p>Set up, secure, and scale Claude Ai across your organization with governance frameworks, compliance mapping, and data protection built in.</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </section>

      <section>
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Claude Ai Team Setup & Onboarding</h3>
            <p>Configure Claude Ai team accounts from the ground up. SSO integration, user management, workspace setup, security baseline.</p>
          </div>

          <div className="service-card">
            <h3>Ai System Architecture Design</h3>
            <p>Design secure, scalable Ai system architecture for your org. Workflow integration, data handling, compliance mapping.</p>
          </div>

          <div className="service-card">
            <h3>Claude Ai Governance & Compliance</h3>
            <p>Map Claude Ai usage to regulatory requirements (EU Ai Act, GDPR, sector rules). Build governance policies and audit trails.</p>
          </div>

          <div className="service-card">
            <h3>Workflow Integration & Automation</h3>
            <p>Embed Claude Ai into your existing systems (APIs, dashboards, data pipelines). Custom integrations and automation setup.</p>
          </div>

          <div className="service-card">
            <h3>Security & Access Control</h3>
            <p>Implement role-based access, data isolation, audit logging, and security hardening for Claude Ai deployments.</p>
          </div>

          <div className="service-card">
            <h3>Ongoing Implementation Support</h3>
            <p>Monthly retainer for deployment guidance, team onboarding, troubleshooting, and scaling as you grow.</p>
          </div>
        </div>
      </section>

      <section className="why-governance-section">
        <div className="why-governance-container">
          <div className="why-governance-header">
            <h2>Why Claude Ai Governance Matters</h2>
            <p>Enterprise teams deploying Claude Ai face a critical choice: build secure, compliant systems from day one, or fix governance gaps later (at 10x the cost).</p>
          </div>

          <div className="why-governance-blocks">
            <div className="governance-block">
              <h3>Compliance and security aren't afterthoughts</h3>
              <p>Data handling, audit trails, and regulatory mapping need to be built in from day one.</p>
              <div className="block-illustration">
                <svg viewBox="0 0 300 250" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="lock-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="260" height="210" rx="16" fill="rgba(255,255,255,0.03)" stroke="url(#lock-grad)" strokeWidth="1.5" />
                  <g>
                    <rect x="90" y="60" width="120" height="80" rx="8" fill="none" stroke="url(#lock-grad)" strokeWidth="2" />
                    <circle cx="150" cy="75" r="12" fill="none" stroke="url(#lock-grad)" strokeWidth="2" />
                    <line x1="150" y1="87" x2="150" y2="105" stroke="url(#lock-grad)" strokeWidth="2" />
                    <rect x="110" y="110" width="80" height="25" rx="4" fill="none" stroke="url(#lock-grad)" strokeWidth="1.5" opacity="0.6" />
                    <rect x="110" y="145" width="80" height="25" rx="4" fill="none" stroke="url(#lock-grad)" strokeWidth="1.5" opacity="0.6" />
                  </g>
                  <text x="150" y="200" textAnchor="middle" fontSize="11" fill="#aaa" opacity="0.7">Built-In Security</text>
                </svg>
              </div>
            </div>

            <div className="governance-block">
              <h3>Scale requires architecture</h3>
              <p>Ad-hoc Claude Ai usage across teams creates chaos. A foundation lets you scale confidently.</p>
              <div className="block-illustration">
                <svg viewBox="0 0 300 250" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="scale-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="260" height="210" rx="16" fill="rgba(255,255,255,0.03)" stroke="url(#scale-grad)" strokeWidth="1.5" />
                  <g>
                    <rect x="50" y="60" width="40" height="40" fill="none" stroke="url(#scale-grad)" strokeWidth="1.5" opacity="0.6" />
                    <rect x="110" y="60" width="40" height="40" fill="none" stroke="url(#scale-grad)" strokeWidth="1.5" opacity="0.6" />
                    <rect x="170" y="60" width="40" height="40" fill="none" stroke="url(#scale-grad)" strokeWidth="1.5" opacity="0.6" />
                    <rect x="80" y="120" width="40" height="40" fill="none" stroke="url(#scale-grad)" strokeWidth="1.5" opacity="0.6" />
                    <rect x="140" y="120" width="40" height="40" fill="none" stroke="url(#scale-grad)" strokeWidth="1.5" opacity="0.6" />
                    <rect x="110" y="170" width="40" height="40" fill="none" stroke="url(#scale-grad)" strokeWidth="2" />
                  </g>
                  <text x="150" y="230" textAnchor="middle" fontSize="11" fill="#aaa" opacity="0.7">Scalable Architecture</text>
                </svg>
              </div>
            </div>

            <div className="governance-block">
              <h3>Your team needs guidance</h3>
              <p>Onboarding Claude Ai requires training and governance. We do that work so you don't have to.</p>
              <div className="block-illustration">
                <svg viewBox="0 0 300 250" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <linearGradient id="team-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="260" height="210" rx="16" fill="rgba(255,255,255,0.03)" stroke="url(#team-grad)" strokeWidth="1.5" />
                  <g>
                    <circle cx="90" cy="90" r="18" fill="none" stroke="url(#team-grad)" strokeWidth="2" opacity="0.8" />
                    <circle cx="150" cy="75" r="18" fill="none" stroke="url(#team-grad)" strokeWidth="2" opacity="0.8" />
                    <circle cx="210" cy="90" r="18" fill="none" stroke="url(#team-grad)" strokeWidth="2" opacity="0.8" />
                    <path d="M 108 82 L 132 80" stroke="url(#team-grad)" strokeWidth="1" opacity="0.5" />
                    <path d="M 168 82 L 192 82" stroke="url(#team-grad)" strokeWidth="1" opacity="0.5" />
                    <circle cx="90" cy="90" r="4" fill="url(#team-grad)" />
                    <circle cx="150" cy="75" r="4" fill="url(#team-grad)" />
                    <circle cx="210" cy="90" r="4" fill="url(#team-grad)" />
                    <path d="M 100 140 L 200 140" stroke="url(#team-grad)" strokeWidth="2" opacity="0.6" />
                  </g>
                  <text x="150" y="190" textAnchor="middle" fontSize="11" fill="#aaa" opacity="0.7">Expert Guidance</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollytellingApproach />

      <section style={{ textAlign: 'center' }}>
        <h2>Ready to bring your Ai to life?</h2>
        <p>Let's talk about your Claude Ai team account strategy.</p>
        <a href="/contact" className="cta-button">Schedule a Consultation</a>
      </section>
    </>
  );
}
