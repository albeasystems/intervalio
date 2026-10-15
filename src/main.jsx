import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './styles.css'
import { LangProvider } from './i18n'
import { Footer, Nav } from './shared'
import Home from './Home'
import { Privacy, Support, Terms } from './Legal'

const pages = { home: Home, privacy: Privacy, terms: Terms, support: Support }
const Page = pages[document.body.dataset.page] || Home

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider>
      <Nav />
      <Page />
      <Footer />
    </LangProvider>
  </StrictMode>,
)
