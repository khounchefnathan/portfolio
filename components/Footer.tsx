import { siteConfig } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p className="font-heading text-foreground">{siteConfig.name}</p>
        <p>© {new Date().getFullYear()} · Tous droits réservés</p>
        <a
          href={siteConfig.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-accent"
        >
          {siteConfig.instagramHandle}
        </a>
      </div>
    </footer>
  );
}
