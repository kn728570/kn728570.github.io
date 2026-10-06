# AEGIS Public Gateway

Minimal static GitHub Pages site for:

`https://aegisautomated.solutions`

The page intentionally contains only:

- the AEGIS crest / identity
- a Member Access box
- a disabled **Coming online** control for the future member console

There is no backend, authentication logic, telemetry, API integration, or JavaScript.

## Why the logo is embedded

The large AEGIS crest is embedded directly in `index.html` as inline SVG. It does not depend on an image path, so the primary visual identity remains available even if GitHub Pages is being viewed before the custom domain is fully configured.

The small favicon and Apple touch icon remain in `assets/`.

## Files

- `index.html` — minimal public gateway
- `styles.css` — responsive AEGIS styling
- `404.html` — minimal error page
- `CNAME` — `aegisautomated.solutions`
- `.nojekyll` — disables Jekyll processing
- `robots.txt`
- `sitemap.xml`
- `assets/favicon.svg`
- `assets/apple-touch-icon.png`

## GitHub Pages deployment

1. Create an empty repository.
2. Upload **the contents of this folder** to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and the root folder `/`.
6. Keep the included `CNAME` file.

The repository root should directly contain `index.html`, `styles.css`, `CNAME`, and the `assets` folder.

## Member Access

Member Access is currently intentionally disabled.

When Cloudflare Access and `console.aasc.one` are ready, replace the disabled control with a link to:

`https://console.aasc.one`

Authentication should remain entirely outside this static site.
