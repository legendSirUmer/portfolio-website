import Link from 'next/link';
import { experiences } from '@/data/experience';

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
      <h1 className="text-4xl font-semibold text-white">Experience</h1>
      <div className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <article key={experience.title} className="glass p-8">
            <h2 className="text-xl font-semibold text-white">{experience.title}</h2>
            <p className="mt-2 text-cyan-300">{experience.company}</p>
            <p className="mt-2 text-sm text-slate-400">{experience.period}</p>
            <p className="mt-4 text-slate-300">{experience.description}</p>
          </article>
        ))}
      </div>
      <Link href="/" className="mt-10 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200">
        Back home
      </Link>
    </main>
  );
}
