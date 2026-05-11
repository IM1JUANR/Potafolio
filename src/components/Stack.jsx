import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useInView } from '../hooks/useInView'

const chips = [
  { name: 'Node.js',     cat: 'Runtime' },
  { name: 'React',       cat: 'Frontend' },
  { name: 'JavaScript',  cat: 'Language' },
  { name: 'MongoDB',     cat: 'NoSQL' },
  { name: 'REST APIs',   cat: 'Architecture' },
  { name: 'AWS',         cat: 'Cloud' },
  { name: 'Python',      cat: 'Language' },
  { name: 'C#',          cat: 'Language' },
  { name: 'SQL',         cat: 'RDBMS' },
  { name: 'Unity',       cat: 'Engine' },
  { name: 'HTML',        cat: 'Frontend' },
  { name: 'CSS',         cat: 'Frontend' },
]

function Chip({ chip, index }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%')
    el.style.setProperty('--my', ((e.clientY - r.top)  / r.height * 100) + '%')
  }

  return (
    <div ref={ref} className="stack-chip" onMouseMove={onMove}>
      <div className="stack-chip__num mono">/ {String(index + 1).padStart(2, '0')}</div>
      <div>
        <div className="stack-chip__name">{chip.name}</div>
        <div className="stack-chip__cat">{chip.cat}</div>
      </div>
    </div>
  )
}

export default function Stack() {
  const { lang } = useLang()
  const t = translations[lang].stack
  const [ref, inView] = useInView(0.1)

  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="eyebrow">02 · {t.eyebrow}</div>
        <h2 className={`reveal ${inView ? 'in' : ''}`} ref={ref}>
          {t.title} <em>{t.title_em}</em>
        </h2>
        <div className={`stack-grid reveal-stagger ${inView ? 'in' : ''}`}>
          {chips.map((chip, i) => <Chip key={chip.name} chip={chip} index={i} />)}
        </div>
      </div>
    </section>
  )
}
