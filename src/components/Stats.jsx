import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { useInView } from '../hooks/useInView'

function Counter({ target, suffix, trigger }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const duration = 1800
    const steps = 60
    const increment = target / steps
    const interval = duration / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, interval)
    return () => clearInterval(timer)
  }, [trigger, target])

  return (
    <span className="stat__num">
      {count}{suffix}
    </span>
  )
}

const statsData = {
  en: [
    { target: 2, suffix: '+', label: 'Years of Experience', icon: '⚡' },
    { target: 10, suffix: '+', label: 'Projects Completed', icon: '🚀' },
    { target: 11, suffix: '', label: 'Technologies', icon: '🛠' },
    { target: 100, suffix: '%', label: 'Passion for Code', icon: '🔥' },
  ],
  es: [
    { target: 2, suffix: '+', label: 'Años de Experiencia', icon: '⚡' },
    { target: 10, suffix: '+', label: 'Proyectos Completados', icon: '🚀' },
    { target: 11, suffix: '', label: 'Tecnologías', icon: '🛠' },
    { target: 100, suffix: '%', label: 'Pasión por el Código', icon: '🔥' },
  ],
}

export default function Stats() {
  const { lang } = useLang()
  const [ref, inView] = useInView(0.2)

  return (
    <div ref={ref} className={`stats ${inView ? 'stats--visible' : ''}`}>
      {statsData[lang].map((s, i) => (
        <div key={i} className="stat" style={{ '--delay': `${i * 0.1}s` }}>
          <span className="stat__icon">{s.icon}</span>
          <Counter target={s.target} suffix={s.suffix} trigger={inView} />
          <span className="stat__label">{s.label}</span>
        </div>
      ))}
    </div>
  )
}
