# Questionnaire POC — Level 0 Profiling System

**Location:** `http://localhost:3000/questionnaire` (or `/questionnaire` on live site)

**Purpose:** Test the 4-step visitor profiling questionnaire that captures contact info and LinkedIn profile data, storing everything in browser cookies.

---

## How to Use

### 1. Start the Dev Server
```bash
cd /Users/justinliu/Desktop/os/ai-business
npm run dev
```

Open http://localhost:3000/questionnaire

### 2. Test the Questionnaire
**Step 1: Intro** → "Let's Go"  
**Step 2: Contact Info** → Enter name & work email (try one of your target companies):
- Email: `justin@passmore.com.au`
- Email: `manager@buyforbaby.com.au`
- Email: `anyone@yourcompany.com`

**Step 3: Interest Selection** → Pick what interests them  
**Step 4: Results** → See all gathered data

### 3. Clear Cookie & Test Again
Click "🗑️ Clear Cookie & Test Another Person" to delete the stored cookie and test with a different person.

### 4. Verify Cookie Storage
Open browser DevTools → Application → Cookies → Find `visitor_profile`

```json
{
  "name": "Justin Liu",
  "email": "justin@passmore.com.au",
  "title": "Owner",
  "company": "Passmore Automotive",
  "location": "Busselton, WA",
  "linkedin_url": "https://linkedin.com/in/justinliu",
  "confidence": 0.85
}
```

---

## What Happens

### Without Hunter.io API Key (Current)
- Questionnaire works normally
- LinkedIn lookup uses **mock data** based on email domain
- Recognizes your target companies: Passmore Automotive, Buy For Baby
- Returns realistic title/location info
- **Good enough for testing UI/UX**

### With Hunter.io API Key (Production)
- LinkedIn lookup calls real Hunter.io API
- Returns actual LinkedIn profiles from the web
- More accurate job titles, locations, social links
- Higher confidence scores

---

## Setting Up Hunter.io API (Optional, for Production)

### Step 1: Create Hunter.io Account
1. Go to https://hunter.io/pricing
2. Sign up for free account (10 searches/month)
3. Or upgrade to "Professional" plan ($99/month, unlimited)

### Step 2: Get API Key
1. Log in to https://hunter.app/
2. Go to Account Settings → API Tokens
3. Copy your API key

### Step 3: Add to .env
```bash
# /Users/justinliu/Desktop/os/ai-business/.env
HUNTER_IO_API_KEY=your-api-key-here
```

### Step 4: Restart Dev Server
```bash
npm run dev
```

Now the questionnaire will call real Hunter.io API instead of mock data.

---

## Test Cases

### Test 1: Known Company (Passmore)
- **Email:** justin@passmore.com.au
- **Expected:** Name → Justin, Company → Passmore Automotive, Title → Owner, Location → Busselton WA
- **Why:** Tests that system recognizes target companies

### Test 2: Another Known Company (Buy For Baby)
- **Email:** info@buyforbaby.com.au
- **Expected:** Company → Buy For Baby, Location → Busselton WA
- **Why:** Tests multiple target company recognition

### Test 3: Generic Domain
- **Email:** john@gmail.com
- **Expected:** Company → gmail (mock), Title → Team Member, Location → Australia
- **Why:** Tests fallback behavior for non-business emails

### Test 4: Real Email (if API key configured)
- **Email:** your-real-work-email@company.com
- **Expected:** Real LinkedIn data if Hunter.io finds you
- **Why:** Tests live API integration

---

## What's Being Stored

### In Browser Cookie (`visitor_profile`)
```javascript
{
  name: string,              // User-provided
  email: string,             // User-provided
  title?: string,            // From LinkedIn lookup
  company?: string,          // From LinkedIn lookup
  location?: string,         // From LinkedIn lookup
  linkedin_url?: string,     // From LinkedIn lookup
  confidence?: number        // 0-1 confidence score
}
```

### Cookie Settings
- **Name:** `visitor_profile`
- **Expiration:** 365 days (from creation)
- **Scope:** Path=/ (entire domain)
- **Size:** ~500 bytes (well under 4KB limit)

