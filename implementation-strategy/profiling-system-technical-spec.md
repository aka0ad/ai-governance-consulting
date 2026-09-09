# Visitor Profiling System — Technical Specification

**Companion to:** visitor-profiling-system-plan.md  
**Focus:** Data structures, API contracts, implementation examples

---

## Client-Side Architecture

### Cookie & LocalStorage Schema

#### Cookies (Persistent, 1-year TTL)
```javascript
// Visitor identifier
document.cookie = "visitor_id=uuid-v4; max-age=31536000; path=/";

// Profile level (0-5)
document.cookie = "profile_level=3; max-age=31536000; path=/";

// Company domain (if identified at Level 3+)
document.cookie = "company_domain=passmore.com.au; max-age=31536000; path=/";

// Opt-out flag (GDPR consent)
document.cookie = "personalization_opt_out=false; max-age=31536000; path=/";
```

#### LocalStorage (Browser-specific, survives longer than cookies)
```javascript
// Detailed profile (JSON blob, max 5MB per domain)
localStorage.setItem('visitor_profile', JSON.stringify({
  visitor_id: "uuid-v4",
  first_visit: "2026-09-09T14:30:00Z",
  last_visit: "2026-09-09T15:45:00Z",
  visits_count: 3,
  profile_level: 3,
  pages_visited: [
    {
      page: "/",
      timestamp: "2026-09-09T14:30:00Z",
      time_spent_seconds: 45,
      scroll_depth: 0.8
    },
    {
      page: "/services",
      timestamp: "2026-09-09T14:35:00Z",
      time_spent_seconds: 120,
      scroll_depth: 1.0,
      clicked_on: "workflow-automation"
    },
    {
      page: "/blog/ai-automation-automotive",
      timestamp: "2026-09-09T15:30:00Z",
      time_spent_seconds: 90,
      scroll_depth: 0.5,
      downloaded_pdf: true
    }
  ],
  form_submissions: [
    {
      form_id: "contact-form-v1",
      submitted_at: "2026-09-09T15:45:00Z",
      data: {
        name: "Justin Liu",
        email: "justin@passmore.com",
        company: "Passmore Automotive",
        phone: "+61-450-681-322",
        interest: "workflow_automation"
      }
    }
  ],
  referrer: "google.com",
  utm_params: {
    source: "google",
    medium: "organic",
    campaign: null,
    content: null
  },
  device: {
    user_agent: "Mozilla/5.0...",
    type: "desktop",
    os: "macOS"
  }
}));

// Tracking preferences
localStorage.setItem('tracking_preferences', JSON.stringify({
  allow_personalization: true,
  allow_third_party_cookies: false,
  allow_email_followup: true,
  opted_out_at: null
}));
```

---

## Server-Side API Contracts

### `/api/profile/initialize` (POST)
**Called:** On every page load  
**Purpose:** Initialize or retrieve visitor profile  
**Request:**
```json
{
  "visitor_id": "uuid-v4 (from cookie, or generate new)",
  "profile_level_hint": 1,
  "url": "https://littleabigi.com/services",
  "referrer": "google.com"
}
```

**Response:**
```json
{
  "visitor_id": "uuid-v4",
  "profile_level": 2,
  "profile": {
    "first_visit": "2026-09-09T14:30:00Z",
    "visits_count": 3,
    "traffic_source": "organic_search",
    "intent": "workflow_automation",
    "personalization_allowed": true
  },
  "recommendations": [
    {
      "type": "case_study",
      "title": "How a 12-person retail company saved $2K/month with AI",
      "industry": "retail",
      "url": "/case-studies/retail-automation"
    }
  ]
}
```

---

### `/api/profile/company-lookup` (POST)
**Called:** When visitor's IP reveals company domain  
**Purpose:** Fetch company data and upgrade to Level 3  
**Requires:** Clearbit API key  

**Request:**
```json
{
  "visitor_id": "uuid-v4",
  "ip_address": "203.0.113.45",
  "domain": "passmore.com.au"  // Optional; if not provided, reverse-lookup from IP
}
```

