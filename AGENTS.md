# AGENTS.md - Build Tracking for BYOER

## What's Done

### ✅ Stage 1: Proof of Concept (Completed)
- [x] Cloudflare Workers account created (free tier)
- [x] Worker API scaffolded (`src/index.ts`)
- [x] Worker deployed: `byo-escape-room.hello-world-byre.workers.dev`
- [x] Local dev tested (`wrangler dev`)
- [x] Git repo initialized with clean history (no node_modules)
- [x] Branches merged: `hello_world` → `main`

### ✅ Stage 2: Landing Page (Completed)
- [x] Static landing page (`pages/index.html`)
- [x] Escape room-themed design (dark, cyan/purple accents)
- [x] Generator form (location + theme selectors)
- [x] Live API demo section (fetches from Worker)
- [x] Local dev support (`localhost` auto-detection for API)
- [x] Pages dev server tested (`wrangler pages dev`)
- [x] Deployed and pushed to `escape-room-v2` branch

## What's Next

### ⏳ Stage 3: MVP Demo Flow (Current Goal)
Static/demo version — everything resolves to **Ship + Spooky** theme.

- [ ] **Lobby / Invite Page**
  - [ ] Static room with Ship + Spooky theme (ignore user selections)
  - [ ] Share link to invite friends
  - [ ] Friend avatars on top-right (Google Docs style)
  - [ ] Presence simulation (fake icons)

- [ ] **Intro Video Page**
  - [ ] Embedded static video (spooky ship)
  - [ ] Auto-play video
  - [ ] "PLAY" button appears after video ends

- [ ] **Escape Room Scene**
  - [ ] Static background image (ship interior)
  - [ ] Clue button (top-right hover)
  - [ ] Countdown timer
  - [ ] Clue modal/popup

### 🚀 Future Stages (Post-MVP)
- **Real-time multiplayer** via WebSockets / Durable Objects
- **Workers AI** — generate puzzles from theme
- **D1 Database** — rooms, puzzles, scores, players
- **KV** — presence/state caching
- **React frontend** — richer interactivity
- **Authentication** — host + player roles

## Key Decisions
- **MVP = static demo only** — no real multiplayer/persistence
- **Theme hard-coded: Ship + Spooky**
- **All pages are static HTML** (no framework, pure HTML/CSS/JS)
- **Cloudflare Workers/Pages free tier** only (no paid services)

## Environment
- Node: v26
- Wrangler: 4.147.0
- Cloudflare account: solveh2l
- Worker name: `byo-escape-room`
- Account subdomain: `hello-world-byre`