# Snap-Back: Space Mining — GitHub Pages Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static GitHub Pages marketing site for the Snap-Back: Space Mining iOS app with a marketing page, privacy policy, and support page.

**Architecture:** Pure static HTML + CSS, no build step. Seven files total. Shared stylesheet at `/assets/styles.css` referenced by all pages. Structure mirrors devsurge/devsurge.github.io with game-native neon/space color tokens.

**Tech Stack:** HTML5, CSS3 (custom properties), Google Fonts (Fraunces + Source Sans 3), GitHub Pages

---

## Prerequisites

> **Repo naming:** For the site to publish at `https://vilaverdeapps.github.io`, the GitHub repository must be named `vilaverdeapps.github.io` (not `vilaverdeapps`). If the repo on GitHub is currently named `vilaverdeapps`, rename it in Settings before pushing, then update the remote URL locally:
> ```bash
> git remote set-url origin https://github.com/vilaverdeapps/vilaverdeapps.github.io.git
> ```
> All canonical URLs in these files use `https://vilaverdeapps.github.io` — adjust if using a different domain.

---

## File Map

| File | Action | Purpose |
|---|---|---|
| `assets/styles.css` | Create | Shared CSS — neon space color tokens, all layout |
| `index.html` | Create | Meta-refresh redirect to MARKETING.html |
| `MARKETING.html` | Create | Main landing page |
| `snapback/PRIVACY.html` | Create | Google AdMob privacy policy |
| `snapback/SUPPORT.html` | Create | Requirements + GitHub issues support |
| `robots.txt` | Create | SEO — allow all, point to sitemap |
| `sitemap.xml` | Create | SEO — three URLs |

---

## Task 1: Shared CSS

**Files:**
- Create: `assets/styles.css`

- [ ] **Step 1: Create the assets directory and stylesheet**

Create `assets/styles.css` with this exact content:

```css
/* Snap-Back: Space Mining — GitHub Pages */
:root {
  --bg: #0a0c14;
  --bg-elevated: #111320;
  --text: #e8e6f0;
  --muted: #7a7a9a;
  --accent: #00e5ff;
  --accent-dim: #0099bb;
  --border: rgba(0, 229, 255, 0.1);
  --radius: 12px;
  --max: 42rem;
  --font-sans: "Source Sans 3", system-ui, -apple-system, sans-serif;
  --font-display: "Fraunces", Georgia, "Times New Roman", serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: var(--font-sans);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--text);
  background: var(--bg);
  background-image: radial-gradient(
    ellipse 120% 80% at 50% -20%,
    rgba(0, 229, 255, 0.08),
    transparent 55%
  );
}

.skip-link {
  position: absolute;
  left: -9999px;
  z-index: 999;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: var(--bg);
  font-weight: 600;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
}

a {
  color: var(--accent);
  text-decoration-thickness: 1px;
  text-underline-offset: 3px;
}

a:hover {
  color: #33eeff;
}

.site-header {
  border-bottom: 1px solid var(--border);
  padding: 1rem 1.25rem;
  position: sticky;
  top: 0;
  background: rgba(10, 12, 20, 0.92);
  backdrop-filter: blur(10px);
  z-index: 10;
}

.site-header__inner {
  max-width: 56rem;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.site-title {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.site-title a {
  color: var(--text);
  text-decoration: none;
}

.site-title a:hover {
  color: var(--accent);
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.25rem;
  font-size: 0.95rem;
}

.nav a {
  color: var(--muted);
  text-decoration: none;
}

.nav a:hover {
  color: var(--accent);
}

main {
  max-width: 56rem;
  margin: 0 auto;
  padding: 2.5rem 1.25rem 4rem;
}

.hero {
  text-align: center;
  padding: 1rem 0 2.5rem;
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.03em;
  margin: 0 0 1rem;
}

.hero__lede {
  font-size: 1.2rem;
  color: var(--muted);
  max-width: 36rem;
  margin: 0 auto 1.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: var(--font-sans);
  font-size: 1rem;
  font-weight: 600;
  color: var(--bg);
  background: linear-gradient(180deg, #33eeff 0%, var(--accent) 100%);
  border: none;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 2px 16px rgba(0, 229, 255, 0.25);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.btn:hover {
  color: var(--bg);
  transform: translateY(-1px);
  box-shadow: 0 4px 24px rgba(0, 229, 255, 0.35);
}

.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.btn--secondary {
  background: var(--bg-elevated);
  color: var(--text);
  border: 1px solid var(--border);
  box-shadow: none;
}

.btn--secondary:hover {
  border-color: var(--accent-dim);
  color: var(--accent);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

section {
  margin-bottom: 2.75rem;
}

section h2 {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}

.card {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.5rem 1.35rem;
}

.card p:last-child {
  margin-bottom: 0;
}

ul.feature-list {
  margin: 0;
  padding-left: 1.25rem;
}

ul.feature-list li {
  margin-bottom: 0.5rem;
}

ul.feature-list li::marker {
  color: var(--accent-dim);
}

.meta-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 540px) {
  .meta-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.meta-item {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  border: 1px solid var(--border);
}

.meta-item strong {
  display: block;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
  margin-bottom: 0.35rem;
}

.site-footer {
  border-top: 1px solid var(--border);
  padding: 2rem 1.25rem;
  max-width: 56rem;
  margin: 0 auto;
  font-size: 0.9rem;
  color: var(--muted);
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-bottom: 1rem;
}

.site-footer a {
  color: var(--muted);
}

.site-footer a:hover {
  color: var(--accent);
}

/* Legal / inner pages */
.prose {
  max-width: var(--max);
}

.prose h1 {
  font-family: var(--font-display);
  font-size: 2rem;
  margin-top: 0;
}

.prose h2 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  margin-top: 2rem;
}

.prose h3 {
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.prose hr {
  border: none;
  border-top: 1px solid var(--border);
  margin: 2rem 0;
}

.back-link {
  display: inline-block;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}
```

