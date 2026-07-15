import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { ExperienceSection } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Achievements } from '@/components/Achievements';
import { Community } from '@/components/Community';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { CursorGlow } from '@/components/CursorGlow';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <AnimatedBackground />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Certifications />
      <Achievements />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}
