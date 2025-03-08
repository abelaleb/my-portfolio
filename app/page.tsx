"use client";
import { Sora } from "next/font/google";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";

const sora = Sora({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <div
      className={`${sora.className} min-h-screen bg-background text-foreground`}
    >
      <Header />
      <main className="max-w-[screen] mx-auto">
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Contact />
      <footer className="max-w-[screen] bg-primary text-white/75 p-8 pb-4 text-center">
        <p>© 2024 made by Abel A. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-75">
          About this website: built with React & Next.js, TypeScript, Tailwind
          CSS, Framer Motion, Vercel hosting.
        </p>
      </footer>
    </div>
  );
}
