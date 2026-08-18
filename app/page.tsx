export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>AI Governance for Regulated Enterprises</h1>
        <p>Build trustworthy AI systems with compliance frameworks that actually work.</p>
        <a href="/contact" className="cta-button">Get Started</a>
      </section>

      <section>
        <h2>The Problem</h2>
        <p>
          You're deploying AI. Your regulators are asking questions. Your teams are building AI systems without central oversight.
          You don't know where your AI lives, what risks it carries, or how to prove compliance.
        </p>
        <p>
          The EU AI Act deadline is August 2026. Regulators globally are ramping up scrutiny. You need a governance framework that works.
        </p>
      </section>

      <section>
        <h2>What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>EU AI Act Compliance Audit</h3>
            <p>Map your AI systems to regulatory risk tiers. Identify gaps. Build a roadmap to August 2026 compliance.</p>
            <p><strong>Engagement:</strong> $15–50K</p>
          </div>

          <div className="service-card">
            <h3>AI Governance Framework</h3>
            <p>Design and implement NIST/ISO-aligned governance. Policies, roles, risk assessment, continuous monitoring.</p>
            <p><strong>Engagement:</strong> $50–200K + retainer</p>
          </div>

          <div className="service-card">
            <h3>High-Risk AI Assessment</h3>
            <p>Deep-dive risk analysis on your flagship AI systems. Bias testing, compliance review, remediation roadmap.</p>
            <p><strong>Engagement:</strong> $25–75K per system</p>
          </div>

          <div className="service-card">
            <h3>Third-Party Model Governance</h3>
            <p>Evaluate LLMs and fine-tuned models your team uses. Risk assessment, acceptable-use policy, monitoring setup.</p>
            <p><strong>Engagement:</strong> $10–30K</p>
          </div>

          <div className="service-card">
            <h3>Ongoing Governance Support</h3>
            <p>Monthly retainer for continuous AI governance. New system reviews, regulatory updates, team coaching.</p>
            <p><strong>Engagement:</strong> $500–5K/month</p>
          </div>

          <div className="service-card">
            <h3>AI Governance Training</h3>
            <p>Workshop your teams on governance frameworks, compliance obligations, responsible AI practices.</p>
            <p><strong>Engagement:</strong> Custom quote</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Why This Matters</h2>
        <ul style={{ marginLeft: '2rem' }}>
          <li><strong>Regulatory pressure is real.</strong> EU AI Act enforcement starts Aug 2, 2026. Fines: €35M or 7% annual revenue.</li>
          <li><strong>Ungoverned AI is expensive.</strong> Bias in production, compliance violations, liability exposure.</li>
          <li><strong>Customers demand proof.</strong> Regulated industries need vendors with governance frameworks in place.</li>
          <li><strong>This is urgent.</strong> Most enterprises are unprepared. You have ~12 months to build compliance.</li>
        </ul>
      </section>

      <section>
        <h2>Our Approach</h2>
        <p>
          We don't hand you a 100-page framework and disappear. We work embedded with your teams to build governance
          that fits your business. Practical, measurable, aligned with regulatory requirements.
        </p>
        <p>
          We use NIST AI RMF, ISO 42001, and sector-specific regulations as the foundation. We translate regulatory
          language into operational policies your teams can actually follow.
        </p>
      </section>

      <section style={{ textAlign: 'center', margin: '3rem 0' }}>
        <h2>Ready to Build Trustworthy AI?</h2>
        <p>Let's talk about your AI governance challenges.</p>
        <a href="/contact" className="cta-button">Schedule a Consultation</a>
      </section>
    </>
  );
}
