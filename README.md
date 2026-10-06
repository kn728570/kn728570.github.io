# Aegis Automated Solutions Consortium — Public Site

This folder is the static public website for:

`https://aegisautomated.solutions`

It is intentionally separate from AASC operational systems.

## Domain roles

- `aegisautomated.solutions` — public identity, research, projects, methodology, and institutional information.
- `aasc.one` — short operational namespace / navigation.
- `console.aasc.one` — future member console behind a separate Cloudflare Access policy.

The current Member Access controls are deliberately disabled and marked **Coming online**. There is no authentication code in this repository.

## Contents

- `index.html` — public one-page site
- `styles.css` — responsive AEGIS visual system
- `404.html` — GitHub Pages error page
- `CNAME` — GitHub Pages custom domain
- `.nojekyll` — prevents Jekyll processing
- `site.webmanifest` — PWA/site metadata
- `robots.txt` — search crawler policy
- `script.js` — tiny local-only mobile navigation helper; no network calls
- `assets/aegis-crest.svg` — detailed AEGIS crest
- `assets/favicon.svg` — simplified Lambda shield
- `assets/apple-touch-icon.png` — touch/app icon

The site has no backend or client-side API integration. The only JavaScript closes the mobile navigation after selecting an in-page section and handles Escape-key dismissal.

## GitHub Pages deployment

1. Create an empty repository for the public site.
2. Upload **the contents of this folder** to the repository root.
3. In GitHub: **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select the branch containing these files, normally `main`, and the root folder `/`.
6. GitHub Pages will detect the `CNAME` file and associate the site with `aegisautomated.solutions`.

Do not upload the parent `PublicSites` directory. The repository root should contain `index.html`, `CNAME`, `styles.css`, etc.

## DNS / Cloudflare

When the DNS zone is moved to Cloudflare, configure the GitHub Pages records only after the zone is authoritative and DNSSEC state has been handled safely.

Keep the public Pages hostname separate from future operational hosts such as:

- `console.aasc.one`
- `admin.aasc.one`

Those operational hosts should be separate Cloudflare Access applications/policies rather than authentication implemented in this static site.

Do not add a wildcard DNS record that forwards undefined AASC subdomains to an unrelated parking or hosting service.

## Member Access

When `console.aasc.one` is ready:

1. Replace the disabled Member Access controls with links to `https://console.aasc.one`.
2. Keep authentication and authorization entirely in Cloudflare Access / the operational backend.
3. The public site should remain static and should never contain credentials, API keys, internal telemetry, or evidence-system data.

## Local preview

From this directory:

```powershell
python -m http.server 8790
```

Then open:

`http://127.0.0.1:8790/`

## Brand

Public palette:

- Deep Navy — `#0A1322`
- Cobalt Blue — `#3B82F6`
- Royal Purple — `#8B5CF6`
- Teal Green — `#10B981`
- Cyan — `#22D3EE`
- Amber Gold — `#F59E0B` (tertiary accent)
- Slate — `#97A8BA`
- Off White — `#F8FAFC`

Slogans and broader institutional copy are intentionally deferred.
