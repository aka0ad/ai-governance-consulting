# Visitor Profiling System — Quick Reference

## One-Page Summary

**Goal:** Automatically identify business visitors and show them personalized content, so by the time they call, we already know their company, industry, and pain points.

**Cost:** $160/month (APIs) + 40-50 hours development over 3 months  
**ROI:** $3,500 per new customer → 22x payback on profiling investment  
**Timeline:** Phase 1 (MVP) = 2 weeks; Full system = 3 months

---

## The 6 Profiling Levels at a Glance

| Level | What We Know | Data Source | Website Shows | Your Action |
|-------|--------------|-------------|---------------|-------------|
| **0** | Nothing | None | Generic homepage | Learn about them |
| **1** | Returning visitor | Cookies + browser history | "Welcome back" message | Remember them |
| **2** | Search intent + where from | Referrer + search query | Industry-specific content | Address their problem |
| **3** | Company, industry, size | IP → reverse domain lookup | Case study for their industry | Position yourself |
| **4** | Decision-maker name, role, LinkedIn | Email lookup | Personal welcome + LinkedIn-informed CTA | Warm call |
| **5** | Everything (with permission) | User account + integrations | Dashboard, AI audit, premium features | Sell to them |

---

## What Data Can Be Collected (With/Without User Action)

### Passive Collection (No User Action Needed)
- Company domain (from IP)
- Company size, industry, tech stack
- Visitor's traffic source (Google, LinkedIn, email)
- Pages they visit, time on site
- Device type (mobile/desktop)

### Active Collection (Requires User Interaction)
- Name, email, phone (form submission)
- LinkedIn profile (email → LinkedIn lookup)
- Preferences, interests (account creation)
- Integrations (Shopify, Slack, etc.)

### NOT Collected (Privacy/Ethical Boundaries)
- Personal data without consent
- LinkedIn profile without disclosure
- Email data beyond 30 days (auto-delete)
- Tracking after opt-out

---

## Decision Checklist: Should You Build This?

**Answer YES to all to proceed:**

- [ ] Do you have 5-8 specific target customers you know exist?
- [ ] Are they local or concentrated geographically?
- [ ] Is your sales cycle 1-4 weeks (not 6+ months)?
- [ ] Would knowing their company + industry help you close faster?
- [ ] Can you afford $160/month in APIs?
- [ ] Do you have 40-50 hours over 3 months for development?
- [ ] Are you comfortable with the privacy implications (and willing to be transparent)?

**If YES to all:** Build Phase 1 first, measure, then decide on Phases 2-5.

**If NO to any:** Skip personalization, focus on community outreach or content marketing instead.

---

## Phase Breakdown & Timeline

| Phase | Focus | Time | Cost | ROI |
|-------|-------|------|------|-----|
| **1** | Company lookup (Level 3) | 2 weeks | $160/mo | 1 extra call/week |
| **2** | Email personalization (Level 4) | 1 week | +$99/mo | 2x email engagement |
| **3** | Content customization | 2 weeks | No additional | 40% more time on site |
| **4** | Sales integration | 1 week | No additional | Real-time lead alerts |
| **5** | User accounts (Level 5) | 3-4 weeks | $50-100/mo | Premium features → upsell |

**Quick start:** Do Phase 1 only. Cost: $160/month + 10 hours.  
**Expected payback:** One extra customer = $3,500 revenue. 22x ROI.

---

## Implementation Quick Start (Phase 1 Only)

### Week 1: Setup APIs + Detection
```
Day 1: Set up Clearbit account (api.clearbit.com)
Day 2: Create /api/profile/company-lookup endpoint (30 min)
Day 3: Add company detection to page load (30 min)
Day 4: Set up Slack webhook for alerts ("Visitor from Passmore!")
Day 5: Test with known company IPs
```

### Week 2: Content + Follow-Up
```
Day 1: Create 2-3 industry-specific homepage variants
Day 2: Wire personalization logic (CSS class swap)
Day 3: Create custom case study section for each industry
Day 4: Set up email alert to yourself + call script
Day 5: Go live; start monitoring alerts
```

