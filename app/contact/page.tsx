import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
      <h1 className="text-4xl font-semibold text-white">Contact</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        Reach out for collaborations, product discussions, or new opportunities.
      </p>
      <a href="mailto:umer@example.com" className="mt-10 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950">
        Say Hello
      </a>
      <Link href="/" className="mt-6 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200">
        Back home
      </Link>
    </main>
  );
}
