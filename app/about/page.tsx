import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
      <h1 className="text-4xl font-semibold text-white">About</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
        I’m a software engineer focused on building polished web experiences and AI-enabled products that create real impact.
      </p>
      <Link href="/" className="mt-10 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200">
        Back home
      </Link>
    </main>
  );
}
