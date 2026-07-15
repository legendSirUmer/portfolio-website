import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
      <h1 className="text-4xl font-semibold text-white">Projects</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass p-8">
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
            <p className="mt-4 text-slate-300">{project.description}</p>
          </article>
        ))}
      </div>
      <Link href="/" className="mt-10 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200">
        Back home
      </Link>
    </main>
  );
}
