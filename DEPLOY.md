# Deploy to Cloudflare Pages

This is a Next.js static site configured for Cloudflare Pages deployment via GitHub.

## Configure Build Settings in Cloudflare

When connecting to Cloudflare Pages, override the auto-detected settings:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Framework preset:** Next.js

The site is static (not dynamic), so don't use opennextjs-cloudflare adapter.

## Prerequisites

1. GitHub account with this repo pushed up
2. Cloudflare account (free tier works)
3. Domain pointing to Cloudflare (or use Cloudflare's free subdomain)

## Setup (One-time)

### 1. Push to GitHub

```bash
git add .
git commit -m "Initial AI governance consulting website"
git remote add origin https://github.com/[your-username]/ai-governance-consulting.git
git branch -M main
git push -u origin main
```

### 2. Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages**
2. Click **Create a project** → **Connect to Git**
3. Authorize GitHub, select your repo
4. **Configure build**:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:** None needed (unless you add backend services)
5. Click **Save and Deploy**

Cloudflare will auto-deploy on every push to `main`.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Making Changes

1. Edit files locally
2. Test locally (`npm run dev`)
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update [what changed]"
   git push
   ```
4. Cloudflare automatically rebuilds and deploys

## Custom Domain

To use your own domain:
1. In Cloudflare Pages settings, click **Custom domain**
2. Enter your domain
3. Update your domain's DNS to point to Cloudflare (if not already)

## Troubleshooting

**Build fails?**
- Check Cloudflare Pages build logs
- Ensure `next.config.js` has `output: 'export'` (it does)
- Make sure no dynamic routes are used (this is a static site)

**Site doesn't update after pushing?**
- Give Cloudflare 2–3 minutes to rebuild
- Check Cloudflare Pages deployment history

**Form submissions?**
- The contact form currently logs to browser console
- To send actual emails, integrate with a service like Formspree, Basin, or Mailgun
