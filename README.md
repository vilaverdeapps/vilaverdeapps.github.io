# vilaverdeapps

Shared landing page for **vilaverdeapps** iOS apps, hosted at [vilaverdeapps.github.io](https://vilaverdeapps.github.io/).

## Apps

| App | Description |
|-----|-------------|
| [Snap-Back: Space Mining](https://vilaverdeapps.github.io/snapback/MARKETING.html) | Physics-based hyper-casual slingshot game with Taptic Engine feedback |
| [Patter](https://vilaverdeapps.github.io/patter/MARKETING.html) | AI language learning that feels like texting — serverless, BYOK |

## Structure

```
index.html              → Shared landing page for all vilaverdeapps apps
MARKETING.html          → Redirect to /snapback/MARKETING.html (backward compat)
assets/styles.css       → Shared CSS (dark theme, Fraunces + Source Sans 3 fonts)
snapback/
  MARKETING.html        → Snap-Back: Space Mining landing page
  PRIVACY.html          → Privacy policy
  SUPPORT.html          → Support & troubleshooting
patter/
  MARKETING.html        → Patter landing page
  PRIVACY.html          → Privacy policy (serverless/BYOK model)
  SUPPORT.html          → Support & troubleshooting
robots.txt              → Search engine indexing rules
sitemap.xml             → SEO sitemap
app-ads.txt             → AdMob app verification
```

## Local Preview

No dependencies needed — macOS ships with Python 3.

```bash
python3 -m http.server        # http://localhost:8000
python3 -m http.server 4000   # custom port
```

Open the URL in a browser to verify all pages and links render correctly. Stop with `Ctrl+C`.

## Deployment

This site is served by [GitHub Pages](https://pages.github.com/) from the `main` branch. Push to deploy — no build step required.

## Rules

- Plain HTML/CSS only. No frameworks, no build tools.
- Shared styles live in `assets/styles.css`. Each page links it directly.
- Update `sitemap.xml` when adding or removing pages.
- Use `git mv` for file renames to preserve git history.
