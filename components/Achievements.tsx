const items = [
  'Merit Scholarship Holder (Fall 2025) with 4.00 / 4.00 GPA',
  'Technofest On-Campus Speed Programming Runner-Up 2026',
  'Selected for National-Level Technofest Competition',
  'Gold Medalist in Matriculation with 96%',
];

export function Achievements() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="glass p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Achievements</p>
        <ul className="mt-8 space-y-3 text-slate-300">
          {items.map((item) => (
            <li key={item} className="rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
