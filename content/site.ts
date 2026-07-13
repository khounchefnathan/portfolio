export const siteConfig = {
  name: "Nathan Khounchef",
  role: "Vidéaste & Assistant Caméra",
  email: "khounchef.nathan@gmail.com",
  phoneDisplay: "06 20 41 98 19",
  phoneHref: "tel:+33620419819",
  instagramHandle: "@nathan_k56",
  instagramUrl: "https://www.instagram.com/nathan_k56",
  /** Ajouter le PDF dans public/cv/ puis mettre à jour ce chemin. */
  cvUrl: "/cv/CV_Nathan_Khounchef.pdf",
  /** Clé d'accès Web3Forms (https://web3forms.com) à créer et renseigner par Nathan. */
  web3formsAccessKey: "416365c8-e6b2-4fe8-8c26-ff477cad4f09",
  /** Playback ID Mux du showreel complet, à renseigner une fois disponible. */
  showreelMuxPlaybackId: null as string | null,
};

export const heroContent = {
  badge: "Vidéaste et assistant caméra",
  title: "Des images qui captent l'instant, des histoires qui restent.",
  subtitle:
    "Vidéaste et assistant caméra, je filme et monte des contenus qui donnent envie de regarder jusqu'au bout : documentaires, aftermovies d'événements et formats pensés pour les réseaux sociaux.",
  primaryCta: "Voir mon travail",
  secondaryCta: "Me contacter",
};

export const aboutContent = {
  heading: "À propos",
  paragraphs: [
    "Passionné par l'image depuis toujours, je suis vidéaste et assistant caméra, spécialisé dans la réalisation et le montage de contenus pour entreprises, associations et créateurs.",
    "Du tournage au montage final, j'accompagne chaque projet de A à Z : cadrage, lumière, son, étalonnage et rythme, pour raconter une histoire claire qui capte l'attention et sert votre message.",
    "Mon travail s'étend du format documentaire aux aftermovies d'événements, en passant par les contenus courts pensés pour les réseaux sociaux. Chaque vidéo est pensée pour son public et son support, sans jamais sacrifier l'exigence visuelle.",
  ],
};

export interface CvExperience {
  role: string;
  period: string;
  place: string;
  description: string;
  tags: string[];
}

export interface CvEducation {
  title: string;
  year: string;
  school: string;
}

export interface CvSkillGroup {
  title: string;
  items: string[];
}

export const cvContent = {
  heading: "CV",
  title: "Parcours & compétences",
  intro:
    "Cadreur-monteur polyvalent, je couvre l'ensemble de la chaîne de production : de la préparation technique du tournage au rendu final. À l'aise aussi bien sur des formats verticaux engagés que sur du contenu cinématographique, je m'intègre vite dans un workflow existant et je garde mon sang-froid quand le planning se compresse.",
  location: "Bordeaux / Paris",
  skillGroups: [
    { title: "Caméras", items: ["Sony FX3 / FX6", "Sony ZV-E1 / A7III", "RED Komodo"] },
    { title: "Montage & post", items: ["Premiere Pro", "DaVinci Resolve", "Lightroom / Photoshop"] },
    {
      title: "Terrain",
      items: ["DJI Ronin RS3 Pro", "Lumière Nanlite Forza 300/500", "Filtres ND, diffusion, réflecteur"],
    },
    { title: "Photo", items: ["Prise de vue produit", "Retouche photo"] },
  ] satisfies CvSkillGroup[],
  languages: [
    { name: "Français", level: "Natif" },
    { name: "Anglais", level: "Courant" },
  ],
  interests: ["YouTube / Twitch", "Cinéma", "Cuisine", "Sport", "Randonnée"],
  experience: [
    {
      role: "1er Assistant Caméra",
      period: "2025 → 2026",
      place: "Fiction · Série · Court métrage · Paris / Bordeaux / Creuse / Normandie",
      description:
        "Plusieurs tournages professionnels en tant que 1er assistant caméra sur des projets de fiction : série Appelle-Moi Poésie (8 jours, Creuse), série Ambarqué réalisée par Marc de Panda (Normandie / Paris), court métrage Le Rat (Bordeaux, 2026). Mise au point, gestion des optiques, coordination image avec le chef opérateur.",
      tags: ["Fiction", "Mise au point", "Chef opérateur", "RED Komodo", "Sony FX6"],
    },
    {
      role: "Cadreur · Monteur",
      period: "Août 2023 → Oct. 2024",
      place: "Zèta · Équipe communication interne · Alternance",
      description:
        "En autonomie totale au sein d'une équipe com', j'ai pris en charge la totalité du flux vidéo et photo de la marque : préproduction, tournage, montage et retouche photo produit. Création de publicités verticales pensées pour les réseaux sociaux, avec soin apporté au brand storytelling sur chaque format.",
      tags: ["Sony ZV-E1", "Sony A7III", "DaVinci Resolve", "Format vertical", "Photo produit", "Autonomie totale"],
    },
    {
      role: "Cadreur · Monteur",
      period: "2022 → 2023",
      place: "Tasty Vidéo · Production vidéo · Angoulême · Alternance",
      description:
        "Intégré dans une équipe restreinte, j'ai assuré l'ensemble du pipeline : préparation matérielle, tournage et montage. After movies, vidéos publicitaires, contenus corporate : chaque projet demandait de raconter une histoire cohérente avec peu d'images. Utilisation quotidienne de la Sony FX3, Ronin RS3 Pro et du matériel lumière professionnel.",
      tags: ["Sony FX3", "Ronin RS3 Pro", "Premiere Pro", "After movie", "Corporate", "Lumière Nanlite"],
    },
  ] satisfies CvExperience[],
  education: [
    { title: "Technicien Audiovisuel Multitechnique", year: "2025", school: "Ynov Bordeaux" },
    { title: "BUT Métiers du Multimédia et de l'Internet", year: "2024", school: "IUT d'Angoulême" },
  ] satisfies CvEducation[],
  showreels: [
    {
      label: "Vertical",
      description: "Création de contenu social",
      anchor: "#formats-verticaux",
    },
    {
      label: "Horizontal",
      description: "Chef opérateur / cinématographique",
      anchor: "#formats-horizontaux",
    },
  ],
};
