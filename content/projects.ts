export type ProjectCategory = "horizontal" | "vertical";

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: ProjectCategory;
  description: string;
  poster: string;
  /** URL YouTube (non répertorié) ou Vimeo. Laisser `null` tant que la vidéo n'est pas en ligne. */
  videoUrl: string | null;
}

export const projects: Project[] = [
  {
    slug: "vetalis-50ans",
    title: "Vétalis — Aftermovie 50 ans",
    client: "Vétalis",
    category: "horizontal",
    description: "Aftermovie de la célébration des 50 ans de l'entreprise Vétalis.",
    poster: "/images/projects/vetalis-50ans.jpg",
    videoUrl: null,
  },
  {
    slug: "association-durable",
    title: "L'Alimentation, j'explore & je choisis",
    client: "Association Durable",
    category: "horizontal",
    description: "Mini-documentaire pour un projet d'éducation à l'alimentation durable à l'école.",
    poster: "/images/projects/association-durable.jpg",
    videoUrl: null,
  },
  {
    slug: "bac-bobinage",
    title: "Bac Bobinage — Vidéo de présentation",
    category: "horizontal",
    description: "Vidéo de présentation institutionnelle tournée en environnement industriel.",
    poster: "/images/projects/bac-bobinage.jpg",
    videoUrl: null,
  },
  {
    slug: "motocross",
    title: "Motocross — Édit dynamique",
    category: "horizontal",
    description: "Édit dynamique en pleine nature, entre vitesse et sensations.",
    poster: "/images/projects/motocross.jpg",
    videoUrl: null,
  },
  {
    slug: "one-talk-beyond",
    title: "One Talk Beyond N°1",
    client: "One Talk Beyond",
    category: "vertical",
    description: "Format vertical d'interview — connecter à travers l'art et les histoires.",
    poster: "/images/projects/one-talk-beyond.jpg",
    videoUrl: null,
  },
  {
    slug: "zeta-oxana",
    title: "Zèta & Oxana — One Talk Beyond n°4",
    client: "One Talk Beyond",
    category: "vertical",
    description: "Épisode n°4 du format d'interview One Talk Beyond, en cuisine avec Zèta & Oxana.",
    poster: "/images/projects/zeta-oxana.jpg",
    videoUrl: null,
  },
  {
    slug: "emilys-pillow",
    title: "Emily's Pillow — Présentation produit",
    client: "Emily's Pillow",
    category: "vertical",
    description: "Vidéo de présentation produit au format réseaux sociaux.",
    poster: "/images/projects/emilys-pillow.jpg",
    videoUrl: null,
  },
  {
    slug: "collection-delta",
    title: "Collection Delta — Film",
    category: "vertical",
    description: "Film mode en format vertical, entre lumière naturelle et détails stylés.",
    poster: "/images/projects/collection-delta.jpg",
    videoUrl: null,
  },
  {
    slug: "reel-insta",
    title: "Reel Instagram",
    category: "vertical",
    description: "Contenu court pensé pour les réseaux sociaux, rythmé et immersif.",
    poster: "/images/projects/reel-insta.jpg",
    videoUrl: null,
  },
];
