import React, { useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SEO from './components/SEO'

// Lazy-load below-the-fold sections — reduces initial JS parse + framer-motion eager reflow
const About        = lazy(() => import('./components/About'))
const Skills       = lazy(() => import('./components/Skills'))
const Education    = lazy(() => import('./components/Education'))
const Projects     = lazy(() => import('./components/Projects'))
const Certificates = lazy(() => import('./components/Certificates'))
const Contact      = lazy(() => import('./components/Contact'))
const Footer       = lazy(() => import('./components/Footer'))


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
    // MotionConfig: skip framer-motion layout measurements on mobile/reduced-motion devices
    // This eliminates the 128ms forced reflow from framer-mo....js:2:2776
    <MotionConfig reducedMotion="user">
      <div>
        {/* SEO: dynamically updates <title> and meta tags per section */}
        <SEO />
        <Navbar />
        <main id="main-content">
          <section id="home"><Hero /></section>
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Education />
            <Projects />
            <Certificates />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </MotionConfig>
  )
}

export default App