- [ ] **Step 2: Verify the file exists**

Run: `ls -la assets/styles.css`
Expected: file listed, non-zero size

- [ ] **Step 3: Commit**

```bash
git add assets/styles.css
git commit -m "feat: add shared CSS with neon space color tokens"
```

---

## Task 2: index.html redirect

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Snap-Back: Space Mining</title>
    <link rel="canonical" href="https://vilaverdeapps.github.io/MARKETING.html" />
    <meta http-equiv="refresh" content="0; url=MARKETING.html" />
    <meta name="robots" content="index,follow" />
  </head>
  <body>
    <p><a href="MARKETING.html">Continue to Snap-Back: Space Mining</a></p>
  </body>
</html>
```

- [ ] **Step 2: Verify**

Run: `ls -la index.html`
Expected: file listed, non-zero size

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add index.html redirect to MARKETING.html"
```

---

## Task 3: MARKETING.html

**Files:**
- Create: `MARKETING.html`

- [ ] **Step 1: Create MARKETING.html**

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Snap-Back: Space Mining — Physics slingshot game for iPhone</title>
    <meta
      name="description"
      content="Snap-Back: Space Mining is a physics-based hyper-casual iOS game. Launch your ship with a slingshot, grapple geometric ore targets, and snap back to base. Easy to pick up, impossible to put down."
    />
    <meta
      name="keywords"
      content="Snap-Back, Space Mining, iOS game, slingshot, physics, hyper-casual, iPhone, grapple, arcade"
    />
    <link rel="canonical" href="https://vilaverdeapps.github.io/MARKETING.html" />
    <meta name="robots" content="index,follow" />
    <meta name="author" content="vilaverdeapps" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Snap-Back: Space Mining" />
    <meta property="og:title" content="Snap-Back: Space Mining — Physics slingshot game for iPhone" />
    <meta
      property="og:description"
      content="Launch, grapple, snap back. A physics-based hyper-casual iOS game built around the Apple Taptic Engine. Free on the App Store."
    />
    <meta property="og:url" content="https://vilaverdeapps.github.io/MARKETING.html" />
    <meta property="og:locale" content="en_US" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Snap-Back: Space Mining — Physics slingshot game for iPhone" />
    <meta
      name="twitter:description"
      content="Launch, grapple, snap back. Physics-based hyper-casual iOS game. Native iPhone app — no sign-in."
    />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Source+Sans+3:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/assets/styles.css" />

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "MobileApplication",
        "name": "Snap-Back: Space Mining",
        "operatingSystem": "iOS 17",
        "applicationCategory": "GameApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "Physics-based hyper-casual iOS game. Touch and drag to aim, launch your ship with a slingshot, grapple geometric ore targets with an elastic tether, and snap back to base. Multi-grapple for score multipliers, Ghost Runs via Game Center, Daily Trickshot, and tactile feedback via the Apple Taptic Engine. No account required.",
        "author": {
          "@type": "Organization",
          "name": "vilaverdeapps"
        }
      }
    </script>
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Snap-Back: Space Mining",
        "url": "https://vilaverdeapps.github.io/MARKETING.html",
        "description": "Official page for Snap-Back: Space Mining, a physics slingshot game for iPhone.",
        "publisher": {
          "@type": "Organization",
          "name": "vilaverdeapps"
        }
      }
    </script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="site-header__inner">
        <p class="site-title"><a href="/MARKETING.html">Snap-Back: Space Mining</a></p>
        <nav class="nav" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="/snapback/PRIVACY.html">Privacy</a>
          <a href="/snapback/SUPPORT.html">Support</a>
          <a href="#app-store-placeholder">App Store</a>
        </nav>
      </div>
    </header>

    <main id="main">
      <article>
        <header class="hero">
          <h1>Snap-Back: Space Mining</h1>
          <p class="hero__lede">
            The tactile satisfaction of snapping a rubber band combined with the chaotic physics of a high-speed
            slingshot. Easy to pick up, impossible to put down.
          </p>
          <div class="hero__actions">
            <a
              class="btn"
              href="#app-store-placeholder"
              rel="noopener noreferrer"
            >
              Download on the App Store
            </a>
            <a class="btn btn--secondary" href="#how-it-works">How it works</a>
          </div>
        </header>

        <section id="how-it-works" aria-labelledby="how-heading">
          <h2 id="how-heading">How it works</h2>
          <div class="card">
            <p>
              Touch and drag anywhere on screen to aim and build power — a predictive dotted line shows your
              trajectory. Release to <strong>launch</strong>. Upon impact with a geometric ore target, an
              <strong>elastic tether</strong> automatically attaches. Then <strong>snap back</strong> to the Core
              (your center base). The further you traveled, the bigger the score.
            </p>
          </div>
        </section>

        <section id="features" aria-labelledby="features-heading">
          <h2 id="features-heading">Highlights</h2>
          <div class="card">
            <ul class="feature-list">
              <li>
                <strong>Slingshot launch</strong> — touch and drag to aim; a predictive dotted trajectory shows
                where you'll go.
              </li>
              <li>
                <strong>Elastic tether grapple</strong> — hit a target and a tether auto-attaches; snap back to
                base to score.
              </li>
              <li>
                <strong>Multi-grapple</strong> — daisy-chain multiple targets for a score multiplier, at
                increasingly chaotic risk.
              </li>
              <li>
                <strong>Taptic Engine</strong> — stretching vibration as you pull back, a sharp thud on impact,
                and a shattered pulse if the line breaks.
              </li>
              <li>
                <strong>Ghost Runs</strong> — a translucent replay of your Game Center friends' best rounds plays
                in the background.
              </li>
              <li>
                <strong>Daily Trickshot</strong> — one procedurally generated level refreshes every 24 hours;
                every player in the world competes on the same layout.
              </li>
              <li>
                <strong>Customization</strong> — unlock tether skins (Neon Lightning, Chrome Chain) and Core Hub
                designs via gameplay achievements.
              </li>
              <li><strong>No account</strong> — nothing to sign up for; your progress stays on your device.</li>
            </ul>
          </div>
        </section>

        <section aria-labelledby="get-heading">
          <h2 id="get-heading">Get the app</h2>
          <div class="card">
            <p>
              Snap-Back: Space Mining is available on the App Store for iPhone (iOS 17 or later).
            </p>
            <p style="margin-bottom: 0">
              <a
                class="btn"
                href="#app-store-placeholder"
                rel="noopener noreferrer"
              >
                Open in the App Store
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>

    <footer class="site-footer">
      <div class="site-footer__links">
        <a href="/snapback/PRIVACY.html">Privacy policy</a>
        <a href="/snapback/SUPPORT.html">Support</a>
        <a href="https://github.com/vilaverdeapps/snap-back" rel="noopener noreferrer">GitHub</a>
      </div>
      <p>Snap-Back: Space Mining is developed by vilaverdeapps. App Store is a trademark of Apple Inc.</p>
    </footer>
  </body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Run: `open MARKETING.html`

