import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useInView } from '../hooks/useInView'
import profilePhoto from '../assets/yo.jpeg'

const tags = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'REST APIs', 'AWS', 'Python', 'Unity', 'SQL', 'C#', 'HTML', 'CSS']

function Counter({ target, suffix, trigger }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    const dur = 1400
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min(1, (now - start) / dur)
      const eased = 1 - Math.pow(1 - t, 3)
      setCount(Math.round(target * eased))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [trigger, target])
  return <>{count}{suffix}</>
}

export default function About() {
  const { lang } = useLang()
  const t = translations[lang].about
  const [headRef, headIn] = useInView(0.1)
  const [gridRef, gridIn] = useInView(0.1)
  const [statsRef, statsIn] = useInView(0.15)

  const statsData = {
    en: [
      { target: 2,   suffix: '+', label: 'Years exp.',    cls: 'about__stat-num--blue' },
      { target: 10,  suffix: '+', label: 'Projects done', cls: '' },
      { target: 12,  suffix: '',  label: 'Technologies',  cls: '' },
      { target: 100, suffix: '%', label: 'Passion',       cls: 'about__stat-num--red' },
    ],
    es: [
      { target: 2,   suffix: '+', label: 'Años exp.',     cls: 'about__stat-num--blue' },
      { target: 10,  suffix: '+', label: 'Proyectos',     cls: '' },
      { target: 12,  suffix: '',  label: 'Tecnologías',   cls: '' },
      { target: 100, suffix: '%', label: 'Pasión',        cls: 'about__stat-num--red' },
    ],
  }

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="eyebrow">01 · {t.eyebrow}</div>
        <h2 className={`reveal ${headIn ? 'in' : ''}`} ref={headRef}>
          {t.title} <em>{t.title_em}</em>
        </h2>

        <div className={`about__grid reveal ${gridIn ? 'in' : ''}`} ref={gridRef}>
          {/* LEFT — photo + badge */}
          <div className="about__photo-col">
            <div className="about__photo-wrap">
              <img
                src={profilePhoto}
                alt="Juan Camilo Alaguna"
                width="480" height="600"
                loading="lazy"
              />
              <div className="about__photo-badge mono">
                <span className="nav-ping" />
                {t.available}
              </div>
              <div className="about__photo-tag">
                <span className="about__photo-name">IM1JUAN</span>
                <span className="about__photo-role mono">Multimedia Engineer</span>
              </div>
            </div>
          </div>

          {/* RIGHT — bio + stats + tags */}
          <div className="about__content">
            <p className="about__text">{t.p1}</p>
            <p className="about__text">{t.p2}</p>

            <div ref={statsRef} className={`about__stats reveal ${statsIn ? 'in' : ''}`}>
              {statsData[lang].map((s, i) => (
                <div key={i} className="about__stat">
                  <div className={`about__stat-num ${s.cls}`}>
                    <Counter target={s.target} suffix={s.suffix} trigger={statsIn} />
                  </div>
                  <div className="about__stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="about__tags">
              {tags.map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
