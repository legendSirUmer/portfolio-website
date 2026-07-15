import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Umer Hussain | Software Engineer & AI Developer',
  description: 'Portfolio of Umer Hussain, a final-year Software Engineering student specializing in AI, full-stack development, cloud computing, and DevOps.',
  keywords: ['Umer Hussain', 'Software Engineer', 'AI Developer', 'Portfolio', 'RAG', 'Azure', 'Django', 'React'],
  openGraph: {
    title: 'Umer Hussain | Software Engineer & AI Developer',
    description: 'Portfolio of Umer Hussain, a final-year Software Engineering student specializing in AI, full-stack development, cloud computing, and DevOps.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
