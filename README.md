# Intervalio web

Static landing for the iOS app, in two languages: `/en/` and `/es/` (home, privacy, terms, support each).
`/` redirects by browser language. Stack: Vite + React + Tailwind v4, Geist fonts, Motion.

```bash
cd web
npm install
npm run dev      # http://localhost:5173/en/  and  /es/
npm run build    # output in web/dist, ready for any static host
```

Deploy `web/dist` as the site root (GitHub Pages, Netlify, Cloudflare Pages, S3...). All paths are relative.

## Where things live

- `src/i18n.jsx`: all landing copy, English and Spanish. Edit both when changing text.
- `src/Legal.jsx`: privacy, terms and support text, English and Spanish. **Draft, have it reviewed.**
- `src/Home.jsx`: the sections. `src/shared.jsx`: nav, footer, phone frame.
- `src/config.js`: App Store URL, contact email, publisher.
- `public/shots/{en,es}/`: real simulator screenshots of the app, one set per language.
  Re-take them when the UI changes (the app was run with the ad-free window active so no ads appear).
- Page language is declared in each HTML file (`<html lang>`, `data-page`, `data-root`).

## Before publishing

- Replace the in-app Settings links (`SettingsView.swift`) if the privacy and support pages move off
  `albdimanuel-source.github.io/intervalio-privacy`.
- Add absolute `hreflang` alternates and an `og:image` once the final domain is known.
- Review the legal text. The old privacy page mentions only Google AdMob; the app now mediates several ad networks.
