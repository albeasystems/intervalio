import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// Static multi-page build: the site is two language folders (/en and /es), each with
// home, privacy, terms and support, plus a root page that redirects by browser language.
// No client router, so it can be hosted on any static host.
const pages = ['index', 'privacy', 'terms', 'support']
const input = { root: resolve(import.meta.dirname, 'index.html') }
for (const lang of ['en', 'es']) {
  for (const page of pages) input[`${lang}-${page}`] = resolve(import.meta.dirname, lang, `${page}.html`)
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: { rollupOptions: { input } },
})
