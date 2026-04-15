# Snap-Back: Space Mining — GitHub Pages Site Design

**Date:** 2026-04-15
**Repo:** vilaverdeapps (publishes at vilaverdeapps.github.io)
**Approach:** Option C — devsurge HTML/CSS structure with game-native neon color identity

---

## File Structure

```
vilaverdeapps/
├── index.html                  ← meta-refresh redirect to MARKETING.html
├── MARKETING.html              ← main landing page
├── robots.txt
├── sitemap.xml
├── assets/
│   └── styles.css              ← shared CSS (adapted from devsurge)
└── snapback/
    ├── PRIVACY.html            ← Google AdMob privacy policy
    └── SUPPORT.html            ← requirements + GitHub issues support link
```

Images from `snap-back/images/` are not included for now — those are raw gameplay frames, not polished marketing screenshots. Easy to add later.

---

## Visual Identity

CSS architecture mirrors devsurge exactly. Color tokens swapped for space/neon:

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0a0c14` | Deep space black |
| `--bg-elevated` | `#111320` | Card surfaces |
| `--text` | `#e8e6f0` | Body copy |
| `--muted` | `#7a7a9a` | Secondary text, nav links |
| `--accent` | `#00e5ff` | Cyan — CTAs, links, highlights |
| `--accent-dim` | `#0099bb` | Hover states, list markers |
| `--border` | `rgba(0,229,255,0.1)` | Subtle cyan-tinted borders |

Hero background: radial gradient, cyan glow from top-center (same technique as devsurge amber glow).
Fonts: **Fraunces** (display headings) + **Source Sans 3** (body) via Google Fonts.

---

## Page Content

### MARKETING.html

**Nav:** Snap-Back: Space Mining | Features · Privacy · Support · App Store

**Hero:**
- Headline: "Snap-Back: Space Mining"
- Tagline: elevator pitch — *"The tactile satisfaction of snapping a rubber band combined with the chaotic physics of a high-speed slingshot. Easy to pick up, impossible to put down."*
- CTAs: "Download on the App Store" (placeholder URL) + "How it works" anchor

**Section — How it works:**
The core loop: touch and drag to aim and build power → launch → upon impact with a geometric target an elastic tether attaches → snap back to the Core (center base). The further you traveled, the bigger the score.

**Section — Highlights (feature list):**
- Slingshot launch with predictive dotted trajectory
- Elastic tether grapple on impact
- Multi-grapple: daisy-chain multiple targets for a score multiplier
- Tactile immersion via Apple Taptic Engine (stretching feedback, snap thud)
- Ghost Runs: see Game Center friends' best rounds in the background
- Daily Trickshot: one procedurally generated level everyone in the world plays
- Customizable tether skins and Core Hub designs via achievements
- No account required

**Section — Get the app:**
- iPhone, iOS 17 or later
- App Store CTA (placeholder)

**Footer:** Privacy policy · Support · GitHub

---

### snapback/PRIVACY.html

Adapted from devsurge's AdMob privacy policy. Key points:
- Game data stored locally; no account required
- Google AdMob: identifiers, coarse location, usage & diagnostics, personalized ads
- App Tracking Transparency (ATT) prompt on supported iOS versions
- Data retention governed by third-party providers
- Children: not directed at children; Screen Time controls recommended
- Your privacy choices: iOS Settings → Privacy & Security → Tracking, Google My Ad Center
- Contact: GitHub issues link
- Last updated: April 15 2026

---

### snapback/SUPPORT.html

- Requirements: iPhone, iOS 17+
- Brief app description
- How to report: open a GitHub issue in the vilaverdeapps repo
- Link to Privacy Policy
- Trademark notice

---

## Sitemap

```xml
MARKETING.html          priority 1.0, changefreq monthly
snapback/PRIVACY.html   priority 0.6, changefreq yearly
snapback/SUPPORT.html   priority 0.6, changefreq yearly
```

---

## Open Items

- App Store URL: placeholder until app is submitted (`#app-store-placeholder`)
- GitHub issues repo URL: assumed `https://github.com/vilaverdeapps/vilaverdeapps.github.io/issues/new` — confirm before launch
- App Store ID needed for `ld+json` schema once submitted
