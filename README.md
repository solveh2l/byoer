# BYOER - Bring Your Own Escape Room

**MVP Demo** — Free hosting on Cloudflare Workers + Pages

## Live Demo (Deployed!)

- **Landing Page:** https://byoer-landing.hello-world-byre.workers.dev/
- **Worker API:** https://byo-escape-room.hello-world-byre.workers.dev/api/hello

## Local Development

```bash
cd hello-world
# Landing Page dev server
npx wrangler pages dev pages/ --port 8788
```

Open `http://localhost:8788/`

## MVP Demo Flow

> **Note:** Static demo. All paths resolve to **Prison + Alcatraz** theme.

```
Landing → Lobby → Video → Room (3 stages) → Victory
  /         /       /       /                    /
index.html lobby.html video.html room.html     victory.html
```

### Page-by-Page Wiring

| Page | File | What it does | Navigation |
|------|------|-------------|-----------|
| **Landing** | `index.html` | Generator form (Prison/Alcatraz default). "Start Escape Room Demo" button | → `/lobby` |
| **Lobby** | `lobby.html` | Host nickname input (random name if empty). Share link with host name in sessionStorage | → `/video` via "JOIN THE CREW" |
| **Video** | `video.html` | Intro video with Alcatraz text overlay. "PLAY NOW" button after 5s or click | → `/room` |
| **Room** | `room.html` | 3-stage escape with background images. Click to advance. **Host bypasses nickname modal; friends see it** | → `/victory` on 3rd click |
| **Victory** | `victory.html` | Trophy, escape report (time), leaderboard with host's name + player's name (if joined via share), confetti, replay button | → `/lobby` via "Replay Escape" |

### State Management (sessionStorage)

| Key | Set in | Used in |
|-----|--------|---------|
| `hostName` | `lobby.html` (on JOIN) | `room.html` (skip nickname modal), `victory.html` (leaderboard) |
| `playerName` | `room.html` (nickname modal) | `victory.html` (leaderboard row) |
| `escapeStartTime` | `room.html` (on load) | `victory.html` (escape time) |

### Room Page — Stage Progression

| Stage | Image | Area | Click to advance |
|-------|-------|------|------------------|
| 1 | `images/cell-block.jpg` | Cell Block | → Stage 2 |
| 2 | `images/prison-courtyard.jpg` | Prison Courtyard | → Stage 3 |
| 3 | `images/docks.jpg` | Docks | → Victory |

### Images

All images are AI-generated and stored in `pages/images/`:

| File | Stage | Description |
|------|-------|-------------|
| `cell-block.jpg` | 1 | Prison corridor with graffiti |
| `prison-courtyard.jpg` | 2 | Courtyard with searchlight |
| `docks.jpg` | 3 | Boat repair at dock with radio shack |

## Tech Stack (Free Tier)

- **Cloudflare Pages** — Static frontend hosting (500GB/mo bandwidth)
- **Cloudflare Workers** — API endpoints (100K req/day free)
- **Workers AI** — Gen AI puzzle generation (future)
- **D1** — SQLite database (future)
- **KV** — Session/presence cache (future)

## Project Structure

```
hello-world/
├── src/
│   └── index.ts              # Worker API entry
├── pages/
│   ├── index.html            # Landing page
│   ├── lobby.html            # Host nickname + share link
│   ├── video.html            # Intro video
│   ├── room.html             # 3-stage escape room
│   ├── victory.html          # Victory + leaderboard
│   └── images/
│       ├── cell-block.jpg    # Stage 1 background
│       ├── prison-courtyard.jpg  # Stage 2 background
│       └── docks.jpg         # Stage 3 background
├── wrangler.jsonc            # Worker config
└── package.json
```

## Deploy

```bash
npx wrangler pages deploy pages/ --project-name byoer-landing
```

## Key Decisions

- **MVP = static demo only** — no real multiplayer/persistence
- **Theme hard-coded: Prison + Alcatraz**
- **All pages are static HTML** (no framework, pure HTML/CSS/JS)
- **Host vs friend** distinguished by `hostName` in sessionStorage
- **Images are local files** — served from `/images/` path