Check:
- Dark space background with cyan glow at top
- Sticky nav with cyan hover states
- Hero headline + tagline + two buttons (cyan primary, dark secondary)
- "How it works" card section
- "Highlights" feature list with cyan markers
- "Get the app" card with CTA
- Footer with three links

- [ ] **Step 3: Commit**

```bash
git add MARKETING.html
git commit -m "feat: add MARKETING.html landing page"
```

---

## Task 4: snapback/PRIVACY.html

**Files:**
- Create: `snapback/PRIVACY.html`

- [ ] **Step 1: Create snapback directory and PRIVACY.html**

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Privacy Policy — Snap-Back: Space Mining</title>
    <meta
      name="description"
      content="How Snap-Back: Space Mining handles information on iPhone: local game data, optional ads via Google AdMob, App Tracking Transparency, and your privacy choices."
    />
    <link rel="canonical" href="https://vilaverdeapps.github.io/snapback/PRIVACY.html" />
    <meta name="robots" content="index,follow" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="Privacy Policy — Snap-Back: Space Mining" />
    <meta
      property="og:description"
      content="Privacy practices for the Snap-Back: Space Mining iPhone app, including advertising and analytics."
    />
    <meta property="og:url" content="https://vilaverdeapps.github.io/snapback/PRIVACY.html" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Source+Sans+3:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="site-header__inner">
        <p class="site-title"><a href="/MARKETING.html">Snap-Back: Space Mining</a></p>
        <nav class="nav" aria-label="Primary">
          <a href="/MARKETING.html">Home</a>
          <a href="/snapback/SUPPORT.html">Support</a>
          <a href="#app-store-placeholder">App Store</a>
        </nav>
      </div>
    </header>

    <main id="main" class="prose">
      <a class="back-link" href="/MARKETING.html">← Back to home</a>
      <article>
        <header>
          <h1>Snap-Back: Space Mining — Privacy Policy</h1>
          <p><strong>Last updated:</strong> 15 April 2026</p>
        </header>

        <p>
          This policy describes how <strong>Snap-Back: Space Mining</strong> ("the app") handles information when
          you use it on iPhone. The app is a <strong>local game</strong>; you do <strong>not</strong> need an
          account, and we do <strong>not</strong> run our own social network or cloud game service in the app.
        </p>
        <p>
          If anything here conflicts with <strong>Apple's in-app labels</strong> in App Store Connect or on the
          App Store product page, the <strong>store listing</strong> and <strong>system permission
          dialogs</strong> control for required disclosures.
        </p>

        <hr />

        <h2>Summary</h2>
        <ul>
          <li>
            <strong>Game data</strong> (scores, achievements, settings you configure) is stored
            <strong>on your device</strong> as part of normal app storage. We do not require you to create an
            account to play.
          </li>
          <li>
            The app may show <strong>ads</strong> using <strong>Google's advertising services</strong> (for
            example <strong>Google AdMob</strong>). Those services can collect or process
            <strong>identifiers</strong>, <strong>coarse location</strong>,
            <strong>usage and diagnostics</strong> information, and related signals to deliver and measure
            <strong>advertising</strong> and <strong>analytics</strong>, including in support of
            <strong>personalized ads</strong> where allowed by platform settings and your choices.
          </li>
          <li>
            On supported iOS versions, Apple may show <strong>App Tracking Transparency (ATT)</strong>. Your
            choice there affects whether the advertising identifier (such as <strong>IDFA</strong>) can be used
            for <strong>tracking</strong> across other companies' apps and websites, as described in Apple's
            prompt.
          </li>
          <li>
            You can limit ad personalization and tracking through <strong>iOS Settings</strong> (for example
            <strong>Privacy &amp; Security → Tracking</strong>, and ad choices offered by Google and other
            industry tools). Links appear in the <strong>Your privacy choices</strong> section below.
          </li>
        </ul>

        <h2>Information the app and our partners may process</h2>
        <p>
          The following aligns with the <strong>App Privacy</strong> details published for Snap-Back: Space
          Mining on the App Store. Categories may overlap; some data may be used for
          <strong>more than one</strong> purpose.
        </p>

        <h3>Identifiers (including device / advertising identifiers)</h3>
        <ul>
          <li>
            <strong>What:</strong> Device and advertising-related identifiers made available by iOS and
            advertising SDKs (for example identifiers used for ads and measurement).
          </li>
          <li>
            <strong>Why:</strong> <strong>Third-Party Advertising</strong>,
            <strong>Analytics</strong>, and—where applicable—<strong>tracking</strong> across apps and websites
            owned by <strong>other companies</strong>, consistent with Apple's App Privacy definitions and your
            ATT choice.
          </li>
          <li>
            <strong>Linked to you:</strong> May be used for <strong>tracking</strong> as described in the App
            Store privacy section. May also appear under data <strong>not linked</strong> to your identity in
            Apple's labels, depending on how partners process it.
          </li>
        </ul>

        <h3>Location (coarse)</h3>
        <ul>
          <li>
            <strong>What:</strong> <strong>Coarse</strong> location (not precise GPS for this disclosure) may
            be inferred or used at a regional level for advertising and measurement.
          </li>
          <li>
            <strong>Why:</strong> <strong>Analytics</strong>, <strong>Third-Party Advertising</strong>,
            and—where applicable—<strong>tracking</strong> as described on the App Store.
          </li>
        </ul>

        <h3>Usage data</h3>
        <ul>
          <li>
            <strong>What:</strong> May include <strong>product interaction</strong> (for example how you
            navigate or use the app in ways observed by the SDKs) and
            <strong>advertising-related usage</strong> (for example ad impressions, responses, or related events
            as supported by the SDK).
          </li>
          <li>
            <strong>Why:</strong> <strong>Analytics</strong>, <strong>Third-Party Advertising</strong>,
            and—where applicable—<strong>tracking</strong> as described on the App Store.
          </li>
        </ul>

        <h3>Diagnostics</h3>
        <ul>
          <li>
            <strong>Crash data:</strong> Information about crashes or stability events may be processed for
            <strong>Third-Party Advertising</strong> and <strong>Analytics</strong> as disclosed on the App
            Store.
          </li>
          <li>
            <strong>Performance data:</strong> Information about app performance may be processed for
            <strong>Analytics</strong> and <strong>Third-Party Advertising</strong> as disclosed on the App
            Store.
          </li>
        </ul>

        <h2>Third-party services (advertising &amp; measurement)</h2>
        <p>
          Advertising and related technology are provided by <strong>third parties</strong> (such as
          <strong>Google</strong>). Their processing is governed by their own policies and agreements, in
          addition to this notice:
        </p>
        <ul>
          <li><a href="https://policies.google.com/privacy">Google Privacy Policy</a></li>
          <li>
            <a href="https://policies.google.com/technologies/partner-sites"
              >How Google uses information from sites or apps that use our services</a
            >
          </li>
          <li>
            <a href="https://support.google.com/adspolicy/answer/6008942">Google Advertising Policies</a>
          </li>
        </ul>
        <p>
          We do not control all processing by third parties; we configure the app to use industry-standard
          mobile advertising tools consistent with the App Store disclosures you see for
          Snap-Back: Space Mining.
        </p>

        <h2>Data retention</h2>
        <p>
          Retention of information collected by <strong>third-party advertising or analytics</strong> services
          is determined by those providers' policies and your device settings. Locally stored
          <strong>game data and preferences</strong> remain on your device until you delete them in the app or
          remove the app (subject to iOS backup behavior).
        </p>

        <h2>Children</h2>
        <p>
          The app is not directed to children in a way that would change these disclosures; parents and
          guardians should use Apple's <strong>Screen Time</strong> and <strong>Family Sharing</strong> controls
          if needed. Advertising services may have additional age-related rules in their own policies.
        </p>

        <h2>International users</h2>
        <p>
          If you use the app outside your home country, information may be processed in the United States or
          other countries where Google and its infrastructure operate, as described in Google's policies.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this page to reflect product, legal, or App Store requirements. The
          <strong>Last updated</strong> date at the top will change when we do; continued use of the app after
          changes means you accept the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about this policy or the app's privacy practices, open an issue in the public
          repository:
          <a href="https://github.com/vilaverdeapps/snap-back">vilaverdeapps/snap-back</a>.
        </p>

        <h2>Your privacy choices</h2>
        <ul>
          <li>
            <strong>iOS:</strong> <strong>Settings → Privacy &amp; Security → Tracking</strong> — control
            whether apps may ask to track you across other companies' apps and websites (see
            <a href="https://support.apple.com/102483">Apple's support</a>).
          </li>
          <li>
            <strong>Ads &amp; personalization:</strong> Google offers tools such as
            <a href="https://myadcenter.google.com/">My Ad Center</a> and account controls described in
            Google's help pages.
          </li>
          <li>
            <strong>Apple:</strong>
            <a href="https://www.apple.com/privacy/">About privacy on Apple devices</a>.
          </li>
        </ul>

        <p>
          <em>This page is provided for the <strong>Privacy Policy URL</strong> field in App Store Connect.
          Repository: <a href="https://github.com/vilaverdeapps/snap-back">vilaverdeapps/snap-back</a>.</em>
        </p>
      </article>
    </main>

    <footer class="site-footer">
      <div class="site-footer__links">
        <a href="/MARKETING.html">Home</a>
        <a href="/snapback/SUPPORT.html">Support</a>
      </div>
      <p>© Snap-Back: Space Mining. See <a href="/MARKETING.html">home</a> for product overview.</p>
    </footer>
  </body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Run: `open snapback/PRIVACY.html`

