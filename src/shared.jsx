import { useEffect, useState } from 'react'
import { AppleLogo } from '@phosphor-icons/react'
import { APP_URL, CONTACT_EMAIL, YEAR } from './config'
import { useLang } from './i18n'

/** Real screenshot inside a CSS device frame. Screenshots are per language: shots/<lang>/<name>.jpg */
export function Phone({ src, alt, className = '', priority = false, style, ...rest }) {
  const { root, lang } = useLang()
  return (
    <figure className={`phone ${className}`} style={style} {...rest}>
      <img
        src={`${root}shots/${lang}/${src}.jpg`}
        alt={alt}
        width="828"
        height="1800"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </figure>
  )
}

export function StoreButton({ children, variant = 'primary', className = '', ...rest }) {
  return (
    <a href={APP_URL} className={`btn ${variant === 'dark' ? 'btn-dark' : 'btn-primary'} ${className}`} {...rest}>
      <AppleLogo size={22} weight="fill" aria-hidden="true" />
      {children}
    </a>
  )
}

/**
 * On the home page the nav CTA only appears once the hero CTA has scrolled away,
 * so the first screen carries a single "get the app" action.
 */
function useHeroCtaGone(enabled) {
  const [gone, setGone] = useState(!enabled)
  useEffect(() => {
    if (!enabled) return
    const el = document.getElementById('hero-cta')
    if (!el || !('IntersectionObserver' in window)) { setGone(true); return }
    const io = new IntersectionObserver(([entry]) => setGone(!entry.isIntersecting && entry.boundingClientRect.top < 0), { rootMargin: '-64px 0px 0px 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [enabled])
  return gone
}

export function Nav() {
  const { t, page, root, lang, otherHref } = useLang()
  const home = page === 'home'
  const showCta = useHeroCtaGone(home)
  const homeHref = home ? '#top' : `${root}${lang}/index.html`
  const anchor = (id) => (home ? `#${id}` : `${root}${lang}/index.html#${id}`)
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="wrap flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a href={homeHref} className="flex shrink-0 items-center gap-3 font-semibold tracking-tight">
          <img src={`${root}icon.png`} alt="" width="32" height="32" className="size-8 rounded-[22%]" />
          Intervalio
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          <a href={anchor('how')} className="hidden rounded-full px-3 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink md:block">{t.nav.features}</a>
          <a href={anchor('presets')} className="hidden rounded-full px-3 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink md:block">{t.nav.presets}</a>
          <a href={anchor('faq')} className="hidden rounded-full px-3 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink md:block">{t.nav.faq}</a>
          <a
            href={otherHref}
            hrefLang={lang === 'en' ? 'es' : 'en'}
            lang={lang === 'en' ? 'es' : 'en'}
            aria-label={t.nav.otherLabel}
            className="hidden rounded-full px-3 py-2 text-[0.9375rem] text-muted transition-colors hover:text-ink sm:block"
          >
            {t.nav.other}
          </a>
          <StoreButton
            className={`btn-sm !gap-2 transition-[opacity,transform] duration-300 ${showCta ? '' : 'pointer-events-none translate-y-1 opacity-0'}`}
            aria-hidden={!showCta}
            tabIndex={showCta ? 0 : -1}
          >
            <span className="max-sm:hidden">{t.nav.cta}</span>
            <span className="sm:hidden">{t.nav.ctaShort}</span>
          </StoreButton>
        </div>
      </nav>
    </header>
  )
}

export function Footer() {
  const { t, page, root, lang, otherHref } = useLang()
  const links = [
    { href: `${root}${lang}/privacy.html`, label: t.footer.privacy },
    { href: `${root}${lang}/terms.html`, label: t.footer.terms },
    { href: `${root}${lang}/support.html`, label: t.footer.support },
    { href: `mailto:${CONTACT_EMAIL}`, label: t.footer.contact },
  ]
  return (
    <footer className="border-t border-line">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-start">
        <div className="max-w-xl">
          <a href={page === 'home' ? '#top' : `${root}${lang}/index.html`} className="flex items-center gap-3 font-semibold tracking-tight">
            <img src={`${root}icon.png`} alt="" width="36" height="36" className="size-9 rounded-[22%]" />
            Intervalio
          </a>
          <p className="mt-5 text-sm leading-relaxed text-muted">{t.footer.legal}</p>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-3 text-[0.9375rem]">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-muted transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
          <li>
            <a href={otherHref} hrefLang={lang === 'en' ? 'es' : 'en'} lang={lang === 'en' ? 'es' : 'en'} aria-label={t.nav.otherLabel} className="text-ink underline decoration-accent decoration-2 underline-offset-4">
              {t.nav.other}
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted md:col-span-2">&copy; {YEAR} {t.footer.rights}</p>
      </div>
    </footer>
  )
}
