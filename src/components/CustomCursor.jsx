import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [big, setBig] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`
      }
      if (!visible) setVisible(true)
    }

    const onOut = (e) => { if (!e.relatedTarget) setVisible(false) }

    const selectors = 'a, button, .stack-chip, .project-card, .t-row, .contact-cta, .skill-tag, input, textarea'
    let cleanup = []

    const attachHover = () => {
      cleanup.forEach(fn => fn())
      cleanup = []
      document.querySelectorAll(selectors).forEach(el => {
        const enter = () => setBig(true)
        const leave = () => setBig(false)
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
        cleanup.push(() => {
          el.removeEventListener('mouseenter', enter)
          el.removeEventListener('mouseleave', leave)
        })
      })
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseout', onOut)
    attachHover()

    const obs = new MutationObserver(attachHover)
    obs.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseout', onOut)
      cleanup.forEach(fn => fn())
      obs.disconnect()
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <div
      ref={ref}
      className={`cur-dot ${visible ? 'cur-dot--visible' : ''} ${big ? 'cur-dot--big' : ''}`}
      aria-hidden="true"
    />
  )
}