Check:
- Same header/footer as MARKETING.html
- "← Back to home" back-link
- All privacy sections render (Summary through Your privacy choices)
- All Google policy links are present and clickable
- `vilaverdeapps/snap-back` GitHub link in Contact section

- [ ] **Step 3: Commit**

```bash
git add snapback/PRIVACY.html
git commit -m "feat: add privacy policy page (Google AdMob)"
```

---

## Task 5: snapback/SUPPORT.html

**Files:**
- Create: `snapback/SUPPORT.html`

- [ ] **Step 1: Create snapback/SUPPORT.html**

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Support — Snap-Back: Space Mining</title>
    <meta
      name="description"
      content="Requirements, troubleshooting, and how to report issues for Snap-Back: Space Mining on iPhone. iOS 17+, physics-based slingshot game."
    />
    <link rel="canonical" href="https://vilaverdeapps.github.io/snapback/SUPPORT.html" />
    <meta name="robots" content="index,follow" />

    <meta property="og:type" content="article" />
    <meta property="og:title" content="Support — Snap-Back: Space Mining" />
    <meta
      property="og:description"
      content="Help for Snap-Back: Space Mining: requirements and how to report a problem or request a feature."
    />
    <meta property="og:url" content="https://vilaverdeapps.github.io/snapback/SUPPORT.html" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Source+Sans+3:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="site-header__inner">
        <p class="site-title"><a href="/MARKETING.html">Snap-Back: Space Mining</a></p>
        <nav class="nav" aria-label="Primary">
          <a href="/MARKETING.html">Home</a>
          <a href="/snapback/PRIVACY.html">Privacy</a>
          <a href="#app-store-placeholder">App Store</a>
        </nav>
      </div>
    </header>

    <main id="main" class="prose">
      <a class="back-link" href="/MARKETING.html">← Back to home</a>
      <article>
        <header>
          <h1>Snap-Back: Space Mining — Support</h1>
        </header>

        <p>
          <strong>Snap-Back: Space Mining</strong> is a physics-based hyper-casual iPhone game: touch and drag
          to aim, launch with a slingshot, grapple geometric ore targets with an elastic tether, and snap back
          to base to score. Everything runs on your device; no account is required.
        </p>

        <h2>Requirements</h2>
        <ul>
          <li><strong>iPhone</strong> with <strong>iOS 17</strong> or later</li>
          <li>Designed for iPhone; iPad may run the app in compatibility mode depending on your device</li>
        </ul>

        <h2>Reporting a problem or requesting a feature</h2>
        <ol>
          <li>
            Check that you are on the <strong>latest iOS</strong> and the
            <strong>latest app version</strong> from the App Store.
          </li>
          <li>
            If something still looks wrong, open a
            <a href="https://github.com/vilaverdeapps/snap-back/issues/new">GitHub issue</a>. In the title or
            description, mention what you were doing when the issue occurred (device model and iOS version help
            too).
          </li>
        </ol>
        <p>
          If issues are disabled on the repository, use the <strong>Support</strong> contact method listed on
          the app's App Store product page.
        </p>

        <h2>Privacy</h2>
        <p>
          The app does not require a login. Game data and settings stay on your device. For full details on
          advertising, analytics, and tracking disclosures, see the
          <a href="/snapback/PRIVACY.html">Privacy Policy</a>. The App Store
          <strong>App Privacy</strong> section and in-app prompts (such as
          <strong>App Tracking Transparency</strong>) describe how data is used on your device.
        </p>

        <h2>Trademark</h2>
        <p>
          <strong>Snap-Back: Space Mining</strong> is developed by vilaverdeapps. App Store is a trademark of
          Apple Inc.
        </p>

        <p>
          <em>This page is maintained for App Store <strong>Support URL</strong> compliance and user help.
          Repository:
          <a href="https://github.com/vilaverdeapps/snap-back">vilaverdeapps/snap-back</a>.</em>
        </p>
      </article>
    </main>

    <footer class="site-footer">
      <div class="site-footer__links">
        <a href="/MARKETING.html">Home</a>
        <a href="/snapback/PRIVACY.html">Privacy policy</a>
      </div>
      <p>Get the app on the <a href="#app-store-placeholder">App Store</a>.</p>
    </footer>
  </body>
