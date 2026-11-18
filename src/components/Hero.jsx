import { profile, process } from '../data/content'
import { btnGhost, btnPrimary } from './ui'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="cell-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="font-medium text-accent">B.Com Business Analytics · {profile.college}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">{profile.headline}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btnPrimary}>See my projects</a>
            {profile.resume && <a href={profile.resume} download className={btnGhost}>Download resume</a>}
          </div>
          <p className="mt-6 flex gap-4 text-muted">
            {profile.linkedin && <a className="underline decoration-line underline-offset-4 hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
            {profile.github && <a className="underline decoration-line underline-offset-4 hover:text-accent" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
          </p>
        </div>

        {/* The worksheet: how I approach every problem, drawn as spreadsheet rows */}
        <aside className="lg:col-span-2" aria-label="How I approach a business problem">
          <div className="overflow-hidden rounded-lg border border-ink/20 bg-white shadow-[6px_6px_0_0_var(--color-accent-soft)]">
            <div className="border-b border-line bg-ink px-4 py-2 text-sm font-medium text-white">How I work on a problem</div>
            <ol>
              {process.map(([title, text], i) => (
                <li key={title} className="fill-row grid grid-cols-[2.5rem_1fr] border-b border-line last:border-0" style={{ animationDelay: `${0.3 + i * 0.25}s` }}>
                  <span className="border-r border-line bg-paper py-3 text-center font-display font-bold text-muted">{i + 1}</span>
                  <div className="px-4 py-3">
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  )
}