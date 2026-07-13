import Image from "next/image";
import { aboutContent, siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <Reveal>
          <div className="relative mx-auto aspect-[2/3] w-full max-w-sm overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/profile-principal.jpg"
              alt={siteConfig.name}
              fill
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">
              {aboutContent.heading}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {siteConfig.name}
            </h2>
          </Reveal>

          <div className="mt-6 space-y-5 text-muted">
            {aboutContent.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={150 + i * 80}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <a
              href="#cv"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Voir mon CV
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
