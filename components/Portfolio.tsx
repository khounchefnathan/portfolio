"use client";

import { useState } from "react";
import { projects, type Project, type ProjectCategory } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";
import Reveal from "./Reveal";

type Filter = ProjectCategory | "all";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Tout" },
  { value: "horizontal", label: "Horizontal" },
  { value: "vertical", label: "Vertical" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = projects.filter((p) => filter === "all" || p.category === filter);

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-6 py-28">
      <Reveal>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">Portfolio</p>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
          Mes réalisations
        </h2>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setFilter(f.value)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === f.value
                  ? "border-accent bg-accent text-white"
                  : "border-border text-muted hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 [grid-auto-flow:dense] sm:grid-cols-3 md:gap-6">
        {visible.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={(i % 3) * 80}
            className={project.category === "horizontal" ? "col-span-2" : ""}
          >
            <ProjectCard project={project} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <VideoModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
