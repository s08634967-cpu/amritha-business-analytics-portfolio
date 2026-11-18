import { useState } from 'react'
import { profile } from '../data/content'
import { btnPrimary } from './ui'

const links = [
  ['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'],
  ['Projects', '#projects'], ['Certifications', '#certifications'], ['Journey', '#journey'], ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const initials = profile.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8" aria-label="Main">
        <a href="#home" className="font-display text-lg font-extrabold" aria-label="Home">
          <span className="mr-2 rounded bg-ink px-2 py-1 text-white">{initials}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.slice(1).map(([label, href]) => (
            <li key={href}><a href={href} className="text-[0.95rem] text-muted hover:text-accent">{label}</a></li>
          ))}
          {profile.resume && <li><a href={profile.resume} download className={`${btnPrimary} !py-1.5 text-sm`}>Resume</a></li>}
        </ul>
        <button className="rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium lg:hidden" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-paper px-5 pb-4 lg:hidden">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-2.5 text-lg">{label}</a></li>
          ))}
          {profile.resume && <li className="pt-2"><a href={profile.resume} download className={btnPrimary}>Download resume</a></li>}
        </ul>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line py-10 text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 md:flex-row md:justify-between md:px-8">
        <p>{profile.name} · B.Com Business Analytics, {profile.college} · {profile.city}</p>
        <p className="flex flex-wrap gap-3">
          {profile.linkedin && <a className="hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          {profile.github && <a className="hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
          <a className="hover:text-accent" href="#home">Back to top</a>
        </p>
      </div>
    </footer>
  )
}