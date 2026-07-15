const certs = [
  'NED Certified Full Stack Developer',
  'NED Certified Advanced Python Developer',
  'HackerRank Certified Software Engineer',
  'Microsoft Certified C# Fundamentals',
  'freeCodeCamp — Backend Development and APIs',
];

export function Certifications() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="glass p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Certifications</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certs.map((cert) => (
            <div key={cert} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 text-slate-200">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
