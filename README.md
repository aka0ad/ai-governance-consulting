# AI Governance Consulting Website

B2B consulting website for AI governance, compliance frameworks, and responsible AI deployment for regulated enterprises.

## What This Is

A Next.js static site built for Cloudflare Pages deployment. Covers:
- **Services:** EU AI Act compliance audits, governance frameworks, system assessments, ongoing retainer support
- **Thought leadership:** Blog section for AI governance insights and research
- **Lead capture:** Contact form for inbound sales inquiry

## Tech Stack

- **Framework:** Next.js 14 (static export)
- **Styling:** CSS (no external dependencies)
- **Hosting:** Cloudflare Pages
- **Deployment:** GitHub → Cloudflare (automatic on push)

## Project Structure

```
app/
├── layout.tsx           # Global layout (nav, footer)
├── globals.css          # All styles
├── page.tsx             # Home page
├── services/page.tsx    # Services overview
├── blog/page.tsx        # Blog/insights
└── contact/page.tsx     # Contact form

next.config.js           # Next.js config (static export)
package.json
DEPLOY.md               # Cloudflare Pages setup guide
```

## Development

```bash
npm install
npm run dev              # Local dev server (http://localhost:3000)
npm run build            # Build static site (outputs to ./out)
```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for Cloudflare Pages setup instructions.

Quick version:
1. Push to GitHub
2. Connect repo to Cloudflare Pages
3. Cloudflare auto-deploys on every push

## Customization

### Add a Blog Post

1. Create `app/blog/[slug]/page.tsx`
2. Add to blog list in `app/blog/page.tsx`

### Update Contact Form

Currently logs to console. To send emails:
- Option 1: Integrate Formspree or Basin
- Option 2: Set up Cloudflare Workers backend

### Change Pricing/Services

Edit `app/page.tsx` and `app/services/page.tsx`

### Rebrand

- Update meta tags in `app/layout.tsx`
- Edit hero section in `app/page.tsx`
- Modify colors in `app/globals.css`

## Notes

- This is a static site (no server-side rendering)
- Forms currently don't persist submissions—integrate a backend if needed
- All styling is in one CSS file for simplicity (can split if needed)
