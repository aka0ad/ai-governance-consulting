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
        <h2>The Problem</h2>
        <p>
          You have a Claude Ai team account and want to maximize it across your organisation. But you're unsure how to set it up securely,
          integrate it into workflows, configure governance, ensure compliance, and scale it across teams.
        </p>
        <p>
          You need an implementation partner who understands Claude Ai, your security requirements, and your regulatory environment.
        </p>
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

      <section className="why-section">
        <div className="section-content">
          <div className="content-block">
            <h2>Why Claude Ai Governance Matters</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#475569' }}>
              Enterprise teams deploying Claude Ai face a critical choice: build secure, compliant systems from day one, or fix governance gaps later (at 10x the cost).
            </p>

            <div className="reasons-grid">
              <div className="reason-card">
                <div className="reason-icon">⚡</div>
                <h3>Unlock Value in Weeks, Not Months</h3>
                <p>Misconfigured Claude Ai deployments waste engineering time and organizational trust. Proper setup from day one eliminates months of rework and security patches.</p>
              </div>

              <div className="reason-card">
                <div className="reason-icon">🔒</div>
                <h3>Security & Compliance Built In</h3>
                <p>Data handling, audit trails, and regulatory mapping (GDPR, EU AI Act, sector rules) must be designed upfront. Bolting on compliance later costs 3-5x more.</p>
              </div>

              <div className="reason-card">
                <div className="reason-icon">📊</div>
                <h3>Scale Confidently with Architecture</h3>
                <p>Ad-hoc Claude Ai usage creates governance chaos: no audit trail, no access controls, no compliance story. A foundation lets you scale across teams safely.</p>
              </div>

              <div className="reason-card">
                <div className="reason-icon">👥</div>
                <h3>Teams Need Guidance, Not Just Tools</h3>
                <p>Onboarding teams to Claude Ai safely requires training, governance frameworks, and hand-holding. Most organizations don't have this expertise in-house.</p>
              </div>
            </div>
          </div>

          <div className="image-block">
            <svg viewBox="0 0 400 500" style={{ width: '100%', maxWidth: '400px' }}>
              <defs>
                <linearGradient id="grad-why" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Background shapes */}
              <circle cx="200" cy="250" r="180" fill="url(#grad-why)" opacity="0.1" />

              {/* Layers/Stack illustration */}
              <g>
                {/* Top layer - Security */}
                <rect x="60" y="80" width="280" height="60" rx="8" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2" />
                <text x="200" y="115" textAnchor="middle" fontSize="14" fontWeight="700" fill="#0369a1">🔐 Security Layer</text>

                {/* Middle layer - Governance */}
                <rect x="40" y="160" width="320" height="60" rx="8" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
                <text x="200" y="195" textAnchor="middle" fontSize="14" fontWeight="700" fill="#6d28d9">📋 Governance Framework</text>

                {/* Bottom layer - Implementation */}
                <rect x="20" y="240" width="360" height="60" rx="8" fill="#ec4899" opacity="0.2" stroke="#ec4899" strokeWidth="2" />
                <text x="200" y="275" textAnchor="middle" fontSize="14" fontWeight="700" fill="#be185d">⚙️ Implementation</text>

                {/* Arrows showing importance */}
                <path d="M 200 80 L 200 160 M 200 220 L 200 240" stroke="#8b5cf6" strokeWidth="3" fill="none" markerEnd="url(#arrowhead-why)" />
                <text x="220" y="130" fontSize="12" fill="#8b5cf6" fontWeight="600">Build Early</text>
                <text x="220" y="235" fontSize="12" fill="#8b5cf6" fontWeight="600">Compound Value</text>
              </g>

              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead-why" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </section>

      <section className="approach-section">
        <div className="section-content reversed">
          <div className="image-block">
            <svg viewBox="0 0 400 500" style={{ width: '100%', maxWidth: '400px' }}>
              <defs>
                <linearGradient id="grad-approach" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Background */}
              <circle cx="200" cy="250" r="180" fill="url(#grad-approach)" opacity="0.1" />

              {/* Process flow */}
              <g>
                {/* Step 1 */}
                <circle cx="100" cy="100" r="35" fill="#ec4899" opacity="0.2" stroke="#ec4899" strokeWidth="2" />
                <text x="100" y="110" textAnchor="middle" fontSize="24">📐</text>
                <text x="100" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="#be185d">Design</text>

                {/* Arrow 1 */}
                <path d="M 135 100 L 165 100" stroke="#8b5cf6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead-approach)" />

                {/* Step 2 */}
                <circle cx="200" cy="100" r="35" fill="#8b5cf6" opacity="0.2" stroke="#8b5cf6" strokeWidth="2" />
                <text x="200" y="110" textAnchor="middle" fontSize="24">🔨</text>
                <text x="200" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="#6d28d9">Build</text>

                {/* Arrow 2 */}
                <path d="M 235 100 L 265 100" stroke="#8b5cf6" strokeWidth="2.5" fill="none" markerEnd="url(#arrowhead-approach)" />

                {/* Step 3 */}
                <circle cx="300" cy="100" r="35" fill="#06b6d4" opacity="0.2" stroke="#06b6d4" strokeWidth="2" />
                <text x="300" y="110" textAnchor="middle" fontSize="24">✋</text>
                <text x="300" y="150" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0369a1">Hand Off</text>

                {/* Center text */}
                <rect x="50" y="220" width="300" height="200" rx="12" fill="rgba(139, 92, 246, 0.05)" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2" />
                <text x="200" y="260" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Embedded Partnership</text>
                <text x="200" y="285" textAnchor="middle" fontSize="12" fill="#475569">We work inside your teams,</text>
                <text x="200" y="305" textAnchor="middle" fontSize="12" fill="#475569">not as external contractors.</text>
                <text x="200" y="330" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Enterprise Experience</text>
                <text x="200" y="355" textAnchor="middle" fontSize="12" fill="#475569">Regulated enterprises, fintech,</text>
                <text x="200" y="375" textAnchor="middle" fontSize="12" fill="#475569">healthcare, government.</text>
                <text x="200" y="400" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Proven Results</text>
              </g>

              {/* Arrow marker */}
              <defs>
                <marker id="arrowhead-approach" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#8b5cf6" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="content-block">
            <h2>How We Approach Claude Ai Implementation</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#475569' }}>
              We're not consultants who hand off a report. We're implementation partners who work inside your organization to build systems that stick.
            </p>

            <div className="approach-features">
              <div className="feature">
                <h3>Deep Claude Ai Expertise</h3>
                <p>We've designed and deployed Claude Ai across regulated enterprises, fintech firms, healthcare providers, and government agencies. We know what works, what doesn't, and how to explain it to your board.</p>
              </div>

              <div className="feature">
                <h3>Embedded Partnership Model</h3>
                <p>We don't parachute in with a 200-page report. We work embedded with your teams—designing architecture, building systems, and training your people so you own the result.</p>
              </div>

              <div className="feature">
                <h3>Security & Compliance First</h3>
                <p>Governance isn't bolted on at the end. We design security, compliance, and audit trails into the foundation. Your deployment is audit-ready from day one.</p>
              </div>

              <div className="feature">
                <h3>Practical, Proven Architecture</h3>
                <p>No theoretical frameworks. We use battle-tested patterns from real enterprise deployments. Your systems are built to scale, not to impress architects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2>Ready to bring your Ai to life?</h2>
        <p>Let's talk about your Claude Ai team account strategy.</p>
        <a href="/contact" className="cta-button">Schedule a Consultation</a>
      </section>
    </>
  );
}
