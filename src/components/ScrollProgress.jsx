import { useState, useEffect } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      setPct((scrollTop / (scrollHeight - clientHeight)) * 100)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return <div className="scroll-progress" style={{ width: `${pct}%` }} aria-hidden="true" />
}
