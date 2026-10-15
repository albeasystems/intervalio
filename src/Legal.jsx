import { Fragment } from 'react'
import { CONTACT_EMAIL, PUBLISHER } from './config'
import { useLang } from './i18n'

// DRAFT legal copy adapted from the existing Intervalio privacy page and the app's real behavior.
// Have it reviewed before publishing. Each page exists in English and Spanish.
// In strings, "{mail}" becomes the contact email link; "{pub}" the publisher name.

const content = {
  en: {
    updatedLabel: 'Last updated',
    updated: 'October 15, 2026',
    privacy: {
      title: 'Privacy Policy',
      intro: 'Intervalio does not ask for an account and does not collect personal data directly. Your timers stay on your device.',
      mailSubject: 'Intervalio privacy',
      blocks: [
        { id: 'summary', title: 'The short version', body: [{ ul: [
          'We do not collect your name, email, location, health data, contacts or photos.',
          'Timers, presets and settings are stored on your device only.',
          'The free version shows ads from third-party advertising networks, which may collect device identifiers.',
          'You decide about tracking in the iOS prompt, and you can change it any time in iOS Settings.',
          'We never sell your data.',
        ] }] },
        { id: 'collect', title: 'Information we collect', body: [
          'Intervalio is a timer app. {pub} does not collect, store or transmit personal data from the app to its own servers.',
          'The app stores your custom timers, intervals, favorites and preferences locally on your device. Deleting the app removes that data.',
        ] },
        { id: 'ads', title: 'Advertising', body: [
          'The free version of Intervalio displays banner, interstitial and rewarded ads served by third-party advertising networks through an ad mediation service, including Google AdMob. These partners may collect and use:',
          { ul: [
            'Device identifiers, including the Advertising Identifier (IDFA) if you allow tracking',
            'IP address and approximate location derived from it',
            'Device information such as model and OS version',
            'Ad interaction and app usage data related to ads',
          ] },
          'If you are in the European Economic Area, the United Kingdom or Switzerland, the app shows a consent form before ads are requested. You can review your choice later from Privacy options in the app settings.',
          'You can remove ads with a one-time purchase, or get one hour without ads by watching a rewarded video.',
        ] },
        { id: 'att', title: 'App Tracking Transparency', body: [
          "Following Apple's App Tracking Transparency framework, Intervalio asks for your permission before accessing the Advertising Identifier. If you decline, ads are still shown but are not personalized from your activity in other apps and websites.",
          'You can change this at any time in iOS Settings, then Privacy and Security, then Tracking.',
        ] },
        { id: 'purchases', title: 'Purchases', body: ['The Remove ads purchase is processed by Apple. {pub} does not receive your payment details.'] },
        { id: 'device', title: 'Notifications, audio and Live Activities', body: ['Intervalio uses local notifications, audio and voice cues, and a Live Activity to tell you about your timer while the app is in the background or the screen is locked. This happens on your device and no timer data is sent to us.'] },
        { id: 'children', title: 'Children', body: ['Intervalio is suitable for all ages. We do not knowingly collect personal information from children. If you believe a child has provided personal information, write to {mail} and we will delete it.'] },
        { id: 'rights', title: 'Your rights', body: ['Depending on where you live (for example under the GDPR or CCPA), you may have the right to access, correct or delete personal data. Because we do not hold personal data from the app, these rights mostly apply to data held by our advertising partners, whose policies describe how to exercise them. For any request, contact {mail}.'] },
        { id: 'changes', title: 'Changes to this policy', body: ['We may update this policy from time to time. The date at the top shows the latest revision.'] },
        { id: 'contact', title: 'Contact', body: ['{pub}, {mail}.'] },
      ],
    },
    terms: {
      title: 'Terms of Use',
      intro: 'By downloading or using Intervalio you agree to these terms. If you do not agree, please do not use the app.',
      mailSubject: 'Intervalio terms',
      blocks: [
        { id: 'license', title: 'License', body: ['{pub} grants you a personal, non-exclusive, non-transferable, revocable license to use Intervalio on Apple devices you own or control, subject to the Apple Media Services Terms and Conditions.'] },
        { id: 'use', title: 'Acceptable use', body: [{ ul: [
          'Do not copy, modify, reverse engineer or resell the app.',
          'Do not use the app in a way that breaks the law or interferes with others.',
          'Do not try to bypass ads or the purchase system by technical means.',
        ] }] },
        { id: 'health', title: 'Training and safety', body: [
          'Intervalio is a timer. It does not give medical or training advice. Exercise at your own risk, choose intervals that fit your fitness level, and stop if you feel pain, dizziness or discomfort. Talk to a doctor before starting an intense program.',
          'Do not rely on the app where a missed or delayed alert could cause harm. Device settings, battery, volume, silent mode and system limits can affect alerts.',
        ] },
        { id: 'ads-purchases', title: 'Ads and purchases', body: ["The free version shows ads. You can remove them with a one-time in-app purchase, or get a temporary ad-free period by watching a rewarded video. Purchases are processed by Apple and are subject to Apple's refund policies. Use Restore purchases in Settings if you reinstall the app or change device."] },
        { id: 'ip', title: 'Intellectual property', body: ['The app, its design, name and content belong to {pub} or its licensors. These terms do not transfer any ownership to you.'] },
        { id: 'warranty', title: 'No warranty', body: ['Intervalio is provided as is and as available, without warranties of any kind, to the extent permitted by law. We do not guarantee that it will be uninterrupted or error free.'] },
        { id: 'liability', title: 'Limitation of liability', body: ['To the extent permitted by law, {pub} is not liable for indirect, incidental or consequential damages arising from the use of the app. Nothing in these terms limits liability that cannot be limited by law.'] },
        { id: 'changes', title: 'Changes', body: ['We may update the app and these terms. Continued use after an update means you accept the new terms.'] },
        { id: 'contact', title: 'Contact', body: ['Questions about these terms: {mail}.'] },
      ],
    },
    support: {
      title: 'How can we help?',
      intro: 'We answer every message within 24 to 48 hours.',
      mailSubject: 'Intervalio support',
      blocks: [
        { id: 'contact', title: 'Write to us', body: [
          'For bugs, questions or ideas for new timers, email {mail}. If something is not working, tell us your iPhone model, iOS version and what you were doing.',
          { button: 'Report a bug', subject: 'Intervalio bug report' },
        ] },
      ],
      faqTitle: 'Frequently asked questions',
      faq: [
        { q: 'How do I create a custom timer?', a: 'On the Timers tab, tap the add button, set the duration, name and icon, then save. It appears in your list.' },
        { q: 'How do I create a custom interval?', a: 'Open the Intervals tab, choose a category such as Tabata, then tap Create custom interval. Set work, rest and rounds.' },
        { q: 'How do I remove ads?', a: 'Tap the settings icon on the main screen, then Remove ads. It is a one-time purchase with no subscription.' },
        { q: 'I bought Remove ads but still see ads.', a: 'Open Settings and tap Restore purchases. If it persists, write to us and we will sort it out.' },
        { q: 'Does it work without internet?', a: 'Yes. Timers and intervals work offline. Internet is only used to load ads.' },
        { q: 'Does it keep running in the background?', a: 'Yes. Sound and voice cues keep playing with the screen locked or the app in the background, and a Live Activity on the lock screen shows the clock.' },
        { q: 'How do I delete a timer or interval?', a: 'Tap Edit at the top right of the list, then remove the item you do not want.' },
      ],
    },
  },
  es: {
    updatedLabel: 'Última actualización',
    updated: '15 de octubre de 2026',
    privacy: {
      title: 'Política de privacidad',
      intro: 'Intervalio no pide cuenta y no recoge datos personales directamente. Tus timers se quedan en tu dispositivo.',
      mailSubject: 'Privacidad de Intervalio',
      blocks: [
        { id: 'summary', title: 'La versión corta', body: [{ ul: [
          'No recogemos tu nombre, correo, ubicación, datos de salud, contactos ni fotos.',
          'Los timers, presets y ajustes se guardan solo en tu dispositivo.',
          'La versión gratuita muestra anuncios de redes publicitarias de terceros, que pueden recoger identificadores del dispositivo.',
          'Tú decides sobre el seguimiento en el aviso de iOS y puedes cambiarlo cuando quieras en Ajustes de iOS.',
          'Nunca vendemos tus datos.',
        ] }] },
        { id: 'collect', title: 'Información que recogemos', body: [
          'Intervalio es una app de temporizadores. {pub} no recoge, almacena ni envía datos personales desde la app a sus propios servidores.',
          'La app guarda en local tus timers e intervalos personalizados, favoritos y preferencias. Al borrar la app se eliminan esos datos.',
        ] },
        { id: 'ads', title: 'Publicidad', body: [
          'La versión gratuita de Intervalio muestra anuncios de banner, intersticiales y con recompensa servidos por redes publicitarias de terceros a través de un servicio de mediación, entre ellas Google AdMob. Estos socios pueden recoger y usar:',
          { ul: [
            'Identificadores del dispositivo, incluido el identificador de publicidad (IDFA) si permites el seguimiento',
            'Dirección IP y ubicación aproximada derivada de ella',
            'Información del dispositivo, como modelo y versión del sistema',
            'Interacción con anuncios y datos de uso relacionados con la publicidad',
          ] },
          'Si estás en el Espacio Económico Europeo, el Reino Unido o Suiza, la app muestra un formulario de consentimiento antes de pedir anuncios. Puedes revisar tu elección después en Opciones de privacidad, dentro de los ajustes de la app.',
          'Puedes quitar los anuncios con una compra única, o conseguir una hora sin anuncios viendo un vídeo con recompensa.',
        ] },
        { id: 'att', title: 'Transparencia de seguimiento de apps', body: [
          'Siguiendo el marco App Tracking Transparency de Apple, Intervalio te pide permiso antes de acceder al identificador de publicidad. Si lo rechazas, los anuncios se siguen mostrando pero no se personalizan según tu actividad en otras apps y webs.',
          'Puedes cambiarlo en cualquier momento en Ajustes de iOS, Privacidad y seguridad, Seguimiento.',
        ] },
        { id: 'purchases', title: 'Compras', body: ['La compra para eliminar la publicidad la procesa Apple. {pub} no recibe tus datos de pago.'] },
        { id: 'device', title: 'Notificaciones, audio y Live Activities', body: ['Intervalio usa notificaciones locales, sonidos y voz, y una Live Activity para avisarte de tu timer con la app en segundo plano o la pantalla bloqueada. Todo ocurre en tu dispositivo y no se nos envía ningún dato de tus timers.'] },
        { id: 'children', title: 'Menores', body: ['Intervalio es apta para todas las edades. No recogemos a sabiendas información personal de menores. Si crees que un menor ha facilitado datos personales, escribe a {mail} y los eliminaremos.'] },
        { id: 'rights', title: 'Tus derechos', body: ['Según el lugar donde vivas (por ejemplo bajo el RGPD o la CCPA), puedes tener derecho a acceder, rectificar o suprimir datos personales. Como no guardamos datos personales de la app, estos derechos se aplican sobre todo a los datos que tengan nuestros socios publicitarios, cuyas políticas explican cómo ejercerlos. Para cualquier solicitud, escribe a {mail}.'] },
        { id: 'changes', title: 'Cambios en esta política', body: ['Podemos actualizar esta política de vez en cuando. La fecha de arriba indica la última revisión.'] },
        { id: 'contact', title: 'Contacto', body: ['{pub}, {mail}.'] },
      ],
    },
    terms: {
      title: 'Términos de uso',
      intro: 'Al descargar o usar Intervalio aceptas estos términos. Si no estás de acuerdo, no uses la app.',
      mailSubject: 'Términos de Intervalio',
      blocks: [
        { id: 'license', title: 'Licencia', body: ['{pub} te concede una licencia personal, no exclusiva, intransferible y revocable para usar Intervalio en dispositivos Apple que poseas o controles, sujeta a los Términos y condiciones de Apple Media Services.'] },
        { id: 'use', title: 'Uso aceptable', body: [{ ul: [
          'No copies, modifiques, descompiles ni revendas la app.',
          'No uses la app de forma ilegal ni que moleste a otras personas.',
          'No intentes saltarte los anuncios ni el sistema de compras por medios técnicos.',
        ] }] },
        { id: 'health', title: 'Entrenamiento y seguridad', body: [
          'Intervalio es un temporizador. No ofrece consejo médico ni de entrenamiento. Haz ejercicio bajo tu responsabilidad, elige intervalos adecuados a tu condición física y para si sientes dolor, mareo o malestar. Consulta con un médico antes de empezar un programa intenso.',
          'No dependas de la app donde un aviso perdido o retrasado pueda causar daño. Los ajustes del dispositivo, la batería, el volumen, el modo silencio y los límites del sistema pueden afectar a los avisos.',
        ] },
        { id: 'ads-purchases', title: 'Anuncios y compras', body: ['La versión gratuita muestra anuncios. Puedes quitarlos con una compra única dentro de la app, o conseguir un periodo sin anuncios viendo un vídeo con recompensa. Las compras las procesa Apple y están sujetas a sus políticas de reembolso. Usa Restaurar compras en Ajustes si reinstalas la app o cambias de dispositivo.'] },
        { id: 'ip', title: 'Propiedad intelectual', body: ['La app, su diseño, nombre y contenido pertenecen a {pub} o a sus licenciantes. Estos términos no te transfieren ninguna propiedad.'] },
        { id: 'warranty', title: 'Sin garantía', body: ['Intervalio se ofrece tal cual y según disponibilidad, sin garantías de ningún tipo, en la medida que permita la ley. No garantizamos que funcione sin interrupciones ni errores.'] },
        { id: 'liability', title: 'Limitación de responsabilidad', body: ['En la medida que permita la ley, {pub} no es responsable de daños indirectos, accesorios o consecuentes derivados del uso de la app. Nada de estos términos limita una responsabilidad que la ley no permita limitar.'] },
        { id: 'changes', title: 'Cambios', body: ['Podemos actualizar la app y estos términos. Seguir usándola tras una actualización implica que aceptas los nuevos términos.'] },
        { id: 'contact', title: 'Contacto', body: ['Preguntas sobre estos términos: {mail}.'] },
      ],
    },
    support: {
      title: '¿En qué podemos ayudarte?',
      intro: 'Respondemos a cada mensaje en 24 a 48 horas.',
      mailSubject: 'Soporte de Intervalio',
      blocks: [
        { id: 'contact', title: 'Escríbenos', body: [
          'Para errores, dudas o ideas de nuevos timers, escribe a {mail}. Si algo no funciona, dinos tu modelo de iPhone, la versión de iOS y qué estabas haciendo.',
          { button: 'Informar de un error', subject: 'Error en Intervalio' },
        ] },
      ],
      faqTitle: 'Preguntas frecuentes',
      faq: [
        { q: '¿Cómo creo un timer personalizado?', a: 'En la pestaña Timers, toca el botón de añadir, define duración, nombre e icono y guarda. Aparecerá en tu lista.' },
        { q: '¿Cómo creo un intervalo personalizado?', a: 'Abre la pestaña Intervalos, elige una categoría como Tabata y toca Crear intervalo personalizado. Define trabajo, descanso y rondas.' },
        { q: '¿Cómo quito los anuncios?', a: 'Toca el icono de ajustes en la pantalla principal y luego Eliminar publicidad. Es una compra única, sin suscripción.' },
        { q: 'Compré Eliminar publicidad pero sigo viendo anuncios.', a: 'Abre Ajustes y toca Restaurar compras. Si continúa, escríbenos y lo resolvemos.' },
        { q: '¿Funciona sin internet?', a: 'Sí. Los timers e intervalos funcionan sin conexión. Internet solo se usa para cargar anuncios.' },
        { q: '¿Sigue funcionando en segundo plano?', a: 'Sí. Los sonidos y la voz siguen sonando con la pantalla bloqueada o la app en segundo plano, y una Live Activity en la pantalla de bloqueo muestra el reloj.' },
        { q: '¿Cómo borro un timer o intervalo?', a: 'Toca Editar arriba a la derecha de la lista y elimina el elemento que no quieras.' },
      ],
    },
  },
}