</html>
```

- [ ] **Step 2: Open in browser and verify**

Run: `open snapback/SUPPORT.html`

Check:
- Same header/footer as other pages
- "← Back to home" back-link
- Requirements section (iPhone, iOS 17+)
- GitHub issues link points to `https://github.com/vilaverdeapps/snap-back/issues/new`
- Privacy policy link points to `/snapback/PRIVACY.html`

- [ ] **Step 3: Commit**

```bash
git add snapback/SUPPORT.html
git commit -m "feat: add support page with GitHub issues link"
```

---

## Task 6: robots.txt and sitemap.xml

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

- [ ] **Step 1: Create robots.txt**

```
User-agent: *
Allow: /

Sitemap: https://vilaverdeapps.github.io/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://vilaverdeapps.github.io/MARKETING.html</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://vilaverdeapps.github.io/snapback/PRIVACY.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://vilaverdeapps.github.io/snapback/SUPPORT.html</loc>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

- [ ] **Step 3: Commit**

```bash
git add robots.txt sitemap.xml
git commit -m "feat: add robots.txt and sitemap.xml"
```

---

## Task 7: GitHub Pages setup

- [ ] **Step 1: Confirm repo name**

For the site to publish at `https://vilaverdeapps.github.io`, the GitHub repository must be named `vilaverdeapps.github.io` under the `vilaverdeapps` account or org. If the remote is not yet set, add it:

