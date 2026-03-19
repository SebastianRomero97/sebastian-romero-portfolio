export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: "live" | "coming";
};

export const owner = {
  name: "Sebastian Romero",
  role: "Frontend Developer",
  tagline:
    "Diseño productos web que se ven premium, cargan rápido y convierten mejor.",
  city: "Buenos Aires, AR",
  availability: "Disponible para nuevos proyectos",
  email: "tu-email@ejemplo.com",
};

export const highlights = [
  "Enfoque en producto y negocio, no solo UI",
  "Arquitectura escalable en Next.js + TypeScript",
  "Accesibilidad y performance como estándar",
];

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "UI Systems",
  "Framer Motion",
  "SEO técnico",
  "Vercel",
];

export const projects: ProjectItem[] = [
  {
    id: "smash-center",
    title: "Smash Center",
    summary: "Sitio de alto impacto visual para marca deportiva.",
    impact: "Mejora de presencia digital y navegación mobile-first.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    status: "live",
    liveUrl: "https://example.vercel.app",
    repoUrl: "",
  },
  {
    id: "next-project-1",
    title: "Próximo proyecto",
    summary: "Espacio reservado para tu siguiente caso de estudio.",
    impact: "Definí problema, solución y resultado medible.",
    stack: ["React", "Next.js", "TypeScript"],
    status: "coming",
  },
  {
    id: "next-project-2",
    title: "Próximo proyecto",
    summary: "Mostrá aquí un proyecto con objetivo de negocio.",
    impact: "Ideal: incluir métricas de carga, retención o conversión.",
    stack: ["Next.js", "API", "Vercel"],
    status: "coming",
  },
];

