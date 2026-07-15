export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="glass p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About Me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">From AI systems to cloud-native platforms, I build with impact in mind.</h2>
          </div>
          <div className="space-y-4 text-lg leading-8 text-slate-300">
            <p>
              I’m Umer Hussain, a final-year Software Engineering student at Bahria University with hands-on experience in AI, full-stack development, cloud computing, and DevOps. My work spans LLM applications, AI agents, RAG systems, and scalable web/mobile products.
            </p>
            <p>
              I’ve worked with Python, Django, React, Flutter, Azure OpenAI, Docker, Kubernetes, LangGraph, Google ADK, and Microsoft Azure. I’m passionate about building intelligent, scalable systems that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
