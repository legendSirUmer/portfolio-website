'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 lg:px-8">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-cyan-300">Software Engineering Student • AI Engineer • Full-Stack Developer</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Building AI products, cloud-native systems, and intelligent platforms.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            I’m a final-year Software Engineering student at Bahria University specializing in LLM apps, AI agents, RAG systems, cloud deployments, and full-stack development with Python, Django, React, Flutter, Azure, and Docker.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="#projects" className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-slate-100">
              View Projects
            </Link>
            <Link href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-slate-100 transition hover:bg-white/10">
              Let&apos;s Talk
            </Link>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="glass p-8">
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 via-slate-900 to-violet-500/20 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Currently focused on</p>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>• LLM apps, AI agents, and RAG systems</li>
              <li>• Cloud-native applications on Azure and Docker</li>
              <li>• Intelligent, scalable full-stack solutions</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
