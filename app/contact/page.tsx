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
    alert('Thank you for reaching out. We\'ll be in touch soon.');
  };

  return (
    <>
      <h1>Get Started</h1>
      <p>Let's discuss your Claude team account strategy and Ai system configuration needs.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '2rem' }}>
        <div>
          <h2>Schedule a Consultation</h2>
          <p>
            Typical engagement path: 30-minute intro call to understand your setup, then architecture review and implementation plan.
            Most teams start with a setup or architecture engagement.
          </p>
          <p>
            <strong>Response time:</strong> 24-48 hours
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
                placeholder="e.g., CTO, VP Engineering, Head of Operations"
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
                <option value="legal">Legal</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="challenge">What's your Claude team account need? *</label>
              <textarea
                id="challenge"
                name="challenge"
                rows={4}
                placeholder="e.g., We have a Claude team account and need help setting it up, integrating with our systems, scaling across teams, or ensuring compliance..."
                required
              />
            </div>

            <div>
              <label htmlFor="timeline">Timeline *</label>
              <select id="timeline" name="timeline" required>
                <option value="">Select a timeline</option>
                <option value="urgent">Urgent (next month)</option>
                <option value="soon">Soon (1-3 months)</option>
                <option value="planned">Planned (3+ months)</option>
              </select>
            </div>

            <button type="submit">Schedule Consultation</button>
          </form>
        </div>

        <div>
          <h2>What Happens Next</h2>
          <div style={{ backgroundColor: '#f5f5f5', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>Step 1: Intro Call (30 min)</h3>
            <p>We'll discuss your org, Claude team account status, and specific needs. No pressure, just conversation.</p>

            <h3>Step 2: Proposal</h3>
            <p>Based on the call, we'll outline an approach and timeline. You'll get a clear scope and cost estimate.</p>

            <h3>Step 3: Implementation</h3>
            <p>We work embedded with your team to design, build, and deploy Claude at scale for your org.</p>

            <h3>Step 4: Handoff & Support</h3>
            <p>Your team takes over. We offer ongoing retainer support for scaling, optimization, and new team onboarding.</p>
          </div>

          <h2 style={{ marginTop: '2rem' }}>Quick Facts</h2>
          <ul style={{ marginLeft: '2rem' }}>
            <li><strong>Typical project duration:</strong> 2-8 weeks depending on scope</li>
            <li><strong>Cost range:</strong> $15K-80K+ per engagement (depends on complexity)</li>
            <li><strong>We serve:</strong> Enterprises, regulated orgs, and growing teams</li>
            <li><strong>Expertise:</strong> Claude architecture, security, compliance, integration</li>
          </ul>
        </div>
      </div>
    </>
  );
}