**Response (cached in Cloudflare KV for 7 days):**
```json
{
  "success": true,
  "profile_level": 3,
  "company": {
    "name": "Passmore Automotive",
    "domain": "passmore.com.au",
    "industry": "Automotive Retail",
    "employee_count": 15,
    "founded": 2005,
    "location": {
      "city": "Busselton",
      "state": "WA",
      "country": "AU"
    },
    "estimated_revenue": "$2-5M",
    "website": {
      "url": "https://passmore.com.au",
      "tech_stack": [
        { "category": "CMS", "name": "WordPress", "confidence": 0.95 },
        { "category": "Ecommerce", "name": "WooCommerce", "confidence": 0.92 },
        { "category": "Analytics", "name": "Google Analytics", "confidence": 0.98 }
      ]
    },
    "social": {
      "linkedin_url": "linkedin.com/company/passmore-automotive",
      "facebook_url": "facebook.com/passmore",
      "twitter_url": null
    },
    "phone": "+61 8 9752 8000",
    "email_domain": "passmore.com.au"
  },
  "logo_url": "https://...",
  "similar_companies": [
    {
      "name": "Buy For Baby",
      "industry": "Retail",
      "employee_count": 12,
      "reason": "Similar size, SMB in WA"
    }
  ],
  "recommended_content": [
    {
      "type": "case_study",
      "industry": "Automotive Retail",
      "url": "/case-studies/automotive-order-processing"
    },
    {
      "type": "guide",
      "title": "WordPress + AI: Automation for WooCommerce Stores",
      "url": "/guides/wordpress-ai-automation"
    }
  ]
}
```

**Cache strategy:**
- Store in Cloudflare Workers KV: `profile:company:{domain}` → expires in 7 days
- Prevent duplicate API calls for same company
- Reduce Clearbit spend

---

### `/api/profile/email-lookup` (POST)
**Called:** When user submits email via form  
**Purpose:** Upgrade to Level 4; fetch LinkedIn profile  
**Requires:** Hunter.io API key, explicit user consent  

**Request:**
```json
{
  "visitor_id": "uuid-v4",
  "email": "justin@passmore.com",
  "consent": true
}
```

**Response:**
```json
{
  "success": true,
  "profile_level": 4,
  "person": {
    "name": "Justin Liu",
    "email": "justin@passmore.com",
    "company": "Passmore Automotive",
    "role": "Owner",
    "confidence": 0.98
  },
  "linkedin": {
    "profile_url": "linkedin.com/in/justinliu",
    "headline": "Owner at Passmore Automotive",
    "current_title": "Owner",
    "connections_count": 850,
    "skills": [
      { "name": "Automotive", "endorsements": 12 },
      { "name": "Business Management", "endorsements": 8 },
      { "name": "Customer Relations", "endorsements": 5 }
    ],
    "recent_activity": [
      {
        "type": "post",
        "date": "2026-09-05",
        "content": "Exploring how to streamline our operations with technology...",
        "engagement": { "likes": 8, "comments": 2 }
      }
    ]
  },
  "email_validity": {
    "valid": true,
    "deliverable": true,
    "risk_level": "low"
  },
  "data_retention": {
    "keep_until": "2026-10-09",  // 30 days
    "auto_delete": true,
    "user_can_delete_anytime": true
  },
  "next_steps": [
    "Send personalized welcome email",
    "Show 'Compare to similar companies' prompt",
    "Unlock 'Free AI Audit' feature"
  ]
}
```

**Privacy controls:**
```javascript
// Email sent to user:
// "Hi Justin, thanks for contacting Ai Business. 
// To personalize your experience, we looked up your LinkedIn profile 
// and learned that Passmore Automotive uses WordPress + WooCommerce.
// [View our privacy policy] [Remove my data]"
```

---

### `/api/profile/update-profile-level` (POST)
**Called:** After each interaction that might upgrade profile level  
**Purpose:** Update profile_level in cookie + analytics  

**Request:**
```json
{
  "visitor_id": "uuid-v4",
  "action": "form_submitted",  // form_submitted, email_verified, account_created
  "data": {
    "email": "justin@passmore.com",
    "company": "Passmore Automotive"
  }
}
```

