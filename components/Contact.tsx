export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="glass p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white">Let&apos;s build something meaningful together.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m open to software engineering, AI product, and cloud-based opportunities where I can contribute through impactful development, research, and delivery.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="mailto:umerhussain17june@gmail.com" className="inline-flex rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
            Email Me
          </a>
          <a href="https://www.linkedin.com/in/umer-hussain-707691314/" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/10">
            LinkedIn
          </a>
          <a href="https://github.com/legendSirUmer" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/10">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
