"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/content/projects";

export default function Carousel3D({
  projects,
  onOpen,
  cardWidth,
  orientation,
}: {
  projects: Project[];
  onOpen: (project: Project) => void;
  cardWidth: number;
  orientation: "vertical" | "horizontal";
}) {
  const [active, setActive] = useState(0);
  const count = projects.length;

  const goTo = (i: number) => setActive(((i % count) + count) % count);

  const cardHeight = orientation === "vertical" ? (cardWidth * 16) / 9 : (cardWidth * 9) / 16;

  const [gap1Ratio, gap2Ratio] = orientation === "vertical" ? [1.02, 1.82] : [0.68, 1.26];

  const depth = [
    { x: 0, rotate: 0, scale: 1, z: 30, opacity: 1 },
    { x: cardWidth * gap1Ratio, rotate: 15, scale: 0.86, z: 20, opacity: 0.82 },
    { x: cardWidth * gap2Ratio, rotate: 24, scale: 0.7, z: 10, opacity: 0.48 },
  ];

  return (
    <div>
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ perspective: "1800px", height: `${cardHeight + 32}px` }}
      >
        {projects.map((project, i) => {
          let offset = i - active;
          if (offset > count / 2) offset -= count;
          if (offset < -count / 2) offset += count;

          const abs = Math.abs(offset);
          const sign = offset === 0 ? 0 : offset > 0 ? 1 : -1;
          const preset = depth[Math.min(abs, depth.length - 1)];
          const isActive = offset === 0;

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => (isActive ? onOpen(project) : goTo(i))}
              aria-label={isActive ? `Voir la vidéo ${project.title}` : `Afficher ${project.title}`}
              className="group absolute overflow-hidden rounded-2xl border border-border bg-background-elevated shadow-2xl shadow-black/50 transition-transform duration-500 ease-out"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `translateX(${sign * preset.x}px) rotateY(${-sign * preset.rotate}deg) scale(${preset.scale})`,
                zIndex: preset.z,
                opacity: preset.opacity,
              }}
            >
              <Image
                src={project.poster}
                alt={project.title}
                fill
                sizes={`${Math.round(cardWidth)}px`}
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
              />

              {isActive && (
                <>
                  <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
                    <PlayIcon />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-mono text-xs uppercase tracking-wide text-white/60">
                      {project.client ?? (orientation === "vertical" ? "Vertical" : "Horizontal")}
                    </p>
                    <h3 className="mt-1 font-heading text-base font-semibold text-white sm:text-lg">
                      {project.title}
                    </h3>
                  </div>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          aria-label="Vidéo précédente"
          onClick={() => goTo(active - 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronIcon direction="left" />
        </button>

        <div className="flex items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.slug}
              type="button"
              aria-label={`Aller à ${project.title}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Vidéo suivante"
          onClick={() => goTo(active + 1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-accent hover:text-accent"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={direction === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}
