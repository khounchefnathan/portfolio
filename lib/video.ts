/** Convertit une URL YouTube/Vimeo classique en URL d'embed. Retourne null si le format n'est pas reconnu. */
export function getEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      const id = parsed.pathname.slice(1);
      return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : null;
    }

    if (parsed.hostname.includes("youtube.com")) {
      const id = parsed.searchParams.get("v");
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
      if (parsed.pathname.startsWith("/embed/")) return `${url}${url.includes("?") ? "&" : "?"}autoplay=1`;
      return null;
    }

    if (parsed.hostname.includes("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}?autoplay=1` : null;
    }

    return null;
  } catch {
    return null;
  }
}
