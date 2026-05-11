<div align="center">

# IM1JUAN · Portfolio

**[🇬🇧 English](#-english) · [🇨🇴 Español](#-español)**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222?style=flat-square&logo=github)](https://im1juanr.github.io/Potafolio/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)

**[→ Live demo](https://im1juanr.github.io/Potafolio/)**

</div>

---

## 🇬🇧 English

### About

Personal portfolio of **Juan Camilo Alaguna (IM1JUAN)**, Multimedia Engineer from Colombia. Built with React 18 + Vite 5, fully bilingual (EN/ES), with dark/light theme, scroll animations, and a complete SEO setup.

### Features

- **Bilingual** — EN / ES toggle, persisted to `localStorage`, `<html lang>` updates dynamically
- **Theme switching** — Dark / Light, respects system preference on first load
- **Animations** — Typewriter, text scramble, Intersection Observer scroll transitions
- **Custom cursor** — Auto-disabled on touch devices
- **SEO** — Open Graph, Twitter Card, Schema.org JSON-LD, hreflang, sitemap, robots.txt, webmanifest
- **Responsive** — Mobile-first, fluid typography via `clamp()`

### Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 |
| Build | Vite 5 |
| Styling | CSS Variables + custom design system |
| Fonts | Geist · JetBrains Mono |
| Icons | Font Awesome 6.5 |
| Deployment | GitHub Pages |

### Getting Started

```bash
# Install dependencies
npm install

# Dev server → http://localhost:5173/Potafolio/
npm run dev

# Production build → dist/
npm run build

# Preview build locally
npm run preview
```

### Project Structure

```
src/
├── components/   # Hero, About, Stack, Projects, Timeline, Contact, Footer…
├── context/      # ThemeContext, LanguageContext
├── data/         # projects.js · translations.js (EN/ES)
├── hooks/        # useTypewriter · useScramble · useInView
└── index.css     # Design tokens & global styles
public/
└── site.webmanifest
```

### Design Tokens

| Token | Dark | Light |
|-------|------|-------|
| Background | `#0a0a0b` | `#f8f8f9` |
| Text | `#f4f4f5` | `#0e0e10` |
| Blue accent | `#3358d4` | `#2547c0` |
| Red accent | `#b2342c` | `#9e2626` |

---

## 🇨🇴 Español

### Sobre el proyecto

Portafolio personal de **Juan Camilo Alaguna (IM1JUAN)**, Ingeniero en Multimedia de Colombia. Construido con React 18 + Vite 5, completamente bilingüe (EN/ES), con modo oscuro/claro, animaciones al hacer scroll y SEO completo.

### Características

- **Bilingüe** — Toggle EN / ES persistido en `localStorage`, el atributo `<html lang>` se actualiza dinámicamente
- **Tema oscuro/claro** — Respeta la preferencia del sistema en la primera carga
- **Animaciones** — Máquina de escribir, scramble de texto, transiciones con Intersection Observer
- **Cursor personalizado** — Se desactiva automáticamente en dispositivos táctiles
- **SEO** — Open Graph, Twitter Card, Schema.org JSON-LD, hreflang, sitemap, robots.txt, webmanifest
- **Responsive** — Diseño mobile-first con tipografía fluida via `clamp()`

### Tecnologías

| Capa | Tecnología |
|------|-----------|
| Framework | React 18 |
| Build | Vite 5 |
| Estilos | CSS Variables + sistema de diseño propio |
| Fuentes | Geist · JetBrains Mono |
| Íconos | Font Awesome 6.5 |
| Despliegue | GitHub Pages |

### Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo → http://localhost:5173/Potafolio/
npm run dev

# Build de producción → dist/
npm run build

# Vista previa del build
npm run preview
```

### Estructura del proyecto

```
src/
├── components/   # Hero, About, Stack, Projects, Timeline, Contact, Footer…
├── context/      # ThemeContext, LanguageContext
├── data/         # projects.js · translations.js (EN/ES)
├── hooks/        # useTypewriter · useScramble · useInView
└── index.css     # Tokens de diseño y estilos globales
public/
└── site.webmanifest
```

---

## Contact · Contacto

<div align="center">

**Juan Camilo Alaguna — IM1JUAN**

[j.alagunarincon@gmail.com](mailto:j.alagunarincon@gmail.com)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/juan-alaguna-1576bb21a/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/IM1JUANR)
[![X](https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white)](https://x.com/j_alaguna)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white)](https://www.instagram.com/juanca.rincon/)

</div>