```bash
git remote add origin https://github.com/vilaverdeapps/vilaverdeapps.github.io.git
```

If the remote already exists under a different name, update it:

```bash
git remote set-url origin https://github.com/vilaverdeapps/vilaverdeapps.github.io.git
```

- [ ] **Step 2: Push to GitHub**

```bash
git push -u origin main
```

- [ ] **Step 3: Enable GitHub Pages in repo settings**

In the GitHub repo → Settings → Pages:
- Source: **Deploy from a branch**
- Branch: `main` / `/ (root)`
- Save

The site will be live at `https://vilaverdeapps.github.io` within ~1 minute.

- [ ] **Step 4: Verify live site**

Run: `open https://vilaverdeapps.github.io`

Check:
- Redirects to `MARKETING.html`
- Dark background + cyan glow renders
- Nav links to Privacy and Support work
- All `#app-store-placeholder` links exist (to be updated when App Store submission is complete)

---

## Post-launch: Update App Store links

When the app is approved and live on the App Store, replace all occurrences of `#app-store-placeholder` with the real App Store URL. Files to update:

- `MARKETING.html` (two occurrences)
- `snapback/PRIVACY.html` (nav link)
- `snapback/SUPPORT.html` (nav link + footer)
- `index.html` (none — no App Store link)

Also add `"downloadUrl"` and `"installUrl"` to the `ld+json` schema block in `MARKETING.html`, and add the App Store ID.
