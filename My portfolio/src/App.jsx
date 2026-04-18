import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SEO from './components/SEO'


function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Extract section ID from pathname (e.g., "/about" -> "about")
    const sectionId = pathname.split('/').filter(Boolean)[0];

    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        // Delay slightly to ensure content is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top for root path
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div>
      {/* SEO: dynamically updates <title> and meta tags per section */}
      <SEO />
      <Navbar />
      <main id="main-content">
        <section id="home"><Hero /></section>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
