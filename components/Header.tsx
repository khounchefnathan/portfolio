"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#cv", label: "CV" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#accueil");

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      {/* Barre de progression façon timeline de montage : la lecture de la page, comme un edit. */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-border/40">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#accueil"
          className="font-heading text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative flex items-center gap-1.5 text-sm transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full bg-accent transition-opacity ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                />
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="#cv"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/30 sm:px-5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <path d="M8 7h8M8 11h8M8 15h5" />
            </svg>
            CV
          </a>

          <a
            href="#contact"
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-foreground md:inline-block"
          >
            Me contacter
          </a>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-foreground transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-foreground transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-background px-6 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-2 py-3 text-base text-muted transition-colors hover:bg-background-elevated hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full bg-foreground px-5 py-3 text-center text-sm font-medium text-background"
            onClick={() => setOpen(false)}
          >
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}
