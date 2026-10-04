# BYOER - Bring Your Own Escape Room

**Proof of Concept / MVP Demo** — Free hosting on Cloudflare Workers + Pages

## Live Demo (Deployed!)

- **Landing Page (Pages):** https://byoer-landing.hello-world-byre.workers.dev/
- **Worker API:** https://byo-escape-room.hello-world-byre.workers.dev/api/hello

## Local Development

```bash
cd hello-world
# Terminal 1 - Worker API
npx wrangler dev src/index.ts

# Terminal 2 - Landing Page
npx wrangler pages dev pages/ --port 8788
```

Then open `http://localhost:8788/`

## MVP Demo Flow (Static Demo)

> **Note:** This is a static demo. All paths resolve to **Ship + Spooky** theme regardless of selection.

1. **Landing Page** — User selects location (Ship) + theme (Spooky)
2. **Invite Friends** — Share link; avatars appear top-right (like Google Docs)
3. **Intro Video** — Pre-recorded spooky ship video plays
4. **Play Button** — After video ends, "PLAY" button appears
5. **Escape Room Scene** — Static scene with:
   - Clue button (top-right)
   - Countdown timer

## Tech Stack (Free Tier)

- **Cloudflare Workers** — API endpoints (100K req/day free)
- **Cloudflare Pages** — Static frontend hosting
- **Workers AI** — Gen AI puzzle generation (future)
- **D1** — SQLite database (future)
- **KV** — Session/presence cache (future)

## Project Structure

```
hello-world/
├── src/
│   └── index.ts           # Worker API entry
├── pages/
│   └── index.html         # Landing page (static)
├── wrangler.jsonc         # Worker config
└── package.json
```

## Deploy

```bash
npx wrangler deploy              # Deploy Worker
npx wrangler pages deploy pages/ # Deploy Pages
```