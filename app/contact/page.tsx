'use client';

import { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Send to your email or service
    console.log('Form submitted:', Object.fromEntries(formData));

    // Reset form
    e.currentTarget.reset();
    alert('Thank you for reaching out. We'll be in touch soon.');
  };

  return (
    <>
      <h1>Get Started</h1>
      <p>Let's discuss your AI governance challenges and opportunities.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h2>Schedule a Consultation</h2>
          <p>
            Typical engagement path: 30-minute intro call → compliance audit → governance framework.
            Most enterprises start with an audit to understand where they stand.
          </p>
          <p>
            <strong>Response time:</strong> 24–48 hours
          </p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
              />
            </div>

            <div>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div>
              <label htmlFor="company">Company *</label>
              <input
                type="text"
                id="company"
                name="company"
                required
              />
            </div>

            <div>
              <label htmlFor="role">Your Role *</label>
              <input
                type="text"
                id="role"
                name="role"
                placeholder="e.g., Chief AI Officer, VP Product"
                required
              />
            </div>

            <div>
              <label htmlFor="industry">Industry *</label>
              <select id="industry" name="industry" required>
                <option value="">Select an industry</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="energy">Energy</option>
                <option value="tech">Technology</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="challenge">What's your biggest AI governance challenge? *</label>
              <textarea
                id="challenge"
                name="challenge"
                rows={4}
                placeholder="e.g., We have no AI inventory, we're not ready for EU AI Act, we need risk management..."
                required
              />
            </div>

            <div>
              <label htmlFor="timeline">Timeline *</label>
              <select id="timeline" name="timeline" required>
                <option value="">Select a timeline</option>
                <option value="urgent">Urgent (next 3 months)</option>
                <option value="soon">Soon (3–6 months)</option>
                <option value="planned">Planned (6+ months)</option>
              </select>
            </div>

            <button type="submit">Schedule Consultation</button>
          </form>
        </div>

        <div>
          <h2>What Happens Next</h2>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>Step 1: Intro Call (30 min)</h3>
            <p>We'll discuss your situation, regulatory environment, and specific challenges. No pressure—just conversation.</p>

            <h3>Step 2: Compliance Audit Proposal</h3>
            <p>Based on the call, we'll scope a compliance audit. You'll get a clear proposal with timeline and cost.</p>

            <h3>Step 3: Audit & Roadmap</h3>
            <p>We inventory your AI systems, map to regulations, and build a roadmap to compliance and governance.</p>

            <h3>Step 4: Implementation</h3>
            <p>Decide to move forward with governance framework, ongoing support, or deeper system assessments.</p>
          </div>

          <h2 style={{ marginTop: '2rem' }}>Quick Facts</h2>
          <ul style={{ marginLeft: '2rem' }}>
            <li><strong>Typical audit duration:</strong> 2–4 weeks</li>
            <li><strong>Audit cost range:</strong> $15–50K (depends on AI portfolio size)</li>
            <li><strong>We serve:</strong> Enterprise & regulated small businesses</li>
            <li><strong>Expertise:</strong> NIST AI RMF, ISO 42001, EU AI Act, sector regulations</li>
          </ul>
        </div>
      </div>
    </>
  );
}
