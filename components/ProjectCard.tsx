import Image from "next/image";
import type { Project } from "@/content/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-background-elevated text-left transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl hover:shadow-black/40"
    >
      <Image
        src={project.poster}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 480px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity group-hover:from-black/85" />

      <span className="frame-corner frame-top-left" aria-hidden="true" />
      <span className="frame-corner frame-top-right" aria-hidden="true" />
      <span className="frame-corner frame-bottom-left" aria-hidden="true" />
      <span className="frame-corner frame-bottom-right" aria-hidden="true" />

      <span className="frame-label absolute left-4 top-9 rounded-sm bg-black/50 px-2 py-1 font-mono text-[11px] tracking-wide text-white/80 backdrop-blur">
        16:9
      </span>

      <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors group-hover:bg-accent">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="font-mono text-xs uppercase tracking-wide text-white/60">
          {project.client ?? "Horizontal"}
        </p>
        <h3 className="mt-1 font-heading text-base font-semibold text-white sm:text-lg">
          {project.title}
        </h3>
      </div>
    </button>
  );
}
