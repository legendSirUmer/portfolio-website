const experiences = [
  {
    title: 'Teaching Assistant',
    company: 'NED University of Engineering & Technology',
    period: 'May 2025 – Aug 2025',
    description: 'Mentored students in Advanced Python, Django fundamentals, REST APIs, database integration, deployment practices, and AI-enabled Django applications while supporting labs and debugging sessions.',
  },
  {
    title: 'Internship Bootcamp Participant',
    company: 'EARTech Information Technology',
    period: 'Jan 2026 – Feb 2026',
    description: 'Worked with Microsoft Azure services including Azure OpenAI, Azure VMs, and cloud infrastructure while exploring LLMs, prompt engineering, ML concepts, and cybersecurity labs.',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="glass p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Experience</p>
        <div className="mt-8 space-y-6">
          {experiences.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-cyan-300">{item.company}</p>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
