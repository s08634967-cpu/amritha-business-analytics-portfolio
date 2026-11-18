import { about, skills, experience, certifications, certTypeNotes, journey, profile } from '../data/content'
import { Section, Chip, Txt, btnPrimary, btnGhost } from './ui'

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 text-lg lg:col-span-3">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-lg font-bold">Where I want to work</h3>
          <ul className="mt-3 flex flex-wrap gap-2">{about.directions.map((d) => <li key={d}><Chip tone="accent">{d}</Chip></li>)}</ul>
          <h3 className="mt-8 text-lg font-bold">What I bring</h3>
          <dl className="mt-3 divide-y divide-line border-y border-line">
            {about.strengths.map(([t, d]) => (
              <div key={t} className="py-3"><dt className="font-semibold">{t}</dt><dd className="text-muted">{d}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" tint title="Skills" intro="The level next to each tool is my honest current standing. I am building these skills through projects.">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">Data and analytics</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {skills.technical.map((s) => (
              <li key={s.name} className="flex items-start justify-between gap-4 py-4">
                <div><p className="font-semibold">{s.name}</p><p className="text-muted">{s.note}</p></div>
                <Chip tone="accent">{s.level}</Chip>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Business skills</h3>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {skills.business.map(([n, d]) => (
              <li key={n} className="py-4"><p className="font-semibold">{n}</p><p className="text-muted">{d}</p></li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function Experience() {
  const e = experience
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold">{e.role}</h3>
          <p className="mt-1 text-lg">{e.company}</p>
          <p className="text-muted">{e.place} · {e.dates}</p>
          <p className="mt-4">{e.summary}</p>
          <blockquote className="mt-6 border-l-4 border-accent pl-4 text-muted"><span className="font-semibold text-ink">What I took from it: </span>{e.takeaway}</blockquote>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {e.highlights.map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line bg-white p-5">
              <h4 className="font-display text-lg font-bold">{t}</h4>
              <p className="mt-2 text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export function Certifications() {
  return (
    <Section id="certifications" tint title="Certifications and learning" intro="Courses, masterclasses and job simulations are different things, so each one is labelled with what it is.">
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.title} className="flex flex-col rounded-lg border border-line bg-paper p-5">
            <div><Chip tone={c.type === 'Job simulation' ? 'progress' : 'accent'}>{c.type}</Chip></div>
            <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
            <p className="text-muted">{c.issuer}</p>
            <dl className="mt-3 grid grid-cols-[6.5rem_1fr] gap-y-1 text-sm">
              <dt className="text-muted">Issued</dt><dd><Txt>{c.issued}</Txt></dd>
              <dt className="text-muted">Credential ID</dt><dd><Txt>{c.credentialId}</Txt></dd>
            </dl>
            <p className="mt-4 text-sm">
              {c.url ? <a className="font-semibold text-accent underline underline-offset-4" href={c.url} target="_blank" rel="noreferrer">View certificate</a>
                : <Txt>[Add certificate URL in content.js]</Txt>}
            </p>
          </li>
        ))}
      </ul>
      <dl className="mt-8 grid gap-4 text-sm text-muted md:grid-cols-3">
        {certTypeNotes.map(([t, d]) => <div key={t}><dt className="font-semibold text-ink">{t}</dt><dd>{d}</dd></div>)}
      </dl>
    </Section>
  )
}

export function Journey() {
  return (
    <Section id="journey" title="My learning journey" intro="How my skills have developed, from first spreadsheets to real business work.">
      <ol className="relative ml-3 border-l-2 border-line">
        {journey.map((j) => (
          <li key={j.stage} className="relative pb-8 pl-8 last:pb-0">
            <span className="absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-accent bg-paper" aria-hidden="true" />
            <h3 className="text-xl font-bold">{j.stage}</h3>
            <p className="max-w-2xl text-muted"><Txt>{j.text}</Txt></p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function Contact() {
  return (
    <Section id="contact" tint title="Let’s talk" intro="I am open to internships, entry-level analyst roles and conversations about business analytics. Email is the quickest way to reach me.">
      <div className="flex flex-wrap gap-3">
        {profile.email && <a className={btnPrimary} href={`mailto:${profile.email}`}>{profile.email}</a>}
        {profile.linkedin && <a className={btnGhost} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        {profile.github && <a className={btnGhost} href={profile.github} target="_blank" rel="noreferrer">GitHub</a>}
        {profile.resume && <a className={btnGhost} href={profile.resume} download>Download resume</a>}
        {!profile.resume && <span className="text-sm text-muted">Resume: I’ll add my latest PDF here soon.</span>}
      </div>
      <p className="mt-6 text-muted">Based in {profile.city}.</p>
    </Section>
  )
}