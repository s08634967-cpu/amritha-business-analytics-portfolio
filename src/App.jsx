import { useEffect, useState } from 'react'
import Navbar, { Footer } from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ProjectPage from './components/ProjectPage'
import { About, Skills, Experience, Certifications, Journey, Contact } from './components/Sections'

// Tiny hash router: "#/project/<slug>" shows a case study, anything else shows the home page.
export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const slug = hash.startsWith('#/project/') ? hash.replace('#/project/', '') : null

  // Scroll after the right page has rendered.
  useEffect(() => {
    if (slug) return window.scrollTo(0, 0)
    const id = hash.replace('#', '')
    const el = id && document.getElementById(id)
    el ? el.scrollIntoView() : window.scrollTo(0, 0)
  }, [hash, slug])

  return (
    <>
      <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus() }} className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
      <Navbar />
      <div id="main" tabIndex={-1} className="outline-none">
        {slug ? <ProjectPage slug={slug} /> : (<><Hero /><About /><Skills /><Experience /><Projects /><Certifications /><Journey /><Contact /></>)}
      </div>
      <Footer />
    </>
  )
}