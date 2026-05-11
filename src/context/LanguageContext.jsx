import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('im1juan-lang') || 'en'
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => {
    const next = lang === 'en' ? 'es' : 'en'
    setLang(next)
    localStorage.setItem('im1juan-lang', next)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => useContext(LanguageContext)
