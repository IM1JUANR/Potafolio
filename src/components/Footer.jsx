import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'

export default function Footer() {
  const { lang } = useLang()
  const t = translations[lang].footer

  return (
    <footer className="site-footer">
      <div>© 2026 Juan Camilo Alaguna · IM1JUAN</div>
      <div>
        {t.made_with} <span className="footer-red">▲</span>
      </div>
    </footer>
  )
}