### Ongoing
```
Week 1-4: Wait for alerts, manual follow-up calls
Week 4: Review: "Did personalization help close anyone?"
Week 5: Decide: Keep this, or pivot to Phase 2?
```

**Success metric:** If you get 1 extra customer (from profiling alerts) in 4 weeks, continue.

---

## Copy Templates by Level

### Level 0→1 (Returning Visitor)
```
"Welcome back! Last time you checked out workflow automation. 
Here's the latest on that: [link to relevant blog post]"
```

### Level 2 (Search Intent)
```
Hero: "AI Automation for [Industry Name]"
Subhead: "Solve the [specific pain point] that slows down [industry] operations"
```

### Level 3 (Company Identified)
```
Case study title: "How [similar company size] in [industry] saved $[X]/month with AI"
Mention: "We work with [N] businesses like yours in [region]"
```

### Level 4 (Decision-Maker Identified)
```
Email subject: "Hi [Name]—here's the AI roadmap for [Company]"
Body: "I looked into [Company]'s [tech stack] and found 3 ways we could save you $[X]/month..."
CTA: "Let's build your custom implementation plan"
```

---

## Privacy & Ethics Checklist

Before launching, verify:

- [ ] Privacy policy explains: What data you collect, how you use it, how long you keep it
- [ ] Consent banner appears on first visit asking permission to track
- [ ] Email addresses are only stored if user submitted a form
- [ ] Automatic deletion happens after 30 days of no engagement
- [ ] "Remove my data" link appears in every email
- [ ] GDPR compliance: User can request access/deletion anytime
- [ ] No scraping of LinkedIn profiles (only API with permission)
- [ ] You disclose: "We identified your company to personalize this experience"

