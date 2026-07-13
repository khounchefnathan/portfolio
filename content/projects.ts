export type ProjectCategory = "horizontal" | "vertical";

export interface Project {
  slug: string;
  title: string;
  client?: string;
  category: ProjectCategory;
  description: string;
  poster: string;
  /**
   * Playback ID Mux (pas l'Asset ID !) : sur la page de détail de l'asset dans le
   * dashboard Mux, section "Playback IDs". Laisser `null` tant que non renseigné.
   */
  muxPlaybackId: string | null;
}

// L'ordre des entrées définit l'ordre d'affichage à l'intérieur de chaque
// catégorie (vertical puis horizontal) dans la section Portfolio.
export const projects: Project[] = [
  {
    // Asset Mux : "One-Talk-Beyond-V"
    slug: "one-talk-beyond",
    title: "One Talk Beyond N°1",
    client: "One Talk Beyond",
    category: "vertical",
    description: "Format vertical d'interview — connecter à travers l'art et les histoires.",
    poster: "/images/projects/one-talk-beyond.jpg",
    muxPlaybackId: "6xyEBP3cU6kcju5LJ500Iuz75r02Ejrx93QLR4xDq5wqc",
  },
  {
    // Asset Mux : "Zèta_&_Oxana_One_Talk_Beyond_n°4"
    slug: "zeta-oxana",
    title: "Zèta & Oxana — One Talk Beyond n°4",
    client: "One Talk Beyond",
    category: "vertical",
    description: "Épisode n°4 du format d'interview One Talk Beyond, en cuisine avec Zèta & Oxana.",
    poster: "/images/projects/zeta-oxana.jpg",
    muxPlaybackId: "MDi5F7xWvrgDgCZxu01DsxCG4foCo4sX02ZqTeG9ErmRQ",
  },
  {
    // Asset Mux : "Emily's_Pillow_Présentation_V6"
    slug: "emilys-pillow",
    title: "Emily's Pillow — Présentation produit",
    client: "Emily's Pillow",
    category: "vertical",
    description: "Vidéo de présentation produit au format réseaux sociaux.",
    poster: "/images/projects/emilys-pillow.jpg",
    muxPlaybackId: "5hTjx5XB78d7YPLK92hVR6QOQq73Y8lh8XyY1LRV4yM",
  },
  {
    // Asset Mux : "Film_Collection_Delta"
    slug: "collection-delta",
    title: "Collection Delta — Film",
    category: "vertical",
    description: "Film mode en format vertical, entre lumière naturelle et détails stylés.",
    poster: "/images/projects/collection-delta.jpg",
    muxPlaybackId: "Ic01uKPPTH2g016KEsPPBXqDcrdZsSVcSiUQold6JK5og",
  },
  {
    // Asset Mux : "REEL INSTA"
    slug: "reel-insta",
    title: "Reel Instagram",
    category: "vertical",
    description: "Contenu court pensé pour les réseaux sociaux, rythmé et immersif.",
    poster: "/images/projects/reel-insta.jpg",
    muxPlaybackId: "rwDhBMVE4MhrgxrBc5OTK6D3g01gGtDUYCUvTQkCL94E",
  },
  {
    // Asset Mux : "V1_Motocross"
    slug: "motocross",
    title: "Motocross — Édit dynamique",
    category: "horizontal",
    description: "Édit dynamique en pleine nature, entre vitesse et sensations.",
    poster: "/images/projects/motocross.jpg",
    muxPlaybackId: "7Xo1XK9uQelU4B6x8gadmywrgG4LSmoqp9H7dZA7JJE",
  },
  {
    // Asset Mux : "Vétalis_50ans_Aftermovie_V1"
    slug: "vetalis-50ans",
    title: "Vétalis — Aftermovie 50 ans",
    client: "Vétalis",
    category: "horizontal",
    description: "Aftermovie de la célébration des 50 ans de l'entreprise Vétalis.",
    poster: "/images/projects/vetalis-50ans.jpg",
    muxPlaybackId: "QbVJAR3rkiCDyUVSZZAOFhCDCh42ll01da99jxfExbHc",
  },
  {
    // Asset Mux : "association_durable_-_mini_doc (1080p)"
    slug: "association-durable",
    title: "L'Alimentation, j'explore & je choisis",
    client: "Association Durable",
    category: "horizontal",
    description: "Mini-documentaire pour un projet d'éducation à l'alimentation durable à l'école.",
    poster: "/images/projects/association-durable.jpg",
    muxPlaybackId: "GnDFevein74Dq00XdT6Fssg4qM02qLRVvXE9gVgQkfcvM",
  },
  {
    // Asset Mux : "présentation_-_bac_bobinage (1080p)"
    slug: "bac-bobinage",
    title: "Bac Bobinage — Vidéo de présentation",
    category: "horizontal",
    description: "Vidéo de présentation institutionnelle tournée en environnement industriel.",
    poster: "/images/projects/bac-bobinage.jpg",
    muxPlaybackId: "00rW9F2uR7b3p2a4gSWt4BGW800tsifSsuaBPpIqFifvY",
  },
];
