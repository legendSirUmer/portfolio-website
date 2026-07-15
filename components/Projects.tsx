const projects = [
  {
    title: 'LabourGO',
    description: 'Developed a cloud-native freelance service platform using Django, Flutter, Docker, and Kubernetes with scalable REST APIs, authentication, booking, messaging, notifications, and an AI Monitor Agent.',
    tech: ['Django', 'Flutter', 'Docker', 'Kubernetes', 'AI Agent'],
  },
  {
    title: 'FlexBook',
    description: 'Built a full-stack social media platform using React and Django integrated with Agentic AI, including an AI chatbot, contextual workflows, messaging, posts, reels, friend system, and scalable APIs.',
    tech: ['React', 'Django', 'Google ADK', 'Agentic AI'],
  },
  {
    title: 'RahnumAI',
    description: 'Built an AI-powered smart LMS and analytics system using machine learning models for plagiarism detection and grade prediction, plus performance tracking and mental health insights.',
    tech: ['Python', 'ML', 'NLP', 'Scikit-learn'],
  },
  {
    title: 'EnterpriseRAG',
    description: 'Built an enterprise RAG system for intelligent document question answering using LangGraph, Ollama, Google ADK, semantic retrieval, prompt engineering, and modular AI workflows.',
    tech: ['LangGraph', 'Ollama', 'Google ADK', 'RAG'],
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Selected work across AI, platforms, and product teams.</h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="glass p-8">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-300">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-200">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
