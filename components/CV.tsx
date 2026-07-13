import Image from "next/image";
import { cvContent, siteConfig } from "@/content/site";
import Reveal from "./Reveal";

export default function CV() {
  return (
    <section id="cv" className="mx-auto max-w-6xl px-6 py-28">
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">{cvContent.heading}</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              {cvContent.title}
            </h2>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <a
            href={siteConfig.cvUrl}
            download
            className="mt-1 inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            Télécharger en PDF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </Reveal>
      </div>

      <Reveal delay={150} className="hidden lg:block">
        <p className="mt-6 max-w-2xl text-muted">{cvContent.intro}</p>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)] lg:gap-16">
        {/* Sidebar */}
        <Reveal delay={100} className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-10">
            <div className="relative mx-auto aspect-square w-32 overflow-hidden rounded-2xl border border-border sm:mx-0">
              <Image
                src="/images/profile-qui-je-suis.jpg"
                alt={siteConfig.name}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <ContactRow icon="phone" label={siteConfig.phoneDisplay} href={siteConfig.phoneHref} />
              <ContactRow icon="mail" label={siteConfig.email} href={`mailto:${siteConfig.email}`} />
              <ContactRow icon="pin" label={cvContent.location} />
            </div>

            <div className="space-y-6">
              {cvContent.skillGroups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted">{group.title}</p>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/90">
                        <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted">Langues</p>
              <ul className="mt-3 space-y-1.5">
                {cvContent.languages.map((lang) => (
                  <li key={lang.name} className="text-sm text-foreground/90">
                    {lang.name} <span className="text-muted">· {lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-muted">Intérêts</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cvContent.interests.map((interest) => (
                  <Tag key={interest} label={interest} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main column */}
        <div>
          <Reveal delay={150}>
            <h3 className="font-heading text-xl font-semibold">Expériences professionnelles</h3>
          </Reveal>

          <div className="relative mt-8 space-y-10 border-l border-border pl-8">
            {cvContent.experience.map((exp, i) => (
              <Reveal key={exp.role + exp.period} delay={150 + i * 80} className="relative">
                <span className="absolute -left-[33px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h4 className="font-heading text-lg font-semibold">{exp.role}</h4>
                  <span className="text-sm text-accent">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm italic text-muted">{exp.place}</p>
                <p className="mt-3 text-muted">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <h3 className="mt-16 font-heading text-xl font-semibold">Formation</h3>
          </Reveal>
          <div className="mt-6 divide-y divide-border/60">
            {cvContent.education.map((edu, i) => (
              <Reveal key={edu.title} delay={150 + i * 80}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4">
                  <div>
                    <h4 className="font-medium text-foreground">{edu.title}</h4>
                    <p className="text-sm text-muted">{edu.school}</p>
                  </div>
                  <span className="text-sm text-accent">{edu.year}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="hidden lg:block">
            <Reveal delay={150}>
              <h3 className="mt-16 font-heading text-xl font-semibold">Showreels</h3>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {cvContent.showreels.map((reel) => (
                <ShowreelCard key={reel.label} {...reel} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-border bg-background-elevated px-3 py-1 text-xs text-muted">
      {label}
    </span>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: "phone" | "mail" | "pin";
  label: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-border text-muted transition-colors group-hover:border-accent group-hover:text-accent">
        <ContactIcon name={icon} />
      </span>
      <span className="text-sm text-foreground/90 transition-colors group-hover:text-accent">{label}</span>
    </>
  );

  if (!href) {
    return <div className="flex items-center gap-3">{content}</div>;
  }

  return (
    <a href={href} className="group flex items-center gap-3">
      {content}
    </a>
  );
}

function ContactIcon({ name }: { name: "phone" | "mail" | "pin" }) {
  const common = {
    width: 15,
    height: 15,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ShowreelCard({
  label,
  description,
  anchor,
}: {
  label: string;
  description: string;
  anchor: string;
}) {
  return (
    <a
      href={anchor}
      className="group rounded-2xl border border-border bg-background-elevated p-5 transition-colors duration-300 hover:border-accent hover:bg-accent"
    >
      <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
        {label}
      </span>
      <p className="mt-3 text-sm text-foreground/90 transition-colors duration-300 group-hover:text-white">
        {description}
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 group-hover:text-white">
        Voir dans le portfolio
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </span>
    </a>
  );
}