### In Frontend State (Not Persisted)
```javascript
{
  step: 'intro' | 'contact' | 'interest' | 'results',
  formData: {
    name: string,
    email: string,
    interest: string
  },
  profileData: { /* ...same as cookie... */ },
  loading: boolean,
  error?: string
}
```

---

## Architecture

### Flow

```
User Fills Form
       ↓
POST /api/profile/linkedin-lookup
       ↓
Hunter.io API (if key configured)
OR Mock LinkedIn Lookup
       ↓
Profile Data Returned
       ↓
Save to Cookie (visitor_profile)
       ↓
Display Results
```

### Files

- **`app/questionnaire/page.tsx`** — Multi-step form component (client-side React)
- **`app/questionnaire/questionnaire.module.css`** — Styling
- **`app/api/profile/linkedin-lookup.ts`** — API endpoint that calls Hunter.io or returns mock
- **`app/navbar.tsx`** — Added link to questionnaire (🧪 Profiling Test)

---

## Privacy & Legal Notes

### For This POC
- Data is stored **only in the user's browser cookie** (not sent to server)
- No data is logged or stored on our servers (except API call to Hunter.io if configured)
- Cookie has 365-day expiration; user can delete anytime
- No email sequences or follow-ups (POC only)

### For Production
Before launching to real users, you'll need:
- ✅ Privacy policy explaining cookie usage
- ✅ Cookie consent banner (GDPR-compliant)
- ✅ "Remove my data" link (for GDPR right to deletion)
- ✅ Clear disclosure: "We looked up your LinkedIn profile to personalize this"
- ✅ Opt-out option: "Prefer we don't personalize?" → reverts to generic experience

---

## Debugging Tips

### Check Console
```javascript
// Browser console
JSON.parse(decodeURIComponent(
  document.cookie.split('; ')
    .find(row => row.startsWith('visitor_profile='))
    .substring('visitor_profile='.length)
))
```

### Monitor API Calls
- Open DevTools → Network tab
- Fill out form
- Look for `POST /api/profile/linkedin-lookup` request
- Check response body for profile data

### Clear All Cookies
```javascript
// Browser console
document.cookie.split(";").forEach(function(c) { 
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); 
});
```

---

## Known Limitations

### Current POC
- ✗ No email verification (could enter fake email)
- ✗ No LinkedIn profile image display
- ✗ No company logo display
- ✗ No real-time search (Hunter.io lookup is basic)
- ✗ Mock data is simplistic (doesn't handle every company)

### Next Phases (Not in POC)
- Email verification (send code, verify ownership)
- Real-time LinkedIn profile images
- Company logos from Clearbit API
- Integration with company domain lookup (Level 3)
- Email follow-up sequences
- Lead scoring & prioritization

---

## Success Criteria

### This POC Works If:
1. ✅ Form renders and accepts input
2. ✅ LinkedIn lookup completes (mock or real)
3. ✅ Profile data displays on results page
4. ✅ Cookie persists after page reload
5. ✅ Clearing cookie resets form
6. ✅ Multiple people can be tested sequentially

### ROI Validation:
- If you test 5 target companies and 80%+ are recognized correctly → system is ready for Phase 2
- If you test and mock lookup is "creepy" or inaccurate → adjust messaging before production

---

## Next Steps

### After Testing POC:
1. **Feedback:** Does the 4-step flow feel natural?
2. **Accuracy:** Are the LinkedIn lookups close to reality?
3. **Privacy:** Does the transparency messaging feel right?
4. **Integration:** Ready to wire this into homepage (Level 3 company lookup)?

### If Yes → Move to Phase 2:
- Add company domain lookup (Level 3)
- Integrate with Clearbit API
- Show industry-specific content based on profile
- Set up Slack alerts when target companies visit

### If No → Iterate:
- Modify questionnaire flow
- Adjust messaging
- Test again with different people
- Then proceed to Phase 2

---

## Questions?

This is a **playground for testing the profiling system**. Feel free to:
- Add more test cases
- Modify the questionnaire questions
- Change the interest options
- Customize the mock LinkedIn data
- Adjust the styling

Everything here is **non-destructive** and **local-only** (no external data stored).
