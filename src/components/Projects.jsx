import { projects } from '../data/content'
import { Section, Chip, statusTone } from './ui'

export function ProjectCard({ p, featured }) {
  return (
    <li className={featured ? 'md:col-span-2' : ''}>
      <a href={`#/project/${p.slug}`} className="group flex h-full flex-col rounded-lg border border-line bg-white p-6 transition-colors hover:border-accent">
        <div className="flex flex-wrap items-center gap-2">
          <Chip tone={statusTone(p.status)}>{p.status}</Chip>
          <span className="text-sm text-muted">{p.kind}</span>
        </div>
        <h3 className={`mt-4 font-bold group-hover:text-accent ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{p.title}</h3>
        <p className="mt-2 max-w-2xl text-muted">{p.summary}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{p.tools.map((t) => <li key={t}><Chip>{t}</Chip></li>)}</ul>
        <span className="mt-auto pt-5 font-semibold text-accent underline underline-offset-4">Read the case study</span>
      </a>
    </li>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Each project opens as a short case study: the question, my approach, what I found and what I learned.">
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => <ProjectCard key={p.slug} p={p} featured={i === 1} />)}
      </ul>
    </Section>
  )
}