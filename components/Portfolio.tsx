"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import VerticalProjectCard from "./VerticalProjectCard";
import Carousel3D from "./Carousel3D";
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

      {/* Mobile / tablette : défilement tactile avec effet de peek, sans 3D. */}
      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:hidden">
        {verticalProjects.map((project, i) => (
          <div key={project.slug} className="w-[62%] flex-none snap-center sm:w-[34%]">
            <Reveal delay={(i % 3) * 80}>
              <VerticalProjectCard project={project} onOpen={setSelected} floatDelay={i * 350} />
            </Reveal>
          </div>
        ))}
      </div>

      {/* Desktop : carrousel 3D en pleine largeur d'écran. */}
      <Reveal delay={150} className="relative left-1/2 mt-10 hidden w-screen -translate-x-1/2 overflow-hidden px-6 lg:block lg:px-12">
        <Carousel3D projects={verticalProjects} onOpen={setSelected} cardWidth={300} orientation="vertical" />
      </Reveal>

      <Reveal delay={150}>
        <h3 id="formats-horizontaux" className="mt-20 scroll-mt-24 font-heading text-xl font-semibold">
          Formats horizontaux
        </h3>
      </Reveal>

      {/* Mobile / tablette : défilement tactile avec effet de peek, sans 3D. */}
      <div className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 lg:hidden">
        {horizontalProjects.map((project, i) => (
          <div key={project.slug} className="w-[82%] flex-none snap-center sm:w-[55%]">
            <Reveal delay={(i % 2) * 80}>
              <ProjectCard project={project} onOpen={setSelected} />
            </Reveal>
          </div>
        ))}
      </div>

      {/* Desktop : même traitement carrousel 3D, adapté au format 16:9. */}
      <Reveal delay={150} className="relative left-1/2 mt-10 hidden w-screen -translate-x-1/2 overflow-hidden px-6 lg:block lg:px-12">
        <Carousel3D projects={horizontalProjects} onOpen={setSelected} cardWidth={460} orientation="horizontal" />
      </Reveal>

      <VideoModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
