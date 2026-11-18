import { projects } from '../data/content'
import { Chip, Txt, statusTone, isPh } from './ui'

const blocks = [
  ['Objective', 'objective'], ['Business context', 'context'], ['My approach', 'approach'],
  ['Analysis and findings', 'findings'], ['Business recommendations', 'recommendations'], ['What I learned', 'learned'],
]

function Block({ title, value }) {
  const items = Array.isArray(value) ? value : [value]
  return (
    <section className="border-t border-line py-8 md:grid md:grid-cols-4 md:gap-8">
      <h2 className="text-xl font-bold md:col-span-1">{title}</h2>
      <div className="mt-3 md:col-span-3 md:mt-0">
        {Array.isArray(value) ? (
          <ul className="list-disc space-y-2 pl-5 marker:text-accent">{items.map((t) => <li key={t}><Txt>{t}</Txt></li>)}</ul>
        ) : <p className="max-w-2xl"><Txt>{value}</Txt></p>}
      </div>
    </section>
  )
}

export default function ProjectPage({ slug }) {
  const i = projects.findIndex((p) => p.slug === slug)
  const p = projects[i]
  if (!p) {
    return (
      <main className="mx-auto max-w-3xl px-5 py-24">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-3"><a className="font-semibold text-accent underline" href="#projects">Back to all projects</a></p>
      </main>
    )
  }
  const next = projects[(i + 1) % projects.length]
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      <a href="#projects" className="font-medium text-accent underline underline-offset-4">All projects</a>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Chip tone={statusTone(p.status)}>{p.status}</Chip><span className="text-muted">{p.kind}</span>
      </div>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{p.title}</h1>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="font-semibold">Tools:</span>
        {p.tools.map((t) => <Chip key={t}>{isPh(t) ? t : t}</Chip>)}
      </div>

      <div className="mt-10">
        {blocks.map(([title, key]) => (
          <div key={key}>
            {key === 'findings' && p.sourceRules && (
              <section className="mb-8 rounded-lg border border-line bg-white p-5">
                <h2 className="text-lg font-bold">How I label evidence in this project</h2>
                <dl className="mt-3 grid gap-4 sm:grid-cols-3">
                  {p.sourceRules.map(([t, d]) => <div key={t}><dt><Chip tone="accent">{t}</Chip></dt><dd className="mt-2 text-sm text-muted">{d}</dd></div>)}
                </dl>
              </section>
            )}
            <Block title={title} value={p[key]} />
          </div>
        ))}
        <section className="border-t border-line py-8 md:grid md:grid-cols-4 md:gap-8">
          <h2 className="text-xl font-bold">Files and reports</h2>
          <ul className="mt-3 space-y-2 md:col-span-3 md:mt-0">
            {p.links.map((l) => (
              <li key={l.label}>
                {l.url ? <a className="font-semibold text-accent underline underline-offset-4" href={l.url} target="_blank" rel="noreferrer">{l.label}</a>
                  : <Txt>{`[Add link: ${l.label}]`}</Txt>}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <a href={`#/project/${next.slug}`} className="mt-6 block rounded-lg border border-line bg-white p-5 hover:border-accent">
        <span className="text-sm text-muted">Next project</span>
        <span className="block font-display text-xl font-bold">{next.title}</span>
      </a>
    </main>
  )
}