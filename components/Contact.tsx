import { siteConfig } from "@/content/site";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-accent">Contact</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              Discutons de votre projet
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 max-w-md text-muted">
              Un tournage à organiser, un montage à réaliser ? Écrivez-moi ou contactez-moi
              directement.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-10 space-y-4">
              <ContactLink
                href={`mailto:${siteConfig.email}`}
                label={siteConfig.email}
                icon="mail"
              />
              <ContactLink
                href={siteConfig.phoneHref}
                label={siteConfig.phoneDisplay}
                icon="phone"
              />
              <ContactLink
                href={siteConfig.instagramUrl}
                label={siteConfig.instagramHandle}
                icon="instagram"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="rounded-3xl border border-border bg-background-elevated p-6 sm:p-8">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: "mail" | "phone" | "instagram";
}) {
  return (
    <a
      href={href}
      target={icon === "instagram" ? "_blank" : undefined}
      rel={icon === "instagram" ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 text-foreground"
    >
      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent">
        <Icon name={icon} />
      </span>
      <span className="text-sm transition-colors group-hover:text-accent sm:text-base">
        {label}
      </span>
    </a>
  );
}

function Icon({ name }: { name: "mail" | "phone" | "instagram" }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg {...common}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
