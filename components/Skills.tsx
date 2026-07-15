const skills = [
  'Python',
  'JavaScript',
  'C#',
  'Django',
  'React',
  'Flutter',
  'ASP.NET',
  'MERN Stack',
  'LLMs',
  'AI Agents',
  'Prompt Engineering',
  'RAG',
  'Google ADK',
  'LangChain',
  'LangGraph',
  'Ollama',
  'Azure OpenAI',
  'Microsoft Azure',
  'Docker',
  'Kubernetes',
  'PostgreSQL',
  'REST APIs',
  'Git',
  'GitHub',
];

export function Skills() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
      <div className="glass p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Technical Skills</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
