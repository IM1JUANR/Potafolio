import { useLang } from '../context/LanguageContext'
import { translations } from '../data/translations'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'

function ProjectCard({ project, lang, t, index }) {
  const [ref, inView] = useInView(0.1)
  const alt = index % 2 !== 0

  return (
    <article
      ref={ref}
      className={`project-card ${alt ? 'project-card--alt' : ''} reveal ${inView ? 'in' : ''}`}
    >
      <div className="project-body">
        <div className="project-head">
          <span className="project-head__idx">/ {String(index + 1).padStart(2, '0')}</span>
          <span>{project.year} · {project.tag[lang]}</span>
        </div>
        <h3>{project.title[lang]}</h3>
        <p className="project-desc">{project.description[lang]}</p>
        <div className="project-stack">
          {project.tech.map(tech => <span key={tech}>{tech}</span>)}
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {project.demo && (
            <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
              {t.demo} →
            </a>
          )}
          {project.code && (
            <a href={project.code} className="project-link" target="_blank" rel="noopener noreferrer">
              {t.code} →
            </a>
          )}
        </div>
      </div>

      <div className="project-visual">
        <div className="px-bg" style={project.visualBg ? { background: project.visualBg } : {}} />
        <div className="px-grid" />
        {project.chips?.map((chip, i) => (
          <div
            key={i}
            className={`px-chip ${chip.cls || ''}`}
            style={{ top: chip.top, left: chip.left }}
          >
            {chip.text}
          </div>
        ))}
      </div>
    </article>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const t = translations[lang]
  const [ref, inView] = useInView(0.1)

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="eyebrow" ref={ref}>03 · {t.projects.subtitle}</div>
        <h2 className={`reveal ${inView ? 'in' : ''}`}>{t.projects.title} <em>{t.projects.title_em}</em></h2>
        <div className="projects-list">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} lang={lang} t={t.projects} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
