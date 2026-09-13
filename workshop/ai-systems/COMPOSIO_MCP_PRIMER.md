# Composio + MCP Primer

## What's MCP?

**Model Context Protocol** — a standard for connecting Claude to tools.

Think of it like USB: instead of different charging cables for every phone, USB lets any device talk to any charger using the same protocol.

### MCP in Plain English

When you want Claude to send an email, you need to:
1. Tell Claude **what tools exist** (email, Slack, etc.)
2. Tell Claude **how to call them** (parameters, formats)
3. **Claude calls the tool** with specific values
4. **Tool executes** and returns the result
5. **Claude uses the result** to decide what to do next

MCP standardizes steps 1-2, making it easy for Claude to understand tools.

### Why It Matters

Without a standard:
- Each tool provider writes custom integrations
- Claude has to learn each one individually
- You write different code to connect Gmail vs. Slack vs. Salesforce

With MCP:
- Standard format for all tools
- Claude knows how to use any MCP tool automatically
- One mental model, many integrations

---

## What's Composio?

**A marketplace of pre-built MCP servers** for business apps.

Think of it like npm for integrations.

### Before Composio

You wanted to sync data from HubSpot to your app:
```
1. Read HubSpot API docs (30 min)
2. Get API key from HubSpot (5 min)
3. Write code to call API (1 hour)
4. Handle errors and auth (2 hours)
5. Test it (30 min)
→ Total: ~4 hours
```

### With Composio

```
1. Click "Add HubSpot" in Composio UI (2 min)
2. Connect your account (OAuth flow, 30 sec)
3. Start using it (instantly)
→ Total: ~3 minutes
```

### How It Works

Composio provides MCP servers for 100+ apps:
- Gmail, Google Sheets, Google Calendar
- HubSpot, Salesforce, Pipedrive
- Slack, Microsoft Teams, Discord
- Notion, Airtable, Monday.com
- And dozens more

Each server implements the same MCP format, so Claude can use them all.

---

## The Composio + Claude Flow

```
┌─────────────────────┐
│   Your Business     │
│   Process (Email    │
│   digest, lead      │
│   scoring, etc)     │
└──────────┬──────────┘
           │
           ↓
┌─────────────────────────┐
│   Claude (Agent)        │
│   Reads prompt,         │
│   thinks, decides       │
│   which tool to use     │
└──────────┬──────────────┘
           │
           ↓
┌─────────────────────────┐
│   MCP Protocol          │
│   (standard format      │
│   for tool calls)       │
└──────────┬──────────────┘
           │
           ↓
┌─────────────────────────┐
│   Composio Servers      │
│   Gmail, Slack, CRM,    │
│   etc. (pre-built)      │
└──────────┬──────────────┘
           │
           ↓
┌─────────────────────────┐
│   Your Apps             │
│   Gmail, Slack,         │
│   Salesforce, etc.      │
└─────────────────────────┘
```

---

## Real Example: Email Digest System

**Goal:** Send Justin a daily summary of new emails

### Step 1: Setup Composio

1. Create Composio account (free tier available)
2. Click "Add Gmail"
3. Connect with OAuth (sign in once, Composio remembers it)
4. Click "Add Google Calendar"
5. Click "Add Telegram" (for sending the digest)

Composio now has credentials for all three. You never type a password.

### Step 2: Define the Agent

```
You are an email digest assistant.
Your job: Read emails since yesterday, categorize them, flag old conversations needing reply.

Tools you can use:
- Gmail: read_email, list_emails, create_label, send_email
- Google Calendar: create_event, get_events
- Telegram: send_message

Process:
1. List emails from yesterday to now
2. For each email:
   - Is it from an automated sender? (filter by address pattern)
   - Is it personal/work? (filter by labels)
   - Needs reply? (no response from Justin in 48h)
3. Create a digest summary
4. Send via Telegram
```

### Step 3: Agent Runs

```
Agent: "I'll get the emails"
↓ (calls MCP)
↓ Gmail MCP server: "Here are 47 emails"
↓ (agent thinks)
Agent: "I'll categorize these..."
↓ (agent calls MCP again)
↓ Google Calendar MCP server: "Creating event for needs-reply items"
↓ (agent finishes)
Agent: "Sending digest now"
↓ (calls MCP)
↓ Telegram MCP server: "Message sent"
```

**What Justin never sees:** API keys, auth tokens, how Gmail actually works. Just a summary.

---

## Composio + Claude API vs. Claude Code

### Claude Code Session (What We Use)
- You run Claude locally or in an interactive session
- Composio tools available via MCP
- Great for: one-off tasks, interactive work
- Limitation: Session ends when you close it

### Claude API (Production)
- You run an agent on your own server (Railway, Vercel, etc.)
- Composio connects via API
- Great for: scheduled jobs, webhooks, always-on systems
- More complex setup, but production-ready

**For this workshop:** We'll focus on the concepts (same in both).

---

## Common Composio Gotchas

1. **OAuth expiration:** Composio handles refresh, but check logs if connection dies
2. **Rate limits:** HubSpot, Salesforce have API rate limits; agent should be aware
3. **App permissions:** Some apps require specific OAuth scopes; Composio handles this, but double-check
4. **Cost:** Composio itself is free; you pay for usage in your apps (Gmail is free, but Salesforce might have overage limits)

---

## Next: Building Your First System

See `WORKSHOP_ACTIVITY.md` for a hands-on exercise.