**Response:**
```json
{
  "profile_level": 4,
  "upgraded_from": 3,
  "features_unlocked": [
    "personalized_recommendations",
    "company_comparison",
    "implementation_roadmap"
  ],
  "personalization_elements": [
    {
      "element": "hero_title",
      "before": "AI for Small Business",
      "after": "AI for Automotive Retail"
    },
    {
      "element": "case_study_featured",
      "content": "/case-studies/automotive-order-processing"
    }
  ]
}
```

---

## Content Personalization Logic

### Homepage Variant Selection

```javascript
// Example: Select homepage based on profile level + intent

function selectHomepageVariant(profile) {
  if (!profile.personalization_allowed) {
    return 'homepage-generic.tsx';  // Level 0
  }
  
  if (profile.profile_level >= 4) {
    // Level 4+: Show person-specific content
    return `homepage-level4-${profile.company.industry}.tsx`;
    // e.g., homepage-level4-automotive.tsx
  }
  
  if (profile.profile_level === 3 && profile.company) {
    // Level 3: Show company-aware content
    return `homepage-level3-industry-${profile.company.industry}.tsx`;
  }
  
  if (profile.profile_level >= 2 && profile.intent) {
    // Level 2: Show intent-aware content
    return `homepage-level2-${profile.intent}.tsx`;
    // e.g., homepage-level2-workflow_automation.tsx
  }
  
  // Level 1: Show generic but with "welcome back" message
  return 'homepage-level1-returning.tsx';
}
```

### Case Study Recommendation Algorithm

```javascript
function recommendCaseStudies(profile, limit = 3) {
  let candidates = [];
  
  // Score based on relevance
  caseStudies.forEach(cs => {
    let score = 0;
    
    // Industry match (highest weight)
    if (profile.company && cs.industry === profile.company.industry) {
      score += 100;
    }
    
    // Company size match
    if (profile.company && cs.company_size === categorizeSize(profile.company.employee_count)) {
      score += 50;
    }
    
    // Problem match (if we know their pain point)
    if (profile.intent && cs.problems_solved.includes(profile.intent)) {
      score += 75;
    }
    
    // Freshness bonus (recent case studies)
    if (cs.published_date > Date.now() - 90 * 24 * 60 * 60 * 1000) {
      score += 25;
    }
    
    candidates.push({ case_study: cs, score });
  });
  
  // Return top N, sorted by score
  return candidates
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(c => c.case_study);
}
```

---

## Email Follow-Up Sequence (Level 4)

### Trigger: Form Submission at Level 4

**Email 1: Day 0 (Immediate)**
```
Subject: Hi Justin—here's what we found about Passmore Automotive

Body:
Hi Justin,

Thanks for reaching out! We looked into Passmore Automotive and identified 3 areas 
where AI could save you $500-800/month:

1. Order Processing (currently manual WooCommerce tasks)
2. Customer Follow-Up (post-sale reminders, upsells)
3. Inventory Alerts (low-stock notifications)

Here's a 5-minute breakdown of how this works: [button: View Your AI Roadmap]

If you want to chat about this before diving in, I'm available Tuesday-Thursday 2-4pm AWST.
[button: Schedule a 20-minute call]

Cheers,
Justin
Ai Business

P.S. We work with 12+ automotive retailers in WA. [See how they're using AI]
```

**Email 2: Day 3 (If no click-through)**
```
Subject: Still thinking about the AI roadmap for Passmore?

Body:
Hi Justin,

If you're interested but still weighing options, here's what a typical 30-day AI 
implementation looks like at a business like yours:

Week 1: Audit your current processes ($0 cost to you)
Week 2: Prototype the first automation
Week 3-4: Go live + train your team

Timeline: 4 weeks
Cost: $2,000-3,500
Payback period: 2-3 months

Ready to get started? [button: Let's Build Your Plan]

Still on the fence? [button: Ask a Question]

Cheers,
Justin
```

**Email 3: Day 7 (If no engagement)**
```
Subject: One more thing—we're running a free AI audit offer this month

Body:
Hi Justin,

We're offering 5 free AI audits this month to automotive retailers in Western Australia.

The audit includes:
- Video walkthrough of your current process
- AI automation recommendations (specific to WooCommerce + your inventory system)
- Rough implementation timeline + cost

Takes 45 minutes. Could save you thousands/month.

[button: Claim Your Free Audit]

If this isn't the right time, no worries—reply to this email and we'll take you off our list.

Cheers,
Justin
```

