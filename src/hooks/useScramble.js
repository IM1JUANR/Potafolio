import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'

export function useScramble(text, trigger = true, delay = 0) {
  const [display, setDisplay] = useState('')
  const frame = useRef(0)
  const raf = useRef(null)

  useEffect(() => {
    if (!trigger) return
    const timeout = setTimeout(() => {
      frame.current = 0
      const total = text.length * 3
      const run = () => {
        setDisplay(
          text.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i < Math.floor(frame.current / 3)) return char
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          }).join('')
        )
        frame.current++
        if (frame.current <= total) raf.current = requestAnimationFrame(run)
        else setDisplay(text)
      }
      raf.current = requestAnimationFrame(run)
    }, delay)

    return () => {
      clearTimeout(timeout)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [trigger, text, delay])

  return display
}
