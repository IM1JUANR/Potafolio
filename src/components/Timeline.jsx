import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { useInView } from '../hooks/useInView'

export default function Timeline() {
  const { lang } = useLang()
  const t = translations[lang].timeline
  const [ref, inView] = useInView(0.1)

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="eyebrow">04 · {t.eyebrow}</div>
        <h2 className={`reveal ${inView ? 'in' : ''}`} ref={ref}>
          {t.title} <em>{t.title_em}</em>
        </h2>
        <div className={`timeline reveal-stagger ${inView ? 'in' : ''}`}>
          {t.rows.map((row, i) => (
            <div key={i} className="t-row">
              <div className="t-row__year mono">{row.year}</div>
              <div className="t-row__where">{row.where}</div>
              <div className="t-row__what">{row.what}</div>
              <div className="t-row__arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
