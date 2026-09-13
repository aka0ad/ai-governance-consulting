# AI Systems Architecture

## The Three Layers

Every AI-driven business process has three layers:

### Layer 1: The Agent
**What it is:** An autonomous decision-maker that can use tools.
- Runs a loop: read input → think → call tools → repeat until done
- Powered by Claude (or another LLM)
- Stateless: each run is independent

**What it can do:**
- Read emails and categorize them
- Fetch data from multiple sources
- Make decisions based on business logic
- Call tools in sequence or conditionally

**What it can't do:**
- Make decisions requiring human judgment (ambiguous rules)
- Access systems without a tool

### Layer 2: Tools (Integrations)
**What they are:** Bridges to your business systems (email, Slack, CRM, calendar, etc.)

**Implemented via:**
- **MCP servers** (Model Context Protocol) — standard protocol for tools
- **Composio** — pre-built MCP connectors for 100+ apps
- **Custom tools** — you define them if needed

**Example tools in an email triage system:**
- Gmail: read, archive, label, reply
- Google Calendar: create event, check availability
- Slack: send notification, post update
- Your API: score lead quality, fetch customer history

### Layer 3: State & Persistence
**What it is:** Where the agent remembers what it did and tracks progress.

**Options:**
- **Database:** Supabase, Firebase, etc. (structured data)
- **Document storage:** JSON files, cloud bucket (semi-structured)
- **Message queue:** For long-running jobs (async processing)

**Why it matters:**
- Agent runs for minutes or hours (needs checkpoints)
- You need audit trail (what did the agent do?)
- Next run needs context (where did we leave off?)

---

## Common Patterns

### Pattern 1: The Digest
**Flow:** Fetch data → Filter → Format → Send

Example: Email digest for Justin
1. Agent wakes up (scheduled, 1/day)
2. Fetches emails since last run (Gmail tool)
3. Filters by sender type (automated vs. real)
4. Flags old conversations needing reply
5. Sends summary via Telegram

**Tools needed:** Gmail, Google Calendar, Telegram

### Pattern 2: The Scorer
**Flow:** Fetch record → Evaluate → Update → Alert

Example: Lead scoring for sales
1. CRM triggers webhook (new lead)
2. Agent fetches lead data (CRM API)
3. Evaluates: company size, industry, budget signals
4. Assigns score and next step
5. Notifies sales team (Slack)

**Tools needed:** CRM, external data API, Slack

### Pattern 3: The Sync
**Flow:** Read source → Transform → Write destination → Track

Example: Customer data sync
1. Scheduled run: every hour
2. Reads from source system (API)
3. Transforms: maps fields, deduplicates
4. Writes to destination (database)
5. Logs sync metadata (what changed, how many records)

**Tools needed:** Source API, destination database, logging

---

## Where Composio Fits

**The problem:** Each tool needs separate auth (OAuth, API keys, etc.)
- Email requires Gmail credentials
- CRM requires API key + base URL
- Slack requires bot token
- Managing this is tedious and error-prone

**Composio's solution:**
- Central credential vault (secure storage)
- OAuth flows handled automatically
- MCP servers pre-built for 100+ apps
- Agent just says "use Gmail" — Composio handles the auth

**Why it matters:**
- Non-technical users can connect apps in a UI
- Your agent code stays simple ("send email" not "get Gmail auth")
- Credentials stay secure (not in your code)

---

## Decision Tree: Should You Automate This?

```
Is the process repeatable?
├─ NO → Don't automate (too custom)
└─ YES
   │
   Is it high-volume (>5x/week)?
   ├─ NO → Consider anyway if tedious
   └─ YES
      │
      Can the agent access all needed data?
      ├─ NO → Build the API first, then automate
      └─ YES
         │
         Does it require human judgment?
         ├─ YES → Agent decides with rules, human approves
         └─ NO
            │
            Ready to automate ✓
```

---

## Deployment Models

### Model 1: Scheduled Agent (Most Common)
- Runs on a cron schedule (every day, every hour, etc.)
- Good for: digests, syncs, batch processing
- Tools: Railway, Vercel, AWS Lambda

### Model 2: Event-Driven Agent
- Triggered by a webhook (new email, form submission, CRM update)
- Good for: real-time notifications, lead scoring
- Tools: Railway, AWS Lambda, Cloudflare Workers

### Model 3: Interactive Agent (Claude API)
- Runs in a chat or web app
- User talks to the agent; agent calls tools
- Good for: customer support, research assistants
- Tools: Claude API + your own servers

---

## Security Considerations

1. **Credentials:** Composio vaults them; agent never sees raw keys
2. **Rate limiting:** Agent should respect API limits (add delays, batch requests)
3. **Error handling:** Agent must handle API failures gracefully (retry, alert, don't crash)
4. **Audit trail:** Log every tool call (who asked, what happened, when)
5. **Human review:** For high-stakes decisions (money, customers), require human approval
