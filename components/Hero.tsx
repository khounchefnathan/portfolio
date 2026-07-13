import { heroContent } from "@/content/site";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.jpg"
      >
        <source media="(max-width: 768px)" src="/video/hero-loop-mobile.mp4" type="video/mp4" />
        <source src="/video/hero-loop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,var(--accent-soft),transparent_60%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/80 px-4 py-1.5 text-sm text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Vidéaste indépendant
          </p>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
            {heroContent.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-lg text-muted">
            {heroContent.subtitle}
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
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
