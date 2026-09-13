# Workshop Activity: Design Your AI System

**Duration:** 20 minutes (Part 3 of the workshop)

## Instructions

You'll work through identifying a real process from your business and mapping it to an AI system.

---

## Section 1: Identify the Process (5 min)

**Think about tasks your team does repeatedly:**
- Every week, someone does X
- Every day, someone spends time on Y
- Monthly, we need to update Z

**Pick ONE process that is:**
- ✓ Done more than once a week
- ✓ Takes 30+ minutes per instance
- ✓ Has clear start/finish (not ongoing)

**Examples:**
- Sales: Scoring new leads from Typeform → assigning to sales reps
- Operations: Syncing customer data from Shopify → CRM
- Support: Collecting high-volume tickets from Slack → creating tasks
- Marketing: Aggregating analytics → sending weekly report

**Your process:**
```
[FILL IN]
```

---

## Section 2: Map the Data (5 min)

**Question 1: Where does data come in?**
```
Source app(s): _________________________
Example: Gmail, Typeform, Shopify API, HubSpot
```

**Question 2: What data needs to be checked?**
```
Fields/info needed:
- _________________________
- _________________________
- _________________________

Example: sender email, subject line, attachment, timestamp
```

**Question 3: Where does data go out?**
```
Destination app(s): _________________________
Example: Slack (notification), Google Calendar (event), CRM (update record)
```

**Question 4: Who or what decides what happens next?**
```
Rule/decision logic: _________________________
Example: If lead company > 50 employees, assign to senior sales reps
```

---

## Section 3: Reality Check (3 min)

**Question 1: Does the agent have access to all data?**
```
✓ YES (all apps use APIs or exist in Composio)
✗ NO (need to build API first)

Answer: _______________
If NO, what's missing? _______________________
```

**Question 2: Can this be automated OR does a human need to decide?**
```
Example: A human decides if a lead is qualified → Agent should alert human + ask for approval
Example: Rules are clear (all Shopify orders → CRM) → Fully automated

Your answer: _______________
```

**Question 3: Do you have access to credentials?**
```
Do you control the source app(s)? ✓ YES / ✗ NO
Can you approve 3rd-party access? ✓ YES / ✗ NO

If NO to either: You might need IT/stakeholder approval
```

---

## Section 4: Design the Agent Prompt (5 min)

**Fill in this template (you don't need perfect prose):**

```
You are a [process name] agent for [company].

Your job: [1-2 sentence summary of what you do]

You have access to these tools:
- [App 1]: [what you can do with it]
- [App 2]: [what you can do with it]
- [App 3]: [what you can do with it]

Process:
1. [First step]
2. [Second step]
3. [Third step]
...

Rules:
- [Business logic rule 1]
- [Business logic rule 2]

When done, [how you signal completion]
```

**Example:**

```
You are a lead scoring agent for Acme Corp.

Your job: Read new leads from Typeform, score them based on company size and budget signals, assign to sales reps.

You have access to these tools:
- Typeform: list new responses since last run
- Google Sheets: lookup company info (industry, headcount, revenue estimates)
- HubSpot: create/update contact, assign to sales rep
- Slack: notify assigned rep that new lead arrived

Process:
1. List all new Typeform submissions from the last 24 hours
2. For each submission:
   a. Extract company name and email
   b. Look up company in Google Sheets
   c. Evaluate: Is headcount > 50? Is revenue > $5M?
   d. Assign score: 1-5 stars
   e. Route to appropriate sales rep based on industry
3. Create HubSpot contact with score and assignment
4. Notify assigned rep in Slack

Rules:
- If score >= 4 stars: assign to senior rep
- If score < 2 stars: add to "follow-up later" list
- Always use company email, never personal Typeform email

When done: Send summary to #sales channel
```

---

## What's Next?

**If your process is automatable (answer YES to section 3):**

1. **Build it:** Composio + Claude API + your hosting (Railway, Vercel)
2. **Test it:** Run on historical data first (don't launch live)
3. **Monitor it:** Check logs for errors, watch agent behavior
4. **Iterate:** Refine rules based on what you learn

**If it needs work:**
- Missing data source? Build an API or integrate via webhook
- Unclear rules? Document exactly how a human does it right now
- No credentials access? Get approval or use a service account

**Resources:**
- [Composio docs](https://docs.composio.dev)
- [Claude API docs](https://claude.ai/docs)
- [MCP specification](https://modelcontextprotocol.io)

---

## Reflection (Workshop Wrap)

**Share with the group (1-2 min per person):**
1. What process did you pick?
2. What surprised you about mapping it?
3. What's your next step?