---

## Database Schema (PostgreSQL for Level 5+)

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  visitor_id UUID NOT NULL UNIQUE,  -- Link to analytics
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  company_id UUID,  -- FK to companies table
  role VARCHAR(100),
  phone VARCHAR(20),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP NULL  -- Soft delete for GDPR
);

CREATE TABLE companies (
  id UUID PRIMARY KEY,
  domain VARCHAR(255) UNIQUE,
  name VARCHAR(255),
  industry VARCHAR(100),
  employee_count INT,
  estimated_revenue_range VARCHAR(50),
  tech_stack JSONB,  -- { "CMS": "WordPress", "Ecommerce": "WooCommerce" }
  linkedin_url VARCHAR(255),
  clearbit_data JSONB,  -- Full Clearbit response, cached
  last_updated TIMESTAMP
);

CREATE TABLE visitor_profiles (
  id UUID PRIMARY KEY,
  visitor_id UUID UNIQUE NOT NULL,
  profile_level INT,  -- 0-5
  first_visit TIMESTAMP,
  last_visit TIMESTAMP,
  visits_count INT,
  pages_visited JSONB,  -- Array of { page, timestamp, time_spent_seconds, scroll_depth }
  referrer VARCHAR(255),
  utm_params JSONB,  -- { source, medium, campaign, content }
  identified_company_id UUID,  -- FK to companies
  identified_person_email VARCHAR(255),
  linkedin_profile JSONB,  -- Cached LinkedIn data
  consent_granted BOOLEAN DEFAULT FALSE,
  consent_granted_at TIMESTAMP,
  opted_out BOOLEAN DEFAULT FALSE,
  opted_out_at TIMESTAMP,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  
  FOREIGN KEY (identified_company_id) REFERENCES companies(id)
);

CREATE TABLE interactions (
  id UUID PRIMARY KEY,
  visitor_id UUID NOT NULL,
  interaction_type VARCHAR(50),  -- page_view, click, form_submission, download, etc.
  page VARCHAR(255),
  data JSONB,  -- Context-specific data
  timestamp TIMESTAMP DEFAULT NOW(),
  
  FOREIGN KEY (visitor_id) REFERENCES visitor_profiles(visitor_id)
);

-- GDPR: Auto-delete profile data after 30 days of inactivity
CREATE TABLE profile_deletion_queue (
  id UUID PRIMARY KEY,
  visitor_id UUID,
  email VARCHAR(255),
  reason VARCHAR(100),  -- "inactivity", "user_request", "opt_out"
  scheduled_deletion TIMESTAMP,
  deleted_at TIMESTAMP
);
```

---

## API Rate Limiting & Cost Optimization

### Clearbit API (Company Lookup)
- **Cost:** $50/month (up to 10,000 requests)
- **Rate limit:** 10 requests/sec
- **Caching strategy:** 
  - Cache by domain for 7 days (Cloudflare KV)
  - Reuse cached data if same company returns
  - Estimate: ~1,000 new companies/month = $5 cost

### Hunter.io API (Email-to-LinkedIn)
- **Cost:** $99/month (unlimited searches in "Professional" plan)
- **Rate limit:** 10 requests/sec
- **Caching strategy:**
  - Cache by email address for 30 days
  - Only lookup if user explicitly submitted form
  - Estimate: ~200 lookups/month = included in plan

### LinkedIn API (Profile Data)
- **Cost:** Free (up to 10K connections/month)
- **Limitation:** Requires user OAuth permission
- **Strategy:** Only if user clicks "Connect LinkedIn"

---

## Implementation Checklist: Phase 1 (Level 0→1)

### Frontend Changes
- [ ] Add `visitor_id` generation (UUIDv4)
- [ ] Add cookie consent banner
- [ ] Add tracking script (pages visited, time on page, scroll depth)
- [ ] Store data in localStorage
- [ ] Add "Welcome back, [name]" to homepage (if returning visitor)

### Backend Changes (Vercel Function)
- [ ] Create `/api/profile/initialize` endpoint
- [ ] Add cookie parsing + retrieval logic
- [ ] Return profile level + recommendations in response

### Testing
- [ ] Verify cookies persist across sessions
- [ ] Test different browsers (Firefox, Safari, Chrome)
- [ ] Verify GDPR compliance: consent banner appears before tracking
- [ ] Measure: session duration, pages per visit, returning visitor %

### Monitoring
- [ ] Alert if localStorage quota exceeded (5MB limit)
- [ ] Track API latency for `/api/profile/initialize`
- [ ] Dashboard: visitor count, returning visitor %, avg session duration

---

## A/B Testing Framework

```javascript
// Example: Compare generic vs. personalized homepage

