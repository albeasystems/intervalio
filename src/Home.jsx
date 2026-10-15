import { Plus } from '@phosphor-icons/react'
import { motion, useReducedMotion } from 'motion/react'
import { useLang } from './i18n'
import { Phone, StoreButton } from './shared'

const EASE = [0.16, 1, 0.3, 1] // matches --ease-out-expo in styles.css
const MotionPhone = motion.create(Phone)

/** Entrance values: reduced motion keeps a short fade and drops the travel. */
function useEntrance(distance, duration, delay = 0) {
  const reduce = useReducedMotion()
  return {
    initial: { opacity: 0, y: reduce ? 0 : distance },
    transition: { duration: reduce ? 0.2 : duration, ease: EASE, delay: reduce ? 0 : delay },
  }
}

function Hero() {
  const { t } = useLang()
  const restIn = useEntrance(32, 0.9, 0.3)
  const workIn = useEntrance(32, 0.9, 0.15)
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-24 lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-8 size-[780px] max-w-[160vw] rounded-full"
        style={{ background: 'radial-gradient(closest-side, rgb(232 89 60 / 0.13), transparent)' }}
      />
      <div className="wrap relative grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 className="h-display max-w-[14ch] lg:max-w-none">{t.hero.title}</h1>
          <p className="lede mt-6 text-lg">{t.hero.sub}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <StoreButton id="hero-cta">{t.hero.cta}</StoreButton>
            <a href="#how" className="btn btn-ghost">{t.hero.more}</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[460/640] w-full max-w-[460px]">
            <MotionPhone src="05_rest" alt={t.hero.alt2} className="absolute left-0 top-[15%] w-[47%]" {...restIn} animate={{ opacity: 1, y: 0 }} />
            <MotionPhone src="04_work" alt={t.hero.alt1} className="absolute right-0 top-0 w-[56%]" priority {...workIn} animate={{ opacity: 1, y: 0 }} />
          </div>
        </div>
      </div>
    </section>
  )
}

/** The page's thesis, staged: the voice cues in the order they are spoken, then the lock screen. */
function LockScreen() {
  const { t, root, lang } = useLang()
  const reduce = useReducedMotion()
  const list = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.42, delayChildren: 0.1 } } }
  const cue = {
    hidden: { opacity: 0, y: reduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.2 : 0.6, ease: EASE } },
  }
  const cardIn = useEntrance(30, 0.8, reduce ? 0 : t.lock.cues.length * 0.42 + 0.2)
  return (
    <section id="how" className="py-24 md:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="h-section">{t.lock.title}</h2>
          <p className="lede mt-6">{t.lock.body}</p>
          <p className="mt-4 max-w-[46ch] text-sm text-muted">{t.lock.note}</p>
        </div>
        <div className="lg:col-span-7">
          <div className="panel p-7 sm:p-10 md:p-12">
            <motion.ol
              aria-label={t.lock.cuesLabel}
              variants={list}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {t.lock.cues.map((c, i) => (
                <motion.li
                  key={c}
                  variants={cue}
                  className="text-[clamp(1.9rem,4.4vw,3.4rem)] font-semibold leading-[1.12] tracking-[-0.03em]"
                  style={{ color: i === 0 ? 'var(--color-accent)' : 'var(--color-ink)' }}
                >
                  {/* Later cues fade, but never below 4.5:1 against the panel. */}
                  <span style={{ opacity: i === 0 ? 1 : Math.max(0.55, 0.95 - i * 0.1) }}>{c}</span>
                </motion.li>
              ))}
            </motion.ol>
            <motion.img
              src={`${root}shots/${lang}/live-activity.jpg`}
              alt={t.lock.alt}
              width="1119"
              height="282"
              loading="lazy"
              {...cardIn}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              className="mt-10 w-full rounded-[1.75rem] shadow-[0_24px_50px_-25px_rgb(0_0_0/0.9),0_0_0_1px_rgb(255_255_255/0.1)]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const phaseShots = ['09_getready', '04_work', '05_rest']

function Phase({ index, className, children }) {
  const enter = useEntrance(28, 0.7, index * 0.09)
  return (
    <motion.figure
      {...enter}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.figure>
  )
}

function Phases() {
  const { t } = useLang()
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <h2 className="h-section max-w-[18ch]">{t.phases.title}</h2>
        <div className="-mx-5 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-3 md:gap-10 md:overflow-visible md:px-0">
          {t.phases.items.map((p, i) => (
            <Phase
              key={p.name}
              index={i}
              className={`min-w-[68%] snap-center sm:min-w-[44%] md:min-w-0 ${i === 1 ? 'md:mt-16' : ''}`}
            >
              <Phone src={phaseShots[i]} alt={p.alt} className="mx-auto w-full max-w-[270px]" />
              <figcaption className="mx-auto mt-7 max-w-[270px]">
                <h3 className="text-xl tracking-tight">{p.name}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{p.text}</p>
              </figcaption>
            </Phase>
          ))}
        </div>
      </div>
    </section>
  )
}

