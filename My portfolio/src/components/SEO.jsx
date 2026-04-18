import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * SEO Component
 * Dynamically updates <title>, <meta description>, Open Graph,
 * Twitter Card, and canonical URL as the user scrolls through sections.
 * Uses IntersectionObserver — no extra npm packages needed.
 */

const BASE_URL = 'https://bhavy-talaviya-portfolio-smoky.vercel.app'

const seoData = {
  home: {
    title: 'Bhavy Talaviya | FullStack Developer Portfolio',
    description:
      'Bhavy Talaviya is a passionate FullStack Developer specializing in React, Node.js, Next.js, and modern web technologies. Explore my projects, skills, and experience.',
    canonical: `${BASE_URL}/`,
  },
  about: {
    title: 'About | Bhavy Talaviya — FullStack Developer',
    description:
      'Learn about Bhavy Talaviya — a FullStack Developer from Adani University with expertise in building scalable web applications using React, Node.js, and cloud technologies.',
    canonical: `${BASE_URL}/#about`,
  },
  skills: {
    title: 'Skills | Bhavy Talaviya — React, Node.js, Next.js',
    description:
      "Bhavy Talaviya's technical skills include React, Node.js, Next.js, Docker, AWS, MongoDB, TypeScript, and more. A FullStack Developer proficient in modern web technologies.",
    canonical: `${BASE_URL}/#skills`,
  },
  education: {
    title: 'Education | Bhavy Talaviya — Adani University',
    description:
      "Bhavy Talaviya's educational background — studying at Adani University with a focus on full-stack development, analytical problem-solving, and computer science.",
    canonical: `${BASE_URL}/#education`,
  },
  projects: {
    title: 'Projects | Bhavy Talaviya — FullStack Web Projects',
    description:
      "Explore Bhavy Talaviya's full-stack projects including DreamGame, Olipop website clones, and more. Built with React, Node.js, and modern web technologies.",
    canonical: `${BASE_URL}/#projects`,
  },
  certificates: {
    title: 'Certificates | Bhavy Talaviya — Achievements & Awards',
    description:
      "View Bhavy Talaviya's certifications and hackathon participations including the Odoo × Adani University hackathon and various online courses.",
    canonical: `${BASE_URL}/#certificates`,
  },
  contact: {
    title: 'Contact | Bhavy Talaviya — Available for Hire',
    description:
      'Get in touch with Bhavy Talaviya — FullStack Developer available for freelance, internships, and full-time opportunities. Reach out via email, LinkedIn, or WhatsApp.',
    canonical: `${BASE_URL}/#contact`,
  },
}

/** Update all relevant <head> tags for a given section */
function updateSEO(sectionKey) {
  const data = seoData[sectionKey] || seoData.home

  // Page title
  document.title = data.title

  // Meta description
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', data.description)

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', data.title)

  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', data.description)

  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', data.canonical)

  // Twitter Card
  const twTitle = document.querySelector('meta[name="twitter:title"]')
  if (twTitle) twTitle.setAttribute('content', data.title)

  const twDesc = document.querySelector('meta[name="twitter:description"]')
  if (twDesc) twDesc.setAttribute('content', data.description)

  // Canonical URL
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', data.canonical)
}

const SEO = () => {
  const { pathname } = useLocation()

  // Update SEO on route/path change
  useEffect(() => {
    const sectionKey = pathname.split('/').filter(Boolean)[0] || 'home'
    updateSEO(sectionKey)
  }, [pathname])

  // IntersectionObserver: update SEO as user scrolls through sections
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'education', 'projects', 'certificates', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section with the highest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const sectionKey = visible[0].target.id || 'home'
          updateSEO(sectionKey)
        }
      },
      {
        root: null,
        threshold: [0.3],            // Triggers when 30%+ of section visible
        rootMargin: '-80px 0px 0px 0px', // Offset for fixed navbar height
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Renders nothing — only manages <head>
  return null
}

export default SEO