function getHomepageVariant(profile) {
  // Randomly assign 50% to control, 50% to personalization
  const variant = profile.visitor_id.charCodeAt(0) % 2 === 0 
    ? 'control' 
    : 'personalization';
  
  // Track which variant they saw
  analytics.track('homepage_variant_assigned', {
    visitor_id: profile.visitor_id,
    variant,
    profile_level: profile.profile_level
  });
  
  return variant === 'control' 
    ? 'homepage-generic.tsx'
    : `homepage-level${profile.profile_level}.tsx`;
}

// Success metrics (tracked in Vercel Analytics)
// - Homepage CTR (click-through rate)
// - Time on page
// - Conversion to contact form
// - Bounce rate
```

---

## Error Handling & Fallbacks

```javascript
// If Clearbit API fails, gracefully degrade
async function fetchCompanyData(domain) {
  try {
    const response = await fetch(`https://api.clearbit.com/v1/companies/find?domain=${domain}`);
    if (response.status === 401) {
      throw new Error('Clearbit API key invalid');
    }
    return response.json();
  } catch (error) {
    // Fallback: Stay at Level 2 (don't upgrade to Level 3)
    console.error('Company lookup failed:', error);
    return null;  // Don't personalize; avoid bad data
  }
}

// Never block page load on external API
async function initializeProfileAsync(visitorId) {
  // Page loads with generic content
  // In background, fetch personalization data
  setTimeout(async () => {
    const profile = await fetchFullProfile(visitorId);
    // Update page with personalization (CSS class swap, etc.)
    document.documentElement.classList.add(`profile-level-${profile.level}`);
  }, 1000);
}
```

---

## GDPR/Privacy Implementation

### Consent Banner (First Visit)
```html
<div id="consent-banner" class="fixed bottom-0 bg-white p-4 shadow-lg">
  <p>We use cookies to personalize your experience and remember your preferences.</p>
  <a href="/privacy">Privacy Policy</a> | 
  <button onclick="acceptConsent()">Accept</button>
  <button onclick="rejectConsent()">Reject</button>
</div>

<script>
function acceptConsent() {
  localStorage.setItem('consent', 'accepted');
  document.cookie = "personalization_opt_out=false; max-age=31536000";
  // Start personalization tracking
  startTracking();
}

function rejectConsent() {
  localStorage.setItem('consent', 'rejected');
  document.cookie = "personalization_opt_out=true; max-age=31536000";
  // No tracking, no cookies set
}
</script>
```

### Data Deletion (User Right to Be Forgotten)
```javascript
// User clicks "Delete my data" link
async function deleteUserData(visitorId, email) {
  // 1. Remove from localStorage
  localStorage.removeItem('visitor_profile');
  
  // 2. Set opt-out cookie
  document.cookie = "personalization_opt_out=true; max-age=31536000";
  
  // 3. Call server to delete from DB
  await fetch('/api/user/delete', {
    method: 'POST',
    body: JSON.stringify({ visitor_id: visitorId, email }),
  });
  
  // 4. Confirm deletion
  alert('Your data has been deleted. It may take up to 30 days to remove from all systems.');
}
```

---

## Key Takeaways

✅ **Start simple:** Level 0→1 is just cookies + localStorage  
✅ **Progressive:** Each level adds more data; users can opt out anytime  
✅ **Cache aggressively:** Clearbit results are expensive; reuse them  
✅ **Never block page load:** Personalization is async, never synchronous  
✅ **Default private:** Collect minimal data unless user opts in  
✅ **Be transparent:** Always explain why you're personalizing  
✅ **Respect DNT:** If user has "Do Not Track" enabled, stay at Level 0  
✅ **Measure impact:** A/B test personalization variants to prove ROI