function Presets() {
  const { t } = useLang()
  const p = t.presets
  return (
    <section id="presets" className="py-24 md:py-32">
      <div className="wrap">
        <h2 className="h-section max-w-[16ch]">{p.title}</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <div
            className="panel relative h-[520px] overflow-hidden md:col-span-5 md:row-span-3 md:h-auto md:min-h-[640px]"
            style={{ background: 'radial-gradient(120% 70% at 50% 100%, rgb(232 89 60 / 0.28), transparent 70%), var(--color-surface)' }}
          >
            <Phone src="02_intervals" alt={p.alt} className="mx-auto mt-10 w-[76%] max-w-[330px]" />
          </div>

          <div className="panel flex items-center p-8 md:col-span-7 md:p-10">
            <p className="max-w-[44ch] text-xl leading-snug tracking-tight md:text-2xl">{p.list}</p>
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-panel bg-accent p-8 text-accent-ink md:col-span-4">
            <p className="text-lg font-semibold">{p.tabata.name}</p>
            <div>
              <p className="tnum font-mono text-6xl font-medium tracking-tight">3:50</p>
              <p className="mt-3 font-medium">{p.tabata.rule}, {p.tabata.rounds}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 rounded-panel bg-surface-2 p-8 md:col-span-3">
            <p className="text-lg font-semibold">{p.pomo.name}</p>
            <div>
              <p className="tnum font-mono text-5xl font-medium tracking-tight">25:00</p>
              <p className="mt-3 text-sm text-muted">{p.pomo.rest}, {p.pomo.rounds}</p>
            </div>
          </div>

          <div className="flex items-center rounded-panel border border-line p-8 md:col-span-7 md:p-10">
            <p className="max-w-[40ch] text-lg text-muted">{p.pin}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Builder() {
  const { t } = useLang()
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="wrap grid items-center gap-14 lg:grid-cols-12">
        <div className="mx-auto w-full max-w-[330px] lg:col-span-5 lg:max-w-[360px]">
          <Phone src="07_builder" alt={t.build.alt} />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <h2 className="h-section">{t.build.title}</h2>
          <p className="lede mt-6">{t.build.body}</p>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const { t } = useLang()
  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12">
        <h2 className="h-section lg:col-span-5">{t.price.title}</h2>
        <ul className="lg:col-span-7">
          {t.price.rows.map((r, i) => (
            <li
              key={r.h}
              className={`grid gap-3 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8 ${i > 0 ? 'border-t border-line' : 'pt-0'}`}
            >
              <p aria-hidden="true" className="text-[clamp(2rem,3.6vw,2.9rem)] font-semibold leading-none tracking-[-0.03em]">{r.tag}</p>
              <div>
                <h3 className="text-xl tracking-tight">{r.h}</h3>
                <p className="mt-2 max-w-[46ch] text-muted">{r.p}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Faq() {
  const { t, root, lang } = useLang()
  return (
    <section id="faq" className="border-t border-line py-24 md:py-32">
      <div className="wrap">
        <h2 className="h-section">{t.faq.title}</h2>
        <div className="mt-12 max-w-3xl">
          {t.faq.items.map((it) => (
            <details key={it.q} className="group border-b border-line first:border-t">
              <summary className="flex items-center justify-between gap-6 py-6 text-lg font-medium tracking-tight">
                {it.q}
                <Plus size={22} className="plus shrink-0 text-muted" aria-hidden="true" />
              </summary>
              <p className="max-w-[60ch] pb-7 text-muted">
                {it.a}
                {it.link && (
                  <>
                    {' '}
                    <a href={`${root}${lang}/privacy.html`} className="text-ink underline decoration-accent decoration-2">{it.link}</a>.
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  const { t, root } = useLang()
  return (
    <section className="pb-24 md:pb-32">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-panel bg-accent px-7 py-14 text-accent-ink md:px-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="h-section max-w-[14ch]">{t.final.title}</h2>
              <div className="mt-9">
                <StoreButton variant="dark">{t.final.cta}</StoreButton>
              </div>
            </div>
            <img
              src={`${root}icon.png`}
              alt=""
              width="208"
              height="208"
              loading="lazy"
              className="size-32 rounded-[22%] shadow-[0_30px_50px_-20px_rgb(22_13_10/0.6)] md:size-52"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <LockScreen />
      <Phases />
      <Presets />
      <Builder />
      <Pricing />
      <Faq />
      <FinalCta />
    </main>
  )
}
