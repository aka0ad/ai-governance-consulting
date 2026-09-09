# Visitor Profiling System Plan
## Content-Aware Website Personalization

**Date:** 2026-09-09  
**Project:** Ai Business (local AI implementation rollout)  
**Status:** Strategic Design Phase  

---

## Executive Summary

Rebuild the Ai Business website to automatically profile visitors and serve personalized content based on what we can discover about them. This system uses a 6-tier profiling model (Level 0–5) that progressively builds a visitor profile from passive signals (browser history, cookies), active lookups (web search, LinkedIn scraping), and explicit authentication (logged-in users).

The goal: Show the right AI solution to the right person at the right time—without relying on them to tell us who they are or what they need.

---

## The Six Profiling Levels

### **Level 0: Cold Visitor**
**What we know:** Nothing about them yet  
**Data sources:** None  
**Website behavior:** Generic homepage, generic service descriptions, generic CTA  

**Available to display:**
- Broad value proposition (AI implementation for small businesses)
- General case studies (anonymized or public)
- Generic "Get Started" flow

---

### **Level 1: Browser History + Cookies (Passive Client-Side)**
**What we know:** Their browsing patterns (first-party cookie tracking only)  
**Prerequisites:** User has visited us before OR actively allows tracking  
**Data sources:**
- Browser cookies (first-visit date, pages visited, time on site)
- Referrer header (where they came from)
- Query parameters (if linked from a source we control)

**How to derive:**
- Store cookies for: `visited_pages`, `first_visit_date`, `last_visit_date`, `session_duration`, `click_patterns`
- Detect if they're returning visitor vs. cold visitor
- Track which pages/services they spend most time on

**Data available to us:**
```json
{
  "visitor_id": "uuid",
  "first_visit": "2026-09-09T14:30:00Z",
  "visits_count": 3,
  "pages_visited": ["/", "/services", "/blog/ai-automation"],
  "time_on_site": 450,  // seconds
  "referrer": "google.com",
  "device": "desktop",
  "last_visit": "2026-09-08T10:15:00Z"
}
```

**Website behavior at Level 1:**
- Remember their name if they filled a form before (stored in cookie)
- Highlight services they viewed previously
- Show blog posts related to pages they visited
- Personalized "Welcome back" message

---

