import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLang()
  const t = translations[lang].nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#about',      label: t.about },
    { href: '#stack',      label: t.stack },
    { href: '#projects',   label: t.projects },
    { href: '#experience', label: t.experience },
  ]

  const scroll = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar__logo" onClick={e => scroll(e, '#home')}>
        <span className="logo-mark" aria-hidden="true" />
        IM1JUAN<span className="logo-dot">.</span>
      </a>

      <ul className="navbar__links">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => scroll(e, l.href)}>{l.label}</a>
          </li>
        ))}
      </ul>

      <div className="navbar__controls">
        <div className="nav-status">
          <span className="nav-ping" />
          {t.status}
        </div>
        <button className="ctrl-btn" onClick={toggleLang} aria-label="Toggle language">
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
        <button className="ctrl-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
        </button>
        <button
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => scroll(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__controls">
            <button className="ctrl-btn" onClick={toggleLang}>{lang === 'en' ? 'ES' : 'EN'}</button>
            <button className="ctrl-btn" onClick={toggleTheme}>
              {theme === 'dark' ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
