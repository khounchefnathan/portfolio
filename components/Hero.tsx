import { heroContent } from "@/content/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <video
        className="hero-focus-pull absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hero-poster.jpg"
      >
        <source media="(max-width: 768px)" src="/video/hero-loop-mobile.mp4" type="video/mp4" />
        <source src="/video/hero-loop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="hero-glow absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,var(--accent-soft),transparent_60%)]" />

      {/* Repères de cadre façon viseur : posent la signature visuelle dès l'ouverture. */}
      <div className="pointer-events-none absolute inset-4 sm:inset-6" aria-hidden="true">
        <span className="absolute left-0 top-0 h-5 w-5 border-l border-t border-foreground/25 sm:h-7 sm:w-7" />
        <span className="absolute right-0 top-0 h-5 w-5 border-r border-t border-foreground/25 sm:h-7 sm:w-7" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-foreground/25 sm:h-7 sm:w-7" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-foreground/25 sm:h-7 sm:w-7" />
      </div>

      <div className="absolute right-6 top-24 hidden items-center gap-2 font-mono text-xs tracking-wide text-foreground/70 sm:flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        REC · 4K/25FPS
      </div>

      <div className="absolute bottom-16 left-6 hidden font-mono text-xs tracking-wide text-foreground/70 sm:block">
        SHUTTER 1/50
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/80 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {heroContent.badge}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {heroContent.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg text-muted sm:hidden">
            {heroContent.subtitleShort}
          </p>
          <p className="mt-6 hidden max-w-xl text-lg text-muted sm:block">
            {heroContent.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/30"
            >
              {heroContent.primaryCta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border bg-background-elevated/60 px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:border-foreground/40"
            >
              {heroContent.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
