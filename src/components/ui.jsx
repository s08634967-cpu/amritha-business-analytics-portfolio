// Small shared building blocks used across the site.
export const isPh = (s) => typeof s === 'string' && s.startsWith('[')

/** Renders text; anything starting with "[" is shown as a highlighted placeholder. */
export function Txt({ children }) {
  if (isPh(children)) {
    return <span className="rounded border border-dashed border-signal-line bg-signal px-1.5 py-0.5 text-[0.95em]">{children}</span>
  }
  return <>{children}</>
}

export function Section({ id, title, intro, children, tint = false }) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 md:py-24 ${tint ? 'bg-white border-y border-line' : ''}`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
        {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export function Chip({ children, tone = 'plain' }) {
  const tones = {
    plain: 'border-line bg-white text-ink',
    accent: 'border-accent/30 bg-accent-soft text-accent',
    done: 'border-emerald-300 bg-emerald-50 text-emerald-800',
    progress: 'border-signal-line bg-signal text-ink',
  }
  return <span className={`inline-block rounded-full border px-3 py-0.5 text-sm font-medium ${tones[tone]}`}>{children}</span>
}

export const statusTone = (s) => (s.startsWith('In progress') || s.startsWith('Ongoing') ? 'progress' : 'done')

export const btn =
  'inline-flex items-center justify-center rounded-md px-5 py-2.5 font-semibold transition-colors'
export const btnPrimary = `${btn} bg-accent text-white hover:bg-ink`
export const btnGhost = `${btn} border border-ink/20 bg-white text-ink hover:border-accent hover:text-accent`
