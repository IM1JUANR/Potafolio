import { ThemeProvider } from './context/ThemeContext'
import { LanguageProvider } from './context/LanguageContext'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Stack />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </LanguageProvider>
    </ThemeProvider>
  )
}