### **Level 2: Referrer + Query String Analysis**
**What we know:** How they found us; likely intent category  
**Prerequisites:** They arrived via a tracked link we control or a trackable referrer  
**Data sources:**
- Referrer header (LinkedIn, email, paid ads, organic search)
- UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`)
- Search query (if from organic search)

**How to derive:**
- Parse referrer to categorize traffic source (LinkedIn → professional, Google → problem-aware, Email → intent-driven)
- Extract search intent from Google query (e.g., "AI automation for car dealerships" → automotive industry, workflow automation pain)
- Attribute campaign (e.g., `utm_source=linkedin&utm_campaign=automotive` → we know they saw our LinkedIn ad about automotive)

**Data available to us:**
```json
{
  "traffic_source": "linkedin",
  "campaign": "automotive-q3",
  "search_query": "AI automation small business",
  "intent_category": "workflow_automation",
  "inferred_industry": "multi-industry",  // Will refine at Level 3+
  "awareness_stage": "problem_aware"  // Not yet aware of AI as solution
}
```

**Website behavior at Level 2:**
- Show industry-specific case study (if we have one that matches)
- Highlight relevant service based on search intent
- If from LinkedIn, show social proof + team credibility
- Tailor CTA ("Automate your operations" vs. "Learn more")

---

### **Level 3: Public Web Presence + Domain Lookup (Active Server-Side)**
**What we know:** Company size, industry, tech stack, potential decision-maker role  
**Prerequisites:** Active server-side lookup via IP → company domain  
**Data sources:**
- IP geolocation + domain lookup (e.g., Hunter.io, RocketReach, Clearbit)
- Company website analysis (tech stack via Wappalyzer/BuiltWith API)
- Company financials (if public)
- Employee count, funding, recent news

**How to derive (in real-time during page load):**
1. Capture visitor IP
2. Reverse lookup to domain (clearbit.com API: `GET /v1/domains/find?domain_name=example.com`)
3. Fetch company data: size, industry, tech stack, recent funding
4. Look for social signals: LinkedIn company page, Crunchbase, news mentions

**Data available to us:**
```json
{
  "company": {
    "name": "Passmore Automotive",
    "domain": "passmore.com.au",
    "industry": "automotive_retail",
    "employee_count": 15,
    "founded": 2005,
    "location": "Busselton, WA",
    "website_url": "https://passmore.com.au",
    "tech_stack": ["WordPress", "WooCommerce", "Google Analytics"],
    "phone": null,  // May find via WHOIS or business directory
    "social": {
      "linkedin": "linkedin.com/company/passmore-automotive",
      "facebook": "facebook.com/passmore"
    }
  },
  "firmographics": {
    "revenue_estimate": "$2-5M",
    "funding": "bootstrapped",
    "growth_stage": "stable"
  }
}
```

**Website behavior at Level 3:**
- Show case study for automotive/retail industry
- Highlight problems specific to their size (SMB operations)
- Mention tech stack compatibility (if they use WordPress, show WordPress integration benefits)
- Address their likely pain points (inventory management, customer follow-up, scheduling)
- "We work with businesses like yours" + logo/name of similar company

**What we DON'T do at Level 3:**
- Do NOT show their name or assume we know the visitor yet (they might be a customer, not a decision-maker)
- Do NOT personalize with "Hi, [Company]" without explicit consent
- Do NOT assume decision-maker role

---

### **Level 4: Partial PII Lookup + Social Media Profile (If Provided or Inferred)**
**What we know:** Likely decision-maker name, role, LinkedIn profile  
**Prerequisites:** 
- Email address (if form submission, or email scraping from company domain)
- Phone number (if company provided via contact form or directory)
- Inferred from email pattern (e.g., justin@passmore.com → first name "justin", company "Passmore")

**Data sources:**
- Email-to-LinkedIn lookup (Hunter.io, RocketReach API)
- LinkedIn profile scraping (name, title, endorsements, connections)
- Social media presence (Twitter, GitHub if business-related)
- Email validation (is this a real person at this company?)

**How to derive (in real-time, if consent given):**
1. If email submitted (e.g., contact form), look up LinkedIn profile
2. Fetch profile: current title, experience, skills, endorsements
3. Check recent activity (posted about AI? hiring for tech roles?)
4. Cross-reference with company org chart if available

**Data available to us:**
```json
{
  "person": {
    "name": "Justin Liu",
    "email": "justin@passmore.com",
    "inferred_role": "owner_or_manager",  // Inferred from company size + domain admin
    "title": "Owner",
    "linkedin": {
      "profile_url": "linkedin.com/in/justinliu",
      "headline": "Owner at Passmore Automotive",
      "experience": [...],
      "skills": ["automotive", "business_management", "customer_relations"],
      "endorsements_count": 42,
      "connections": 850,
      "recent_activity": ["liked post about AI automation", "followed AI governance article"]
    },
    "social": {
      "twitter": "@justinliu",
      "github": null
    },
    "intent_signals": {
      "researching_ai": true,
      "recently_posted_about": "efficiency improvement",
      "likely_pain_point": "workflow optimization"
    }
  }
}
```

**Website behavior at Level 4:**
- Personalized greeting: "Hi Justin, thanks for exploring Ai Business"
- Show their LinkedIn profile context if they mentioned relevant problems
- Tailor pitch to their role: "As an owner, you care about ROI and time savings"
- Suggest specific AI solutions based on their company's tech stack and industry
- "We've worked with other automotive businesses in WA" + case study
- CTA: "Schedule a 20-minute chat with me" (person-to-person language)

**Ethical boundaries at Level 4:**
- Only perform email/LinkedIn lookups if user has submitted form with email (explicit consent)
- Show a privacy notice: "We're looking up your LinkedIn profile to personalize this experience"
- Provide opt-out: "Prefer we don't personalize?" → reverts to Level 2
- Do NOT scrape LinkedIn profile without user knowledge (violates LinkedIn ToS and privacy laws)
- Do NOT store personal data longer than necessary (30 days if no engagement)

---

### **Level 5: Authenticated User (Logged In + Full Permissions)**
**What we know:** Everything (with explicit consent)  
**Prerequisites:** User creates account and logs in  
**Data sources:**
- User account data (profile, preferences)
- All previous interaction history
- Explicit permissions: "Access my LinkedIn?" "Check my company's tech stack?"
- Custom integrations: connection to their Slack, HubSpot, Shopify, etc.

**Data available to us:**
```json
{
  "user": {
    "id": "user-uuid",
    "name": "Justin Liu",
    "email": "justin@passmore.com",
    "company": "Passmore Automotive",
    "role": "Owner",
    "phone": "+61-450-681-322",
    "preferences": {
      "communication_frequency": "weekly",
      "interested_in": ["workflow_automation", "customer_followup"],
      "budget_range": "$500-3000/month",
      "implementation_timeline": "Q4 2026"
    },
    "permissions": {
      "view_detailed_pricing": true,
      "access_ai_audit_tool": true,
      "see_personalized_dashboard": true,
      "connect_slack": false,
      "connect_shopify": true
    }
  },
  "interaction_history": [
    {
      "date": "2026-09-08",
      "action": "viewed_service_workflow_automation",
      "time_spent": 120
    },
    {
      "date": "2026-09-07",
      "action": "downloaded_guide_automotive_ai",
      "conversion": true
    }
  ],
  "integrations": {
    "shopify": {
      "store_name": "Passmore Accessories",
      "products_count": 450,
      "avg_order_value": "$85",
      "monthly_revenue": "$45000"
    },
    "linkedin": {
      "profile_url": "linkedin.com/in/justinliu",
      "connection_status": "connected"
    }
  }
}
```

**Website behavior at Level 5:**
- Personalized dashboard showing relevant AI opportunities
- "Based on your Shopify store, we estimate you could save $2,000/month by automating order processing"
- AI audit tool: "Upload your current processes; we'll identify automation opportunities"
- Scheduling: "Ready to implement? Let's pick a time"
- Priority support: "Your assigned consultant is Jenna"
- Advanced features: competitor analysis, predictive ROI calculator, implementation roadmap

**What happens at Level 5:**
- Full transparency: "Here's everything we know about you"
- Full control: User can edit/delete data anytime
- Premium features unlocked
- Direct support channel opens

---

## Data Collection & Privacy Framework

### Browser-Side Collection (No Server Tracking)
- **First-visit tracking:** Timestamp, referrer
- **Navigation tracking:** Pages visited, time on page, scroll depth
- **Form submissions:** What they tell us (name, email, phone)
- **Storage:** LocalStorage + cookies (with 1-year expiry)

**Consent required?** 
- Yes: EU (GDPR); US varies by state (California CCPA)
- Show banner on first visit: "We use cookies to remember your preferences"
- Provide opt-out in footer

---

### Server-Side Lookup (Requires Consent)
- **Level 3 (Company domain lookup):** Passive, no user ID sent
  - No consent needed (same as GA)
  - Treat as analytics
- **Level 4 (Email → LinkedIn lookup):** Active, PII involved
  - Explicit consent required (form submission)
  - Store email + profile data ≤ 30 days if no engagement
  - Provide "Remove my data" link in email follow-up

---

### Privacy-First Implementation
1. **Default to Level 1 (browser history only)**
2. **Only progress to Level 3+ if user gives permission**
3. **Transparent:** Always show "Why are we showing you this?" labels
4. **Portable:** User can download their profile at any time
5. **Erasable:** User can delete profile anytime (legally required)

---

## Technical Implementation Roadmap

### Phase 1: Foundation (Level 0–1)
**Timeline:** 2 weeks  
**Scope:**
- Add cookie tracking (first-visit date, pages visited, session ID)
- Build cookie-to-profile mapping in browser
- Add simple personalization: returning visitor detection, remembered preferences
- Add privacy banner + opt-out option

**Tech stack:**
- Client-side: JavaScript (no external cookie lib needed)
- Storage: Cookies + LocalStorage
- Backend: Not needed yet

**Deliverable:** Website remembers repeat visitors, shows personalized welcome back message

---

### Phase 2: Referrer Intelligence (Level 2)
**Timeline:** 1 week  
**Scope:**
- Parse referrer header + UTM params
- Build intent classifier (what are they looking for?)
- Content personalization based on intent

**Tech stack:**
- Client-side JavaScript to parse referrer
- Backend API endpoint: `/api/profile/referrer` (POST visitor intent)

**Deliverable:** Different homepage depending on "AI automation" vs. "AI governance" vs. "data privacy"

---

### Phase 3: Company Lookup (Level 3)
**Timeline:** 2–3 weeks  
**Scope:**
- Reverse IP lookup to domain
- Real-time company data API calls (Clearbit, Hunter.io)
- Cache results (don't re-fetch same domain daily)
- Display industry-specific content

**Tech stack:**
- Backend API: Node.js / Python (Vercel functions if using Cloudflare Pages)
- Service: Clearbit API for company data
- Database: Simple KV store (Cloudflare Workers KV or Redis)

**Deliverable:** "We know you're from Passmore Automotive—here's what other automotive businesses use AI for"

---

### Phase 4: Email-to-LinkedIn (Level 4)
**Timeline:** 2–3 weeks  
**Scope:**
- Add email collection form (contact form improved)
- Email → LinkedIn lookup via Hunter.io or RocketReach API
- Privacy notice + opt-out
- Personalize based on LinkedIn profile

**Tech stack:**
- Form validation + email verification
- Hunter.io API for email → LinkedIn
- Privacy: Store email in separate database table, mark for deletion after 30 days
- Frontend: Show "We're personalizing your experience" loader

**Deliverable:** After filling form, show personal welcome + LinkedIn-informed recommendations

---

### Phase 5: User Accounts (Level 5)
**Timeline:** 3–4 weeks  
**Scope:**
- User registration + login
- Profile dashboard
- Preferences & integrations (Shopify, Slack, etc.)
- AI audit tool (upload CSV → identify automation opportunities)

**Tech stack:**
- Database: PostgreSQL
- Auth: NextAuth.js or Clerk.dev (easier)
- Dashboard: React component library
- Integrations: Shopify API, LinkedIn API (if user consents)

**Deliverable:** Full personalization + premium features for logged-in users

---

## Privacy & Ethical Guidelines

### DO:
- ✅ Be transparent about what you're collecting
- ✅ Give users control over their data
- ✅ Only collect what you need
- ✅ Delete data when no longer needed
- ✅ Get explicit consent before PII lookup
- ✅ Respect user preferences (DNT headers, etc.)
- ✅ Disclose third-party APIs (Clearbit, Hunter.io, LinkedIn)

### DON'T:
- ❌ Scrape LinkedIn profiles (violates ToS + CFAA)
- ❌ Buy email lists or use pre-compiled databases without consent
- ❌ Store passwords or payment info
- ❌ Sell user data to third parties
- ❌ Use dark patterns ("opt-out" buried in footer)
- ❌ Assume someone's decision-making authority based on email
- ❌ Send unsolicited emails using scraped addresses

### Compliance:
- **GDPR (EU visitors):** Consent before tracking, right to access/delete, data processor agreement with third-party APIs
- **CCPA (California):** Opt-out rights, privacy policy, no selling data
- **LinkedIn ToS:** Can use LinkedIn API with user permission; cannot scrape profiles
- **CAN-SPAM (Email):** Only email people who gave consent; include unsubscribe link

---

## Content Strategy by Level

### Level 0: The Skeptic
*Doesn't know if AI is right for them*
- Pain point: "Should we implement AI?"
- Content: Educational, ROI-focused
- CTA: "See if AI is right for you" (quiz/assessment)

### Level 1: The Returning Visitor
*Already interested (came back!)*
- Pain point: Building confidence
- Content: Case studies, customer testimonials
- CTA: "Schedule a free consultation"

### Level 2: The Intent-Driven Visitor
*Searching for specific solution (e.g., "workflow automation")*
- Pain point: "Is this the right solution for my exact problem?"
- Content: Industry-specific case study, technical deep-dive
- CTA: "See how we solved this for [industry]"

### Level 3: The Industry Match
*We know their company*
- Pain point: "How does this apply to my specific business?"
- Content: Custom case study (similar company size + industry), ROI calculator
- CTA: "Compare your business to [similar company]"

### Level 4: The Decision-Maker
*We know their role + they're researching*
- Pain point: Budget, timeline, implementation complexity
- Content: Pricing, implementation roadmap, dedicated support
- CTA: "Let's build your AI roadmap" (personal outreach)

### Level 5: The Customer
*Logged in, ready to implement*
- Pain point: Execution
- Content: Integration guides, automation playbooks, progress tracking
- CTA: "Start your first automation"

---

## Sample User Journey

**Day 1: Cold Visit**
- User lands on homepage (Google search: "AI automation small business")
- Level 0 → Level 2 (based on search query)
- See: Generic "AI can help" + case studies for small business
- No identification

**Day 2: Return Visit (3 days later)**
- Same user, different device
- Level 1: Recognized as returning visitor (same IP, domain persistence)
- See: "Welcome back! Interested in workflow automation?"
- Shows blog post they didn't finish reading

**Day 3: Company Investigation**
- User visits from office IP (Passmore Automotive)
- Level 3: Reverse IP → company lookup
- See: Case study for automotive retail + mention of inventory management
- They don't know we know who they are

**Day 4: Form Submission**
- User fills contact form: "Justin Liu, justin@passmore.com, interested in order automation"
- Level 4: Email lookup → LinkedIn profile fetched
- System shows: "Hi Justin! I see you're owner of Passmore Automotive. Here's what we've implemented for [similar automotive company]"
- If they opt-out: stays at Level 2 (no personalization)

**Day 7: Account Creation**
- User signs up for free account
- Level 5: Full dashboard access
- Links Shopify store (with permission)
- "Based on your $45K monthly revenue, you could automate 8 processes and save $2K/month"
- Assigned a implementation consultant

---

## Implementation Checklist

### Phase 1 (Weeks 1-2):
- [ ] Design Level 1 cookie structure
- [ ] Implement cookie consent banner (GDPR-compliant)
- [ ] Add first-visit tracking script
- [ ] Build returning-visitor detection
- [ ] Create personalized homepage greeting
- [ ] A/B test: Generic vs. personalized (measure engagement)

### Phase 2 (Week 3):
- [ ] Parse referrer + UTM params in analytics
- [ ] Build intent classifier (keyword-based)
- [ ] Create 3 homepage variants (governance, automation, security)
- [ ] Route visitors to variant based on intent

### Phase 3 (Weeks 4-6):
- [ ] Set up Clearbit API account
- [ ] Build `/api/profile/company` endpoint
- [ ] Implement IP-to-domain lookup in middleware
- [ ] Create company-specific content blocks
- [ ] Cache results (Cloudflare KV)
- [ ] Add disclaimer: "We've identified your company to personalize this experience"

### Phase 4 (Weeks 7-9):
- [ ] Improve contact form (email + name required)
- [ ] Set up Hunter.io API
- [ ] Build email → LinkedIn lookup
- [ ] Show privacy notice before lookup
- [ ] Create Level 4 personalization templates
- [ ] Add email follow-up sequence (3 emails over 7 days)

### Phase 5 (Weeks 10-13):
- [ ] Set up PostgreSQL + NextAuth
- [ ] Build registration flow
- [ ] Create user dashboard
- [ ] Add preferences modal
- [ ] Integrate Shopify API (read-only initially)
- [ ] Build AI audit tool (CSV upload → analysis)
- [ ] Set up Slack notifications for sales (new Level 5 user)

---

## Success Metrics

**Measure these to validate the system works:**

| Metric | Target | Why |
|--------|--------|-----|
| Returning visitor rate | 40%+ (up from ~15% baseline) | Cookie tracking working |
| Personalization click-through rate | 60%+ CTR vs. 30% generic | People engage with personalized content |
| Company match accuracy | 85%+ (manual audit 50 companies) | IP lookup is accurate |
| Email-to-LinkedIn match rate | 75%+ found on LinkedIn | Hunter.io working |
| Contact form completion | +50% from Level 4 personalization | Personal touches work |
| Time on site | +40% average | Relevant content keeps people longer |
| Conversion rate (to demo) | 15-25% for Level 4+ | Personalization drives action |

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| API rate limits (Clearbit, Hunter) | Can't profile in real-time | Cache results; async processing; queue lookups |
| Privacy backlash | User distrust, brand damage | Be transparent, provide easy opt-out, follow regulations |
| False positives (wrong company identified) | Wrong person gets automotive content | Manual review of matches; add "Is this your company?" confirmation |
| GDPR/CCPA violations | Legal liability | Hire compliance review; audit logs; customer data deletion automation |
| LinkedIn scraping detected | Account banned, legal action | Only use official API with user permission; never scrape |
| Personalization too aggressive | Uncanny valley ("How do they know?") | Always explain why you're personalizing; keep it helpful, not creepy |
| Third-party API outage | Website slowdown if blocking calls | Make API calls async; never block page load on external data |

---

## Next Steps

1. **Approve this plan** — do you want to proceed with all 5 levels or start with Phase 1 only?
2. **Prioritize phases** — which level matters most for closing first customers?
3. **Pick tech stack** — stick with Next.js static site or move to dynamic backend?
4. **Budget for APIs** — Clearbit ($50/mo), Hunter.io ($99/mo), LinkedIn API (free tier available)
5. **Legal review** — before launching, get privacy policy reviewed for GDPR/CCPA compliance

---

## Questions to Answer Before Building

1. **Are you comfortable with AI company lookups?** (IP→domain is powerful but needs ethical guardrails)
2. **Will you actually follow up with prospects we identify?** (Profiling is useless if you don't act on it)
3. **How quickly do you need to know someone's decision-making authority?** (This drives which APIs to prioritize)
4. **Do you want to sell data to other AI companies?** (This changes privacy approach entirely)
5. **How personal do you want personalization to get?** (Friendly? Creepy? Data-driven? Human?)
