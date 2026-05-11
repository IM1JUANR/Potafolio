import { useState, useEffect } from 'react'

export function useTypewriter(words, speed = 90, pause = 2200) {
  const [idx, setIdx] = useState(0)
  const [sub, setSub] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = words[idx]
    if (!del && sub === word.length) {
      const t = setTimeout(() => setDel(true), pause)
      return () => clearTimeout(t)
    }
    if (del && sub === 0) {
      setDel(false)
      setIdx(i => (i + 1) % words.length)
      return
    }
    const t = setTimeout(() => setSub(s => s + (del ? -1 : 1)), del ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [sub, del, idx, words, speed, pause])

  return words[idx].substring(0, sub)
}