**Red flags (don't do these):**
- ❌ Storing email addresses from other sources (scraped lists)
- ❌ Personalizing with someone's name without disclosure
- ❌ Scraping LinkedIn in violation of ToS
- ❌ Selling data to other companies
- ❌ Making opt-out hard to find

---

## Cost Breakdown (Full System, Phases 1-5)

### Monthly Recurring
| Item | Cost |
|------|------|
| Clearbit API | $50 |
| Hunter.io API | $99 |
| Hosting (Vercel) | $20 |
| **Total/month** | **$169** |

### One-Time Setup
| Item | Hours | Cost (at $50/hr) |
|------|-------|-----------------|
| Phase 1 (company lookup) | 10 | $500 |
| Phase 2 (email personalization) | 5 | $250 |
| Phase 3 (content customization) | 10 | $500 |
| Phase 4 (sales integration) | 5 | $250 |
| Phase 5 (user accounts) | 20 | $1,000 |
| **Total** | **50** | **$2,500** |

### Break-Even Analysis
- Development cost: $2,500
- Monthly cost: $169/month
- Revenue per customer: $3,500

**Result:** One customer pays for 9 months of APIs + entire development cost.  
**Payback period:** ~1 month (assuming you close 1 customer/month with help from personalization)

---

## API Provider Comparison

### Company Data (Clearbit)
- **Cost:** $50/month (10K requests)
- **Accuracy:** 95%+ for company matches
- **What you get:** Company name, size, industry, tech stack, funding, social links
- **Alternative:** RocketReach ($50-150/mo) or Hunter.io free company lookup

### Email-to-LinkedIn (Hunter.io)
- **Cost:** $99/month (unlimited searches)
- **Accuracy:** 85-90% for LinkedIn profile matches
- **What you get:** Name, title, LinkedIn profile URL, confidence score
- **Alternative:** RocketReach ($50-150/mo) or Clearbit ($50/mo, less accurate)

### Hosting (Vercel)
- **Cost:** Free tier (adequate); $20+/mo for Pro
- **Why:** Static site exports work great for local-only business (no server scaling needed)
- **Alternative:** Netlify ($0-10/mo), AWS Amplify ($0-5/mo)

**Recommendation:** Clearbit + Hunter.io + Vercel = $170/month, industry-standard accuracy

---

## Success Looks Like

### Week 1 Results
- ✅ Slack alerts working: "Visitor from [Company] spending 5 min on site"
- ✅ You manually call within 1 hour of alert
- ✅ 50% of calls connect (vs. 25% for cold calls)

### Month 1 Results
- ✅ 4-8 alerts from target customers (of 6 total)
- ✅ 2-3 successful conversations
- ✅ 1 demo/proposal scheduled

### Month 3 Results
- ✅ 1 customer closed (from personalization)
- ✅ Website personalization is live (homepage changes by industry)
- ✅ Email sequences personalized (showing company name, pain points)
- ✅ Time-to-close reduced from 30 days to 10 days

---

## Red Flags (Stop & Reconsider)

If you see these, the system isn't working:

- **No alerts after 2 weeks:** Your target customers aren't visiting. Problem: Marketing (not personalization). Fix: Drive more traffic first.
- **Alerts come, but you don't follow up within 24 hours:** The system is useless if you're not responding. Time management issue, not system issue.
- **Personalization content confuses visitors:** "How do they know my company?" negative reaction. Fix: Add transparency ("We identified your company to personalize this") + make it helpful.
- **No improvement in demo rate after personalization:** Your offer isn't compelling. Problem: Product/positioning (not personalization). Fix: Rethink your AI solution, not the website.

---

## Decision: Start with Phase 1?

**Phase 1 is the test.** If it works (1 extra customer in 4 weeks), continue to Phase 2-5.

**Before you start, answer:**
1. What's the name of the first company you'll get an alert from? (Should be one of your 6 targets)
2. What will your call script be? ("Hi [name], saw you checking out our automation guide...")
3. How quickly can you follow up after an alert? (24 hours? 2 hours?)

If you can answer all 3, you're ready.

If you can't, build those first before launching personalization.

---

## The Bottom Line

This system converts **strangers into warm leads**.

Without it: "Cold call to someone who's never heard of you" = 5-10% answer rate, 2% close rate.  
With it: "Call someone who's already visited your site 3+ times and read your case study" = 50% answer rate, 15-25% close rate.

That's a 5-10x multiplier on your sales effectiveness.

**Cost:** $170/month + 10 hours (Phase 1)  
**ROI:** One customer = 22x payback  
**Risk:** Low (easy to turn off if it doesn't work)  
**Timeline:** 2 weeks to first alerts

**Recommendation:** Try Phase 1 this month. If it works, scale it. If not, learn why and pivot.

---

## Questions Before You Start?

**Q: Will customers feel violated that we know their company?**  
A: No, if you're transparent and helpful. "I identified your company to show you relevant case studies" → good. "Hi Justin, I know everything about you" → creepy.

**Q: What if we get a false positive (the visitor isn't the decision-maker)?**  
A: Confirm on the call: "Are you involved in AI/automation decisions?" Most SMB owners are.

**Q: Does this comply with privacy laws (GDPR, CCPA)?**  
A: Yes, if you follow the checklist above. Clearbit + Hunter.io handle compliance; you just need a privacy policy.

**Q: What if we don't follow up fast enough?**  
A: Then you've wasted the profiling data. Set up Slack alerts to force you to respond within 2 hours.

**Q: Can we start with just company lookup (no email tracking)?**  
A: Yes. Phase 1 is company lookup only; no email involved. Perfectly GDPR-safe.

**Q: What if our website is on a platform that can't run custom code (Wix, Squarespace)?**  
A: You can still use third-party services like Drift or HubSpot that inject personalization code. Not ideal, but works.

---

## Next Action

1. **Approve the plan:** Do you want to move forward with Phase 1?
2. **Set up APIs:** Create Clearbit account (literally 2 minutes)
3. **Pick start date:** When do you want first alerts?
4. **Assign ownership:** Who's implementing this? (If not you, delegate to developer)
5. **Define success:** What does "working" look like? (1 extra customer in 4 weeks? $1K revenue?)

That's it. Everything else flows from those 5 decisions.
