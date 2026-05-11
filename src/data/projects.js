export const projects = [
  {
    id: 1,
    title: {
      en: 'Shell Cars Collection',
      es: 'Colección de Carritos Shell',
    },
    description: {
      en: 'Responsive showcase website for a Shell miniature car collection. Modular architecture with smooth UX built from scratch using vanilla HTML, CSS, and JavaScript — no frameworks.',
      es: 'Sitio web responsive para una colección de autos Shell en miniatura. Arquitectura modular con UX fluida, construido desde cero con HTML, CSS y JavaScript vanilla — sin frameworks.',
    },
    tag:  { en: 'Web Dev',   es: 'Desarrollo Web' },
    year: '2024',
    demo: 'https://im1juanr.github.io/Carritos-Shell/',
    code: 'https://github.com/IM1JUANR/Carritos-Shell',
    tech: ['HTML', 'CSS', 'JavaScript'],
    chips: [
      { text: 'GET /cars',              top: '18%', left: '14%' },
      { text: '→ filter · sort',        top: '40%', left: '50%', cls: 'px-chip--blue' },
      { text: 'responsive · mobile',    top: '62%', left: '18%' },
      { text: '200 OK · vanilla JS',    top: '80%', left: '54%', cls: 'px-chip--green' },
    ],
  },
  {
    id: 2,
    title: {
      en: 'Task Manager',
      es: 'Task Manager',
    },
    description: {
      en: 'Web task management app with automatic email reminders via EmailJS and CSV-based authentication. Built with React — minimalist responsive design with urgency-based smart notifications.',
      es: 'App web de gestión de tareas con recordatorios automáticos por email (EmailJS) y autenticación CSV. Desarrollada en React — diseño minimalista con notificaciones inteligentes por urgencia.',
    },
    tag:  { en: 'Web App', es: 'App Web' },
    year: '2024',
    demo: 'https://im1juanr.github.io/Task-Manager/',
    code: 'https://github.com/IM1JUANR/Task-Manager',
    tech: ['React', 'EmailJS', 'CSS'],
    visualBg: 'radial-gradient(circle at 70% 30%, rgba(178,52,44,.35), transparent 50%), radial-gradient(circle at 20% 80%, rgba(51,88,212,.2), transparent 50%), linear-gradient(180deg,#0e0e10,#050507)',
    chips: [
      { text: 'POST /tasks',            top: '18%', left: '18%' },
      { text: 'EmailJS · reminder',     top: '42%', left: '48%', cls: 'px-chip--blue' },
      { text: 'CSV auth · session',     top: '64%', left: '20%' },
      { text: '✓ sent · 200 OK',        top: '82%', left: '55%', cls: 'px-chip--green' },
    ],
  },
]
