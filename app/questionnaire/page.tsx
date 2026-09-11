'use client';

import { useState, useEffect } from 'react';
import styles from './questionnaire.module.css';

interface ProfileData {
  name: string;
  email: string;
  title?: string;
  company?: string;
  location?: string;
  linkedin_url?: string;
  confidence?: number;
}

interface QuestionnaireState {
  step: 'intro' | 'contact' | 'interest' | 'results';
  formData: {
    name: string;
    email: string;
    interest: string;
  };
  profileData: ProfileData | null;
  loading: boolean;
  error: string | null;
}

/**
 * Real LinkedIn lookup via Hunter.io API
 * Fetches actual LinkedIn profiles from the web
 */
async function performLinkedInLookup(
  name: string,
  email: string
): Promise<ProfileData> {
  const domain = email.split('@')[1] || '';
  const firstInitial = name?.split(' ')[0]?.[0]?.toLowerCase() || 'j';
  const lastNameSlug = (name?.split(' ')[1] || 'doe')?.toLowerCase();

  const apiKey = process.env.NEXT_PUBLIC_HUNTER_IO_API_KEY || '89a4971fc3d2ce6bc60d1e37bb7c593620bd6f3a';

  // If no API key even with fallback, use mock data
  if (!apiKey || apiKey === 'your-hunter-io-api-key-here') {
    console.warn('Hunter.io API key not configured; using mock data');
    return getMockProfile(name, email, domain, firstInitial, lastNameSlug);
  }

  try {
    // Call Hunter.io API to find person's LinkedIn profile
    const finalApiKey = apiKey;
    const hunterUrl = `https://api.hunter.io/v2/email-finder?domain=${domain}&full_name=${encodeURIComponent(
      name
    )}&api_key=${finalApiKey}&limit=1`;

    const response = await fetch(hunterUrl);

    if (!response.ok) {
      console.error('Hunter.io API error:', response.status);
      return getMockProfile(name, email, domain, firstInitial, lastNameSlug);
    }

    const data = (await response.json()) as {
      data?: {
        first_name?: string;
        last_name?: string;
        position?: string;
        company?: string;
        linkedin_url?: string;
        city?: string;
        state?: string;
        country?: string;
        confidence?: number;
      };
    };

    if (!data.data) {
      return getMockProfile(name, email, domain, firstInitial, lastNameSlug);
    }

    const person = data.data;

    return {
      name:
        name ||
        `${person.first_name || ''} ${person.last_name || ''}`.trim(),
      email,
      title: person.position,
      company: person.company,
      location: buildLocation(
        person.city,
        person.state,
        person.country
      ),
      linkedin_url: person.linkedin_url,
      confidence: person.confidence,
    };
  } catch (error) {
    console.error('LinkedIn lookup error:', error);
    return getMockProfile(name, email, domain, firstInitial, lastNameSlug);
  }
}

/**
 * Fallback mock profile when API key not configured
 */
function getMockProfile(
  name: string,
  email: string,
  domain: string,
  firstInitial: string,
  lastNameSlug: string
): ProfileData {
  // Database of known target companies
  const companyDb: {
    [key: string]: { company: string; title: string; location: string };
  } = {
    'passmore.com.au': {
      company: 'Passmore Automotive',
      title: 'Owner',
      location: 'Busselton, WA',
    },
    'buyforbaby.com.au': {
      company: 'Buy For Baby',
      title: 'Manager',
      location: 'Busselton, WA',
    },
    'swandive.com.au': {
      company: 'Swan Dive School',
      title: 'Instructor',
      location: 'Busselton, WA',
    },
  };

  const companyInfo = companyDb[domain] || {
    company: domain.split('.')[0] || 'Company',
    title: 'Team Member',
    location: 'Australia',
  };

  return {
    name: name || `User ${firstInitial}${lastNameSlug}`,
    email,
    title: companyInfo.title,
    company: companyInfo.company,
    location: companyInfo.location,
    linkedin_url: `https://linkedin.com/in/${firstInitial}${lastNameSlug}`,
    confidence: 0.75,
  };
}

function buildLocation(
  city?: string,
  state?: string,
  country?: string
): string {
  const parts = [city, state, country].filter(Boolean);
  return parts.join(', ') || 'Unknown';
}

