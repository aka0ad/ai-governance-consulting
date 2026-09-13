export default function Services() {
  return (
    <>
      <h1>Services</h1>

      <section style={{ marginBottom: '3rem' }}>
        <h2>How Ai Systems Work</h2>
        <p style={{ marginBottom: '2rem', color: '#64748b' }}>
          A secure LLM implementation flows through multiple layers: your data sources,
          our architecture, Ai models, and back to your systems—with governance and security at every step.
        </p>
        <svg viewBox="0 0 1000 300" style={{ width: '100%', maxWidth: '900px', margin: '0 auto', display: 'block' }}>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Your Systems */}
          <rect x="20" y="100" width="120" height="100" rx="8" fill="url(#grad1)" opacity="0.2" stroke="url(#grad1)" strokeWidth="2" />
          <text x="80" y="155" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1e293b">Your Data Sources</text>
          <text x="80" y="175" textAnchor="middle" fontSize="12" fill="#64748b">(CRM, APIs, Databases)</text>

          {/* Arrow 1 */}
          <path d="M 140 150 L 180 150" stroke="#7c3aed" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
          <text x="160" y="145" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="500">Secure Pipeline</text>

          {/* Architecture Layer */}
          <rect x="180" y="100" width="120" height="100" rx="8" fill="url(#grad2)" opacity="0.2" stroke="url(#grad2)" strokeWidth="2" />
          <text x="240" y="145" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1e293b">Architecture</text>
          <text x="240" y="165" textAnchor="middle" fontSize="12" fill="#64748b">(Auth, Routing,</text>
          <text x="240" y="180" textAnchor="middle" fontSize="12" fill="#64748b">Data Transform)</text>

          {/* Arrow 2 */}
          <path d="M 300 150 L 340 150" stroke="#06b6d4" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
          <text x="320" y="145" textAnchor="middle" fontSize="11" fill="#06b6d4" fontWeight="500">Encrypted</text>

          {/* Ai */}
          <rect x="340" y="100" width="120" height="100" rx="8" fill="url(#grad1)" opacity="0.3" stroke="url(#grad1)" strokeWidth="2" />
          <text x="400" y="155" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1e293b">Ai</text>
          <text x="400" y="175" textAnchor="middle" fontSize="12" fill="#64748b">(Processing)</text>

          {/* Arrow 3 */}
          <path d="M 460 150 L 500 150" stroke="url(#grad1)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
          <text x="480" y="145" textAnchor="middle" fontSize="11" fill="#7c3aed" fontWeight="500">Governed</text>

          {/* Governance/Security */}
          <rect x="500" y="100" width="140" height="100" rx="8" fill="#ec4899" opacity="0.15" stroke="#ec4899" strokeWidth="2" />
          <text x="570" y="140" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1e293b">Governance</text>
          <text x="570" y="160" textAnchor="middle" fontSize="12" fill="#64748b">(Audit Logs,</text>
          <text x="570" y="175" textAnchor="middle" fontSize="12" fill="#64748b">Compliance, Monitoring)</text>

          {/* Arrow 4 */}
          <path d="M 640 150 L 680 150" stroke="#ec4899" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
          <text x="660" y="145" textAnchor="middle" fontSize="11" fill="#ec4899" fontWeight="500">Output</text>

          {/* Results */}
          <rect x="680" y="100" width="120" height="100" rx="8" fill="url(#grad2)" opacity="0.2" stroke="url(#grad2)" strokeWidth="2" />
          <text x="740" y="150" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1e293b">Results &</text>
          <text x="740" y="170" textAnchor="middle" fontSize="14" fontWeight="600" fill="#1e293b">Integrations</text>

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#7c3aed" />
            </marker>
          </defs>

          {/* Security shield overlay */}
          <circle cx="500" cy="30" r="20" fill="none" stroke="#06b6d4" strokeWidth="2" />
          <text x="500" y="35" textAnchor="middle" fontSize="12" fontWeight="700" fill="#06b6d4">🔒</text>
          <text x="500" y="65" textAnchor="middle" fontSize="12" fontWeight="600" fill="#06b6d4">End-to-End Security</text>
        </svg>
      </section>

      <section>
        <h2>Ai Team Setup & Onboarding</h2>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Set up Ai team account from scratch with proper governance structure</li>
          <li>Configure SSO integration (Okta, Azure AD, etc.) for your org</li>
          <li>Design user roles, permissions, and access controls</li>
          <li>Set up workspace organisation and team structure</li>
          <li>Establish initial security baseline and audit logging</li>
          <li>Create onboarding materials for your teams</li>
        </ul>
        <h3>Outcome</h3>
        <p>A fully configured Ai team account ready for deployment. Your team knows how to access it, use it, and follow your governance.</p>
      </section>

      <section>
        <h2>Ai System Architecture Design</h2>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Map your business workflows and identify Ai integration points</li>
          <li>Design secure data pipelines between your systems and Ai</li>
          <li>Plan API integration, custom endpoints, and automation workflows</li>
          <li>Define data handling, retention, and security practices</li>
          <li>Map to compliance requirements (GDPR, Ai Act, sector rules)</li>
          <li>Document architecture and hand over implementation guide</li>
        </ul>
        <h3>Outcome</h3>
        <p>A detailed architecture blueprint that your teams can build from. Secure, scalable, compliant from day one.</p>
      </section>

      <section>
        <h2>Data Protection & Privacy</h2>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Classify your data and identify sensitive information (PII, business-critical, regulated)</li>
          <li>Design encryption strategies for data at rest and in transit</li>
          <li>Implement data minimization practices for Ai workflows</li>
          <li>Map data flows through Ai against GDPR, CCPA, and sector regulations</li>
          <li>Assess Ai's security posture and vendor controls against your requirements</li>
          <li>Document data handling procedures and justify data residency decisions</li>
          <li>Build data subject rights procedures (access, deletion, portability)</li>
        </ul>
        <h3>Outcome</h3>
        <p>A documented data protection framework proving your Ai implementation safeguards customer and business data. Defensible in audits and regulatory reviews.</p>

        <h3 style={{ marginTop: '2.5rem' }}>Data Protection Layers</h3>
        <svg viewBox="0 0 800 400" style={{ width: '100%', maxWidth: '700px', margin: '1.5rem auto', display: 'block' }}>
          <defs>
            <linearGradient id="protect1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="protect2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#be185d', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="protect3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#6d28d9', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Data at center */}
          <circle cx="400" cy="200" r="40" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
          <text x="400" y="205" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1e293b">Your Data</text>

          {/* Layer 1: Encryption */}
          <circle cx="400" cy="200" r="100" fill="url(#protect1)" opacity="0.15" stroke="url(#protect1)" strokeWidth="2" />
          <text x="420" y="125" fontSize="12" fontWeight="600" fill="#0891b2">🔐 Encryption</text>
          <text x="420" y="295" fontSize="12" fontWeight="600" fill="#0891b2">(TLS + At-Rest)</text>

          {/* Layer 2: Classification */}
          <circle cx="400" cy="200" r="155" fill="url(#protect2)" opacity="0.12" stroke="url(#protect2)" strokeWidth="2" />
          <text x="570" y="120" fontSize="12" fontWeight="600" fill="#be185d">📋 Classification</text>
          <text x="25" y="210" fontSize="12" fontWeight="600" fill="#be185d">(PII, Sensitive, Public)</text>

          {/* Layer 3: Compliance */}
          <circle cx="400" cy="200" r="210" fill="url(#protect3)" opacity="0.1" stroke="url(#protect3)" strokeWidth="2" />
          <text x="635" y="175" fontSize="12" fontWeight="600" fill="#6d28d9">✓ Compliance</text>
          <text x="10" y="380" fontSize="12" fontWeight="600" fill="#6d28d9">(GDPR, CCPA, Audit Trail)</text>

          {/* Legend */}
          <text x="400" y="350" textAnchor="middle" fontSize="11" fill="#64748b" fontStyle="italic">
            Concentric protection: Data privacy through classification, encryption, and compliance mapping
          </text>
        </svg>
      </section>

      <section>
        <h2>Ai Governance & Compliance</h2>

        <svg viewBox="0 0 900 250" style={{ width: '100%', maxWidth: '800px', margin: '1.5rem auto', display: 'block' }}>
          <defs>
            <linearGradient id="gov1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#a78bfa', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="gov2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#f472b6', stopOpacity: 1 }} />
            </linearGradient>
            <linearGradient id="gov3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
            </linearGradient>
          </defs>

          {/* Your Ai Deployment */}
          <rect x="350" y="20" width="200" height="50" rx="8" fill="url(#gov1)" opacity="0.2" stroke="url(#gov1)" strokeWidth="2" />
          <text x="450" y="50" textAnchor="middle" fontSize="13" fontWeight="600" fill="#1e293b">Ai Deployment</text>

          {/* Arrows down */}
          <path d="M 450 70 L 450 95" stroke="#94a3b8" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" />

          {/* Three compliance tracks */}
          {/* Track 1: Policies */}
          <rect x="50" y="110" width="140" height="80" rx="8" fill="url(#gov1)" opacity="0.15" stroke="url(#gov1)" strokeWidth="2" />
          <text x="120" y="135" textAnchor="middle" fontSize="12" fontWeight="600" fill="#7c3aed">Governance</text>
          <text x="120" y="155" textAnchor="middle" fontSize="11" fill="#64748b">• Access Control</text>
          <text x="120" y="172" textAnchor="middle" fontSize="11" fill="#64748b">• Usage Policies</text>

          {/* Track 2: Audit */}
          <rect x="380" y="110" width="140" height="80" rx="8" fill="url(#gov2)" opacity="0.15" stroke="url(#gov2)" strokeWidth="2" />
          <text x="450" y="135" textAnchor="middle" fontSize="12" fontWeight="600" fill="#ec4899">Audit & Monitoring</text>
          <text x="450" y="155" textAnchor="middle" fontSize="11" fill="#64748b">• Logging</text>
          <text x="450" y="172" textAnchor="middle" fontSize="11" fill="#64748b">• Compliance Checks</text>

          {/* Track 3: Compliance */}
          <rect x="710" y="110" width="140" height="80" rx="8" fill="url(#gov3)" opacity="0.15" stroke="url(#gov3)" strokeWidth="2" />
          <text x="780" y="135" textAnchor="middle" fontSize="12" fontWeight="600" fill="#06b6d4">Regulatory</text>
          <text x="780" y="155" textAnchor="middle" fontSize="11" fill="#64748b">• EU Ai Act</text>
          <text x="780" y="172" textAnchor="middle" fontSize="11" fill="#64748b">• GDPR, Sector Rules</text>

          {/* Arrows up to documentation */}
          <path d="M 120 190 L 120 205" stroke="url(#gov1)" strokeWidth="2" fill="none" />
          <path d="M 450 190 L 450 205" stroke="url(#gov2)" strokeWidth="2" fill="none" />
          <path d="M 780 190 L 780 205" stroke="url(#gov3)" strokeWidth="2" fill="none" />

          {/* Documentation */}
          <rect x="200" y="210" width="500" height="25" rx="6" fill="#f0f4f8" stroke="#cbd5e1" strokeWidth="1" />
          <text x="450" y="228" textAnchor="middle" fontSize="12" fontWeight="600" fill="#1e293b">
            → Documented Governance Framework (Audit Ready)
          </text>

          {/* Arrow marker */}
          <defs>
            <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="#94a3b8" />
            </marker>
          </defs>
        </svg>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Audit current Ai usage and identify compliance gaps</li>
          <li>Map Ai deployments to EU Ai Act, GDPR, and sector regulations</li>
          <li>Build governance policies (acceptable use, data handling, audit requirements)</li>
          <li>Set up audit logging and monitoring for Ai usage</li>
          <li>Document compliance approach for regulators and auditors</li>
          <li>Create incident response procedures for Ai-related issues</li>
        </ul>
        <h3>Outcome</h3>
        <p>Documented governance framework proving Ai usage is compliant and auditable. Ready for regulatory review.</p>
      </section>

      <section>
        <h2>Workflow Integration & Automation</h2>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Design and implement API integrations between Ai and your systems</li>
          <li>Build custom workflows and automation using Ai (through API or UI)</li>
          <li>Set up data pipelines for document processing, analysis, summarization</li>
          <li>Create dashboards and monitoring for Ai usage metrics</li>
          <li>Document workflows and create runbooks for your teams</li>
          <li>Test and validate integrations end-to-end</li>
        </ul>
        <h3>Outcome</h3>
        <p>Ai embedded into your workflows and systems. Your teams have working integrations and documentation.</p>
      </section>

      <section>
        <h2>Security & Access Control</h2>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Implement role-based access control (RBAC) for Ai team account</li>
          <li>Set up data isolation between teams/projects</li>
          <li>Configure audit logging for all Ai usage</li>
          <li>Harden security baseline (password policies, 2FA, IP restrictions)</li>
          <li>Establish data residency and retention policies</li>
          <li>Create security runbooks and incident response procedures</li>
        </ul>
        <h3>Outcome</h3>
        <p>A hardened Ai deployment with auditable security controls. Compliant with enterprise security standards.</p>
      </section>

      <section>
        <h2>Ongoing Implementation Support</h2>
        <h3>What We Do</h3>
        <ul style={{ marginLeft: '2rem' }}>
          <li>Ongoing support for Ai team account management and optimization</li>
          <li>New team member onboarding and access provisioning</li>
          <li>Troubleshooting integration issues and performance problems</li>
          <li>Monthly scaling assessments as your usage grows</li>
          <li>Updates to governance and security policies as regulations evolve</li>
          <li>Quarterly business reviews and optimization recommendations</li>
        </ul>
        <h3>Outcome</h3>
        <p>Your Ai deployment stays current, secure, and optimised. You have expert support as you scale.</p>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Ready to Get Started?</h2>
        <p>
          Each engagement is scoped and priced based on your org's size, integration complexity, and regulatory environment.
        </p>
        <p>
          <strong>Let's talk about your Ai strategy.</strong> <a href="/contact">Schedule a consultation.</a>
        </p>
      </section>
    </>
  );
}
