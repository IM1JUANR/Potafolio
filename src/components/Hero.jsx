import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useTypewriter } from '../hooks/useTypewriter'
import { useScramble } from '../hooks/useScramble'

function useClock() {
  const fmt = () => {
    const d = new Date()
    return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`
  }
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Hero() {
  const { lang } = useLang()
  const t = translations[lang].hero
  const time = useClock()
  const glowBlue = useRef(null)
  const glowRed  = useRef(null)
  const [masked, setMasked] = useState(false)

  const roles = {
    en: ['Multimedia Engineer', 'Web Developer', 'Creative Coder', 'UI Craftsman'],
    es: ['Ingeniero Multimedia', 'Desarrollador Web', 'Programador Creativo', 'UI Craftsman'],
  }
  const typedRole = useTypewriter(roles[lang])
  const scrambledFirst = useScramble('Juan', true, 300)
  const scrambledLast  = useScramble('Camilo', true, 550)

  useEffect(() => {
    const id = setTimeout(() => setMasked(true), 80)
    return () => clearTimeout(id)
  }, [])

  useEffect(() => {
    let raf = null
    let lastY = 0
    const onScroll = () => {
      lastY = window.scrollY
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = lastY
        if (glowBlue.current) glowBlue.current.style.transform = `translate3d(0,${y * 0.15}px,0)`
        if (glowRed.current)  glowRed.current.style.transform  = `translate3d(0,${y * 0.10}px,0)`
        raf = null
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scroll = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero__grid-bg" aria-hidden="true" />
      <div ref={glowBlue} className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div ref={glowRed}  className="hero__glow hero__glow--red"  aria-hidden="true" />

      {/* Top bar */}
      <div className="hero__top">
        <div className="hero__tag">
          <span className="hero__tag-muted">01 / 05</span>
          <span className="hero__tag-line" />
          <span>Portfolio · v2026</span>
        </div>
        <div className="hero__tag">
          <span>Suesca, Colombia</span>
          <span className="hero__tag-line" />
          <span className="hero__tag-muted mono">{time}</span>
        </div>
      </div>

      {/* Main heading */}
      <div className="hero__main">
        <h1>
          <span className={`mask-line ${masked ? 'in' : ''}`}>
            <span className="d1">{scrambledFirst || 'Juan'}</span>
          </span>
          <span className={`mask-line ${masked ? 'in' : ''}`}>
            <span className="hero__stroke d2">{scrambledLast || 'Camilo'}</span>
            <span className="hero__dot d3">.</span>
          </span>
        </h1>

        <div className="hero__sub">
          <p className="hero__role">
            {t.description}{' '}
            <b>{typedRole}<span className="role__cursor">|</span></b>
          </p>
          <div className="hero__meta-block mono">
            <span>ROLE — <strong>{t.meta_role}</strong></span>
            <span>STACK — <strong>React · Node · MongoDB</strong></span>
            <span>SINCE — <strong>2020</strong></span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="scroll-cue" onClick={e => scroll(e, '#about')} aria-label="Scroll down">
        <div className="scroll-cue__bar" />
        <span className="mono">{t.scroll}</span>
      </a>
    </section>
  )
}
