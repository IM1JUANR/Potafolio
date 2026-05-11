import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useInView } from '../hooks/useInView'

const contactInfo = [
  { icon: 'fas fa-envelope', value: 'j.alagunarincon@gmail.com', href: 'mailto:j.alagunarincon@gmail.com', labelKey: 'email_label' },
  { icon: 'fas fa-phone',    value: '+57 302 869 4060',          href: 'tel:+573028694060',                labelKey: 'phone_label' },
  { icon: 'fas fa-location-dot', value: 'Suesca, Colombia',      href: null,                               labelKey: 'location_label' },
]

export default function Contact() {
  const { lang } = useLang()
  const t = translations[lang].contact
  const [ref, inView] = useInView(0.08)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 3500)
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="container" ref={ref}>
        <div className="eyebrow">05 · {t.eyebrow}</div>

        <h2>
          <span className={`mask-line ${inView ? 'in' : ''}`}>
            <span>{t.heading1}</span>
          </span>
          <span className={`mask-line ${inView ? 'in' : ''}`}>
            <span className="contact-stroke d1">{t.heading2}</span>
          </span>
          <span className={`mask-line ${inView ? 'in' : ''}`}>
            <span className="d2">{t.heading3}<span className="contact-dot">?</span></span>
          </span>
        </h2>

        {/* Info + Form grid */}
        <div className={`contact-body reveal ${inView ? 'in' : ''}`}>
          {/* Left — info */}
          <div className="contact-info">
            <p className="contact-desc">{t.description}</p>

            <div className="contact-items">
              {contactInfo.map(item => {
                const inner = (
                  <>
                    <span className="contact-item__icon"><i className={item.icon} /></span>
                    <div className="contact-item__text">
                      <span className="contact-item__label mono">{t[item.labelKey]}</span>
                      <span className="contact-item__value">{item.value}</span>
                    </div>
                  </>
                )
                return item.href
                  ? <a key={item.labelKey} href={item.href} className="contact-item">{inner}</a>
                  : <div key={item.labelKey} className="contact-item">{inner}</div>
              })}
            </div>

            <div className="contact-socials">
              <a href="https://github.com/IM1JUANR" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
              <a href="https://www.linkedin.com/in/juan-alaguna-1576bb21a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
              <a href="https://x.com/j_alaguna" target="_blank" rel="noopener noreferrer" aria-label="X"><i className="fab fa-x-twitter" /></a>
              <a href="https://www.instagram.com/juanca.rincon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            </div>
          </div>

          {/* Right — form */}
          {sent ? (
            <div className="contact-sent">
              <div className="contact-sent__icon">✓</div>
              <p className="contact-sent__title">{t.sent_title}</p>
              <p className="contact-sent__sub">{t.sent_sub}</p>
            </div>
          ) : (
            <form
              className="contact-form"
              action="https://formspree.io/f/myzejeqd"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="nombre" className="mono">{t.name}</label>
                  <input id="nombre" type="text" name="nombre" placeholder={t.name} required />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="mono">{t.email}</label>
                  <input id="email" type="email" name="email" placeholder={t.email} required />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="asunto" className="mono">{t.subject}</label>
                <input id="asunto" type="text" name="asunto" placeholder={t.subject} required />
              </div>
              <div className="form-field">
                <label htmlFor="mensaje" className="mono">{t.message}</label>
                <textarea id="mensaje" name="mensaje" placeholder={t.message} rows="5" required />
              </div>
              <button type="submit" className="contact-submit" disabled={sending}>
                {sending
                  ? <><i className="fas fa-spinner fa-spin" /> {t.sending}</>
                  : <>{t.send} →</>
                }
              </button>
            </form>
          )}
        </div>

        <div className="contact-links">
          <a href="https://github.com/IM1JUANR" target="_blank" rel="noopener noreferrer">↗ GitHub / IM1JUANR</a>
          <a href="https://www.linkedin.com/in/juan-alaguna-1576bb21a/" target="_blank" rel="noopener noreferrer">↗ LinkedIn / juan-alaguna</a>
          <a href="https://x.com/j_alaguna" target="_blank" rel="noopener noreferrer">↗ X / j_alaguna</a>
          <a href="https://www.instagram.com/juanca.rincon/" target="_blank" rel="noopener noreferrer">↗ Instagram / juanca.rincon</a>
        </div>
      </div>
    </section>
  )
}
