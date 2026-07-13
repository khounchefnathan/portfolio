import Image from "next/image";
import type { Project } from "@/content/projects";

export default function VerticalProjectCard({
  project,
  onOpen,
  floatDelay = 0,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  floatDelay?: number;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      style={{ animationDelay: `${floatDelay}ms` }}
      className="float-card group relative aspect-[9/16] w-full overflow-hidden rounded-2xl border border-border bg-background-elevated text-left"
    >
      <Image
        src={project.poster}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 50vw, 320px"
        className="object-cover transition-transform duration-500 md:group-hover:scale-105"
        loading="lazy"
      />

      {/* Mobile : titre toujours visible + bouton play discret (identique à l'ancien design) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent md:hidden" />
      <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur md:hidden">
        <PlayIcon />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 md:hidden">
        <p className="font-mono text-xs uppercase tracking-wide text-white/60">
          {project.client ?? "Vertical"}
        </p>
        <h3 className="mt-1 font-heading text-base font-semibold text-white">
          {project.title}
        </h3>
      </div>

      {/* Desktop/tablette : rendu épuré façon inspiration, bouton play centré, titre au survol */}
      <div className="absolute inset-0 hidden bg-black/10 transition-colors duration-300 md:block md:group-hover:bg-black/45" />

      <span className="card-sheen hidden md:block" aria-hidden="true" />

      <span className="frame-corner frame-top-left hidden md:block" aria-hidden="true" />
      <span className="frame-corner frame-top-right hidden md:block" aria-hidden="true" />
      <span className="frame-corner frame-bottom-left hidden md:block" aria-hidden="true" />
      <span className="frame-corner frame-bottom-right hidden md:block" aria-hidden="true" />

      <span className="frame-label absolute right-4 top-9 hidden rounded-sm bg-black/50 px-2 py-1 font-mono text-[11px] tracking-wide text-white/80 backdrop-blur md:block">
        9:16
      </span>

      <span className="absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-all duration-300 md:flex md:group-hover:scale-110 md:group-hover:bg-accent">
        <PlayIcon size={20} />
      </span>
      <div className="absolute inset-x-0 bottom-0 hidden translate-y-3 bg-gradient-to-t from-black/85 to-transparent p-5 opacity-0 transition-all duration-300 md:block md:group-hover:translate-y-0 md:group-hover:opacity-100">
        <p className="font-mono text-xs uppercase tracking-wide text-white/60">
          {project.client ?? "Vertical"}
        </p>
        <h3 className="mt-1 font-heading text-base font-semibold text-white">
          {project.title}
        </h3>
      </div>
    </button>
  );
}

function PlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