const mailHref = (subject) => `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

/** Replaces {mail} and {pub} tokens inside a string. */
function Rich({ text, subject }) {
  return text.split(/(\{mail\}|\{pub\})/).map((part, i) => {
    if (part === '{mail}') return <a key={i} href={mailHref(subject)}>{CONTACT_EMAIL}</a>
    if (part === '{pub}') return <Fragment key={i}>{PUBLISHER}</Fragment>
    return <Fragment key={i}>{part}</Fragment>
  })
}

function Block({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl tracking-tight">{title}</h2>
      <div className="mt-4 space-y-4 text-muted [&_a]:text-ink [&_a]:underline [&_a]:decoration-accent [&_a]:decoration-2 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  )
}

function BlockBody({ body, subject }) {
  return body.map((item, i) => {
    if (typeof item === 'string') return <p key={i}><Rich text={item} subject={subject} /></p>
    if (item.ul) return <ul key={i}>{item.ul.map((li) => <li key={li}>{li}</li>)}</ul>
    if (item.button) {
      return (
        <p key={i}>
          <a href={mailHref(item.subject)} className="btn btn-primary !text-accent-ink !no-underline">{item.button}</a>
        </p>
      )
    }
    return null
  })
}

function LegalPage({ kind }) {
  const { lang } = useLang()
  const c = content[lang]
  const d = c[kind]
  return (
    <main className="pb-24 pt-32 md:pt-40">
      <div className="wrap">
        <div className="max-w-2xl">
          <h1 className="h-section">{d.title}</h1>
          {kind !== 'support' && <p className="mt-4 text-sm text-muted">{c.updatedLabel}: {c.updated}</p>}
          <p className="lede mt-6 !max-w-[56ch]">{d.intro}</p>
        </div>
        <div className="mt-14 max-w-2xl space-y-12">
          {d.blocks.map((b) => (
            <Block key={b.id} id={b.id} title={b.title}>
              <BlockBody body={b.body} subject={d.mailSubject} />
            </Block>
          ))}
          {d.faq && (
            <Block id="faq" title={d.faqTitle}>
              <div className="!mt-6 text-ink">
                {d.faq.map((it) => (
                  <details key={it.q} className="border-b border-line first:border-t">
                    <summary className="flex items-center justify-between gap-6 py-5 text-lg font-medium tracking-tight">
                      {it.q}
                      <span className="plus shrink-0 text-2xl leading-none text-muted" aria-hidden="true">+</span>
                    </summary>
                    <p className="pb-6 text-muted">{it.a}</p>
                  </details>
                ))}
              </div>
            </Block>
          )}
        </div>
      </div>
    </main>
  )
}

export const Privacy = () => <LegalPage kind="privacy" />
export const Terms = () => <LegalPage kind="terms" />
export const Support = () => <LegalPage kind="support" />