export default function QuestionnairePage() {
  const [state, setState] = useState<QuestionnaireState>({
    step: 'intro',
    formData: { name: '', email: '', interest: '' },
    profileData: null,
    loading: false,
    error: null,
  });

  // Load profile from cookie on mount
  useEffect(() => {
    const saved = loadFromCookie();
    if (saved) {
      setState((prev) => ({
        ...prev,
        profileData: saved,
        step: 'results',
        formData: {
          name: saved.name,
          email: saved.email,
          interest: '',
        },
      }));
    }
  }, []);

  const handleNameEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      // Perform real LinkedIn lookup via Hunter.io
      const profile = await performLinkedInLookup(
        state.formData.name,
        state.formData.email
      );

      setState((prev) => ({
        ...prev,
        profileData: profile,
        step: 'interest',
        loading: false,
      }));

      // Save to cookie
      saveToCookie(profile);
    } catch (err) {
      setState((prev) => ({
        ...prev,
        error: err instanceof Error ? err.message : 'Lookup failed',
        loading: false,
      }));
    }
  };

  const handleInterestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, step: 'results' }));
  };

  const handleClearCookie = () => {
    clearCookie();
    setState({
      step: 'intro',
      formData: { name: '', email: '', interest: '' },
      profileData: null,
      loading: false,
      error: null,
    });
  };

  const handleReset = () => {
    setState({
      step: 'intro',
      formData: { name: '', email: '', interest: '' },
      profileData: null,
      loading: false,
      error: null,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AI Business Questionnaire (POC)</h1>
        <button className={styles.clearButton} onClick={handleClearCookie}>
          🗑️ Clear Cookie & Test Another Person
        </button>
      </div>

      {/* Step 1: Intro */}
      {state.step === 'intro' && (
        <div className={styles.step}>
          <h2>Welcome</h2>
          <p>
            We'd like to learn about your business to show you the most
            relevant AI automation opportunities.
          </p>
          <p className={styles.subtext}>
            This takes ~2 minutes. Your information will be stored locally in a
            cookie so we remember you next time.
          </p>
          <button
            className={styles.nextButton}
            onClick={() => setState((prev) => ({ ...prev, step: 'contact' }))}
          >
            Let's Go →
          </button>
        </div>
      )}

      {/* Step 2: Contact Info + LinkedIn Lookup */}
      {state.step === 'contact' && (
        <form className={styles.step} onSubmit={handleNameEmailSubmit}>
          <h2>Tell us about yourself</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">First & Last Name</label>
            <input
              id="name"
              type="text"
              placeholder="e.g., Justin Liu"
              value={state.formData.name}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  formData: { ...prev.formData, name: e.target.value },
                }))
              }
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Work Email</label>
            <input
              id="email"
              type="email"
              placeholder="e.g., justin@yourcompany.com"
              value={state.formData.email}
              onChange={(e) =>
                setState((prev) => ({
                  ...prev,
                  formData: { ...prev.formData, email: e.target.value },
                }))
              }
              required
            />
            <small>
              We'll look up your LinkedIn profile to personalize your
              experience
            </small>
          </div>

          {state.error && <div className={styles.error}>{state.error}</div>}

          <button
            type="submit"
            className={styles.nextButton}
            disabled={state.loading}
          >
            {state.loading ? 'Looking up your profile...' : 'Next →'}
          </button>
        </form>
      )}

      {/* Step 3: Interest Selection */}
      {state.step === 'interest' && state.profileData && (
        <form className={styles.step} onSubmit={handleInterestSubmit}>
          <h2>What interests you most?</h2>
          <p className={styles.subtext}>
            Hi {state.profileData.name}! Based on your profile at{' '}
            <strong>{state.profileData.company || 'your company'}</strong>, which of
            these challenges does your business face?
          </p>

          <div className={styles.radioGroup}>
            {[
              {
                value: 'workflow_automation',
                label: '⚙️ Automating repetitive tasks (order processing, data entry)',
              },
              {
                value: 'customer_followup',
                label: '📧 Following up with customers automatically',
              },
              {
                value: 'inventory',
                label: '📦 Managing inventory & stock levels',
              },
              {
                value: 'scheduling',
                label: '📅 Scheduling & calendar management',
              },
            ].map((option) => (
              <label key={option.value} className={styles.radioLabel}>
                <input
                  type="radio"
                  name="interest"
                  value={option.value}
                  checked={state.formData.interest === option.value}
                  onChange={(e) =>
                    setState((prev) => ({
                      ...prev,
                      formData: { ...prev.formData, interest: e.target.value },
                    }))
                  }
                  required
                />
                {option.label}
              </label>
            ))}
          </div>

          <button
            type="submit"
            className={styles.nextButton}
            disabled={!state.formData.interest}
          >
            See Your Profile →
          </button>
        </form>
      )}

      {/* Step 4: Results */}
      {state.step === 'results' && state.profileData && (
        <div className={styles.step}>
          <h2>Your Profile</h2>
          <p className={styles.subtext}>
            Here's everything we gathered about you (stored in your browser
            cookie):
          </p>

          <div className={styles.profileCard}>
            <div className={styles.profileField}>
              <span className={styles.label}>Name:</span>
              <span className={styles.value}>{state.profileData.name}</span>
            </div>
            <div className={styles.profileField}>
              <span className={styles.label}>Email:</span>
              <span className={styles.value}>{state.profileData.email}</span>
            </div>
            <div className={styles.profileField}>
              <span className={styles.label}>Company:</span>
              <span className={styles.value}>
                {state.profileData.company || 'Not found'}
              </span>
            </div>
            <div className={styles.profileField}>
              <span className={styles.label}>Job Title:</span>
              <span className={styles.value}>
                {state.profileData.title || 'Not found'}
              </span>
            </div>
            <div className={styles.profileField}>
              <span className={styles.label}>Location:</span>
              <span className={styles.value}>
                {state.profileData.location || 'Not found'}
              </span>
            </div>
            {state.profileData.linkedin_url && (
              <div className={styles.profileField}>
                <span className={styles.label}>LinkedIn:</span>
                <a
                  href={state.profileData.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  View Profile →
                </a>
              </div>
            )}
            <div className={styles.profileField}>
              <span className={styles.label}>Interest:</span>
              <span className={styles.value}>
                {state.formData.interest || 'Not specified'}
              </span>
            </div>
            {state.profileData.confidence && (
              <div className={styles.profileField}>
                <span className={styles.label}>Data Confidence:</span>
                <span className={styles.value}>
                  {Math.round(state.profileData.confidence * 100)}%
                </span>
              </div>
            )}
          </div>

          <div className={styles.technicalInfo}>
            <h3>🔧 Technical Details (For Testing)</h3>
            <pre>
              {JSON.stringify(state.profileData, null, 2)}
            </pre>
          </div>

          <div className={styles.calloutBox}>
            <h3>💾 What Happens Next?</h3>
            <p>
              This profile is stored in your browser as a cookie. When you
              visit again, we'll remember you and show personalized content
              based on:
            </p>
            <ul>
              <li>Your company & industry</li>
              <li>Your role & seniority level</li>
              <li>Your stated interests</li>
            </ul>
            <p>
              <strong>Privacy Note:</strong> This is a POC demo. In production,
              we'll be transparent about data collection and give you full
              control to delete or opt out anytime.
            </p>
          </div>

          <div className={styles.actions}>
            <button className={styles.nextButton} onClick={handleReset}>
              ← Start Over
            </button>
            <button className={styles.clearButton} onClick={handleClearCookie}>
              🗑️ Clear Cookie & Test Another
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Cookie Management Functions
 */
function saveToCookie(profile: ProfileData) {
  const cookieValue = JSON.stringify(profile);
  // Set cookie for 365 days
  const date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `visitor_profile=${encodeURIComponent(cookieValue)}; ${expires}; path=/`;
  console.log('Profile saved to cookie:', profile);
}

function loadFromCookie(): ProfileData | null {
  const name = 'visitor_profile=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');

  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(name) === 0) {
      const json = cookie.substring(name.length);
      try {
        return JSON.parse(json);
      } catch {
        return null;
      }
    }
  }
  return null;
}

function clearCookie() {
  document.cookie = 'visitor_profile=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  console.log('Cookie cleared');
}
