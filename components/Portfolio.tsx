"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import VerticalProjectCard from "./VerticalProjectCard";
import VideoModal from "./VideoModal";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  const verticalProjects = projects.filter((p) => p.category === "vertical");
  const horizontalProjects = projects.filter((p) => p.category === "horizontal");

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">Portfolio</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Mes réalisations
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <h3 id="formats-verticaux" className="mt-16 scroll-mt-24 font-heading text-xl font-semibold">
          Formats verticaux
        </h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8">
        {verticalProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <VerticalProjectCard
              project={project}
              onOpen={setSelected}
              floatDelay={i * 350}
            />
          </Reveal>
        ))}
      </div>

      <Reveal delay={150}>
        <h3 id="formats-horizontaux" className="mt-20 scroll-mt-24 font-heading text-xl font-semibold">
          Formats horizontaux
        </h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        {horizontalProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 80}>
            <ProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <VideoModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
