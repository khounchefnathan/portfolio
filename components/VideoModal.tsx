"use client";

import { useEffect } from "react";
import type { Project } from "@/content/projects";
import { getEmbedUrl } from "@/lib/video";

export default function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const embedUrl = project.videoUrl ? getEmbedUrl(project.videoUrl) : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        ✕
      </button>

      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-border bg-background-elevated ${
          project.category === "vertical" ? "max-w-sm" : "max-w-4xl"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`relative w-full ${
            project.category === "vertical" ? "aspect-[9/16]" : "aspect-video"
          }`}
        >
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={project.title}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center text-muted">
              <p className="font-heading text-lg text-foreground">Vidéo bientôt disponible</p>
              <p className="text-sm">Cette réalisation sera mise en ligne très prochainement.</p>
            </div>
          )}
        </div>

        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
          {project.client && (
            <p className="mt-1 text-sm text-muted">{project.client}</p>
          )}
        </div>
      </div>
    </div>
  );
}
