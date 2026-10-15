import { createContext, useContext } from 'react'

// Copy only states what the app actually does (checked against the Swift source).
// Voice cues below are the real spoken strings: voice.work / rest / halfway / last_round / complete.
const copy = {
  en: {
    nav: { features: 'How it works', presets: 'Presets', faq: 'FAQ', cta: 'Get the free app', ctaShort: 'Get the app', other: 'Español', otherLabel: 'Ver la web en español' },
    hero: {
      title: 'Intervals you can hear, not watch.',
      sub: 'Tabata, HIIT and Pomodoro timers with voice cues that keep going when your screen is locked. Free on iPhone.',
      cta: 'Get the free app',
      more: 'Hear it on a locked phone',
      alt1: 'Intervalio during a work phase: an orange ring, 00:20 on the clock, round 2 of 8.',
      alt2: 'Intervalio during a rest phase: a teal ring, 00:03, round 5 of 8, with the next phase, Work, shown below.',
    },
    lock: {
      title: 'Lock the phone. Keep training.',
      body: 'A voice calls every phase, even with the screen locked or the phone on silent, and it mixes with your music. Pause from the lock screen.',
      cues: ['Work', 'Rest', 'Halfway', 'Last round', 'Workout complete'],
      cuesLabel: 'What the voice says during a session',
      note: 'Alert sounds, voice cues and vibration each have their own switch.',
      alt: 'Live Activity on the iPhone lock screen: Work, round 1 of 8, 0:10 left, Classic Tabata, with a pause button.',
    },
    phases: {
      title: 'Every phase has its own color.',
      items: [
        { name: 'Get ready', text: 'A big countdown before the first round, so you can get in position.', alt: 'Get ready phase: a large number 2 inside an amber ring.' },
        { name: 'Work', text: 'The ring drains while you push. The next phase is always shown below it.', alt: 'Work phase: orange ring, 00:20, next phase Rest.' },
        { name: 'Rest', text: 'Cool tones say breathe. The round dots show how far you are.', alt: 'Rest phase: teal ring, 00:03, round 5 of 8.' },
      ],
    },
    presets: {
      title: 'Your sessions, already built.',
      list: 'Tabata, HIIT, EMOM, AMRAP, CrossFit, boxing, running and yoga come built in, plus Pomodoro and deep work blocks for focus.',
      tabata: { name: 'Classic Tabata', rule: '20s on, 10s off', rounds: '8 rounds' },
      pomo: { name: 'Pomodoro', rest: '5:00 rest', rounds: '4 rounds' },
      pin: 'Pin the timers you use every day. Share any of them with a friend.',
      alt: 'The Intervals tab listing CrossFit, Tabata, HIIT, Productivity, Boxing, Running, EMOM, AMRAP and Yoga.',
    },
    build: {
      title: 'Build the one you actually train.',
      body: 'Set work, rest and rounds, or go infinite. Add a countdown, name it and save it to your list.',
      alt: 'The New interval screen with a name field, activity types, and work and rest pickers.',
    },
    price: {
      title: 'Free, and here is the catch.',
      rows: [
        { tag: 'Free', h: 'Free with ads', p: 'The full timer, every preset and every sound. A banner, and an occasional ad after a session.' },
        { tag: '1 hour', h: 'One hour ad-free', p: 'Watch a short video and get an hour with no ads.' },
        { tag: 'Once', h: 'Ad-free for good', p: 'One purchase, once. No subscription.' },
      ],
    },
    faq: {
      title: 'Before you download.',
      items: [
        { q: 'Does it keep running with the screen locked?', a: 'Yes. Sound and voice cues keep playing with the screen locked or the app in the background. A Live Activity on the lock screen shows the clock and a pause button.' },
        { q: 'Does it work offline?', a: 'Yes. Every timer works without a connection. The internet is only used to load ads.' },
        { q: 'How do I remove ads?', a: 'Open Settings and tap Remove ads. It is a one-time purchase, not a subscription. You can also watch a video for one hour without ads.' },
        { q: 'Which languages does the app speak?', a: 'English, Spanish, French, German, Italian, Brazilian Portuguese, Polish, Czech, Arabic, Hindi, Japanese and Simplified Chinese.' },
        { q: 'Can I make my own timers?', a: 'Yes. Create a timer with a duration, or build a custom interval with work, rest and rounds. Pin the ones you use most.' },
        { q: 'What data does it collect?', a: 'Your timers stay on your device. Ads come from third-party networks, and you choose about tracking in the iOS prompt.', link: 'Read the privacy policy' },
      ],
    },
    final: { title: 'Start your next interval.', cta: 'Get the free app' },
    footer: {
      privacy: 'Privacy', terms: 'Terms', support: 'Support', contact: 'Contact',
      legal: 'Intervalio is not affiliated with or endorsed by Apple Inc. iPhone and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.',
      rights: 'Albea Systems. All rights reserved.',
    },
  },
  es: {
    nav: { features: 'Cómo funciona', presets: 'Sesiones', faq: 'Preguntas', cta: 'Consigue la app gratis', ctaShort: 'Obtener app', other: 'English', otherLabel: 'View the site in English' },
    hero: {
      title: 'Intervalos que se oyen, no que se miran.',
      sub: 'Temporizadores Tabata, HIIT y Pomodoro con avisos de voz que siguen sonando con la pantalla bloqueada. Gratis en iPhone.',
      cta: 'Consigue la app gratis',
      more: 'Escúchalo con el móvil bloqueado',
      alt1: 'Intervalio en fase de trabajo: anillo naranja, 00:15 en el reloj, ronda 1 de 8.',
      alt2: 'Intervalio en fase de descanso: anillo turquesa, 00:05 y, debajo, la siguiente fase: Trabaja.',
    },
    lock: {
      title: 'Bloquea el móvil. Sigue entrenando.',
      body: 'Una voz canta cada fase, incluso con la pantalla bloqueada o el móvil en silencio, y se mezcla con tu música. Pausa desde la pantalla de bloqueo.',
      cues: ['Trabajo', 'Descanso', 'Mitad', 'Última ronda', 'Entrenamiento completado'],
      cuesLabel: 'Lo que dice la voz durante una sesión',
      note: 'Sonidos de alerta, voz y vibración tienen cada uno su propio interruptor.',
      alt: 'Live Activity en la pantalla de bloqueo del iPhone: Trabaja, ronda 2 de 8, quedan 0:08, Tabata clásico, con botón de pausa.',
    },
    phases: {
      title: 'Cada fase tiene su color.',
      items: [
        { name: 'Prepárate', text: 'Una cuenta atrás grande antes de la primera ronda para que te coloques.', alt: 'Fase de preparación: un número 2 grande dentro de un anillo ámbar.' },
        { name: 'Trabajo', text: 'El anillo se vacía mientras das el máximo. Debajo siempre ves la siguiente fase.', alt: 'Fase de trabajo: anillo naranja, 00:15, siguiente fase Descansa.' },
        { name: 'Descanso', text: 'Los tonos fríos dicen respira. Los puntos de ronda marcan cuánto llevas.', alt: 'Fase de descanso: anillo turquesa, 00:05, ronda 1 de 8.' },
      ],
    },
    presets: {
      title: 'Tus sesiones, ya preparadas.',
      list: 'Tabata, HIIT, EMOM, AMRAP, CrossFit, boxeo, running y yoga vienen incluidos, además de Pomodoro y bloques de trabajo profundo para concentrarte.',
      tabata: { name: 'Tabata clásico', rule: '20s de trabajo, 10s de descanso', rounds: '8 rondas' },
      pomo: { name: 'Pomodoro', rest: '5:00 de descanso', rounds: '4 rondas' },
      pin: 'Fija los timers que usas cada día. Comparte cualquiera con un amigo.',
      alt: 'La pestaña Intervalos con CrossFit, Tabata, HIIT, Productividad, Boxeo, Running, EMOM, AMRAP y Yoga.',
    },
    build: {
      title: 'Crea el que de verdad entrenas.',
      body: 'Define trabajo, descanso y rondas, o pon rondas infinitas. Añade una cuenta atrás, ponle nombre y guárdalo en tu lista.',
      alt: 'La pantalla Nuevo intervalo con nombre, tipos de actividad y selectores de trabajo y descanso.',
    },
    price: {
      title: 'Gratis, y esta es la letra pequeña.',
      rows: [
        { tag: 'Gratis', h: 'Gratis con anuncios', p: 'El timer completo, todos los presets y todos los sonidos. Un banner y algún anuncio al terminar una sesión.' },
        { tag: '1 hora', h: 'Una hora sin anuncios', p: 'Mira un vídeo corto y tendrás una hora sin anuncios.' },
        { tag: 'Una vez', h: 'Sin anuncios para siempre', p: 'Una compra, una sola vez. Sin suscripción.' },
      ],
    },
    faq: {
      title: 'Antes de descargar.',
      items: [
        { q: '¿Sigue funcionando con la pantalla bloqueada?', a: 'Sí. Los sonidos y la voz siguen sonando con la pantalla bloqueada o la app en segundo plano. Una Live Activity en la pantalla de bloqueo muestra el reloj y un botón de pausa.' },
        { q: '¿Funciona sin conexión?', a: 'Sí. Todos los timers funcionan sin conexión. Internet solo se usa para cargar anuncios.' },
        { q: '¿Cómo quito los anuncios?', a: 'Abre Ajustes y toca Eliminar publicidad. Es una compra única, no una suscripción. También puedes ver un vídeo para tener una hora sin anuncios.' },
        { q: '¿En qué idiomas está la app?', a: 'Inglés, español, francés, alemán, italiano, portugués de Brasil, polaco, checo, árabe, hindi, japonés y chino simplificado.' },
        { q: '¿Puedo crear mis propios timers?', a: 'Sí. Crea un timer con una duración o un intervalo personalizado con trabajo, descanso y rondas. Fija los que más usas.' },
        { q: '¿Qué datos recoge?', a: 'Tus timers se quedan en tu dispositivo. Los anuncios vienen de redes de terceros y tú decides sobre el seguimiento en el aviso de iOS.', link: 'Lee la política de privacidad' },
      ],
    },
    final: { title: 'Empieza tu próximo intervalo.', cta: 'Consigue la app gratis' },
    footer: {
      privacy: 'Privacidad', terms: 'Términos', support: 'Soporte', contact: 'Contacto',
      legal: 'Intervalio no está afiliada ni respaldada por Apple Inc. iPhone y App Store son marcas de Apple Inc., registradas en EE. UU. y otros países.',
      rights: 'Albea Systems. Todos los derechos reservados.',
    },
  },
}

/**
 * Each language is its own static page (/en/ and /es/). The page declares its
 * language, folder depth and name on <html>/<body>, so nothing is guessed at runtime.
 */
function readPage() {
  const lang = document.documentElement.lang === 'es' ? 'es' : 'en'
  const page = document.body.dataset.page || 'home'
  const root = document.body.dataset.root || '../'
  const file = page === 'home' ? 'index.html' : `${page}.html`
  const otherLang = lang === 'en' ? 'es' : 'en'
  return { lang, page, root, otherHref: `${root}${otherLang}/${file}` }
}

const info = typeof document === 'undefined' ? { lang: 'en', page: 'home', root: '../', otherHref: '#' } : readPage()
const value = { ...info, t: copy[info.lang] }
const LangContext = createContext(value)

export function LangProvider({ children }) {
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
