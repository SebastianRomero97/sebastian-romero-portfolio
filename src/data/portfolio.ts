export type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  liveUrl?: string;
  status: "live" | "coming";
};

export const owner = {
  name: "Sebastian Antonio Romero",
  /** Nombre en 3 líneas (colores: sólido → gradiente → cyan) */
  nameLines: ["Sebastian", "Antonio", "Romero"] as const,
  role: "Desarrollador web full stack con especialización en frontend",
  city: "Buenos Aires, ARG",
  email: "seba97bass@gmail.com",
  /** Reemplazá con tu perfil real */
  githubUrl: "https://github.com/SebastianRomero97",
  linkedinUrl: "https://www.linkedin.com/in/sebastian-antonio-romero",
  /** Foto de perfil (public/perfil.png) */
  profileImage: "/perfil.png",
};

/**
 * Hero (#inicio): etiqueta + foto + nombre + rol + CTAs.
 */
export const hero = {
  /** Esquina superior izquierda del bloque hero */
  eyebrow: "PORTAFOLIO - 2026",
};

/** Sección Educación (#educacion) */
export const educationSection = {
  institution: "SoyHenry",
  detail: "Full Stack Web Developer Bootcamp / marzo 2026",
  certificateSrc: "/certificado.png",
  certificateAlt:
    "Certificado de finalización — Desarrollo Web Full Stack, Henry",
};

/** Skills técnicos por categoría (#stack) — editá listas y nombres */
export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const technicalSkillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "TypeORM"],
  },
  {
    id: "tools",
    label: "Tools",
    items: ["Git", "GitHub", "Figma", "Insomnia"],
  },
];

/** Tarjetas de tecnología (ícono a color + nombre) — se genera desde `technicalSkillCategories` */
export type SkillShowcaseItem = {
  name: string;
  /** Color de marca para el ícono (Simple Icons monocromo teñido) */
  brandColor: string;
};

/** Colores de marca (ajustá si querés otro tono sobre fondo oscuro) */
const SKILL_BRAND_COLOR: Record<string, string> = {
  HTML: "#e34f26",
  CSS: "#1572b6",
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  React: "#61dafb",
  /** Blanco para buen contraste sobre card oscura */
  "Next.js": "#ffffff",
  "Tailwind CSS": "#06b6d4",
  Tailwind: "#06b6d4",
  Vercel: "#ffffff",
  /** Simple Icons — logo claro sobre fondo oscuro */
  "CSS Modules": "#e8e8e8",
  "Node.js": "#339933",
  /** Verde asociado a Express sobre fondo oscuro */
  Express: "#68a063",
  PostgreSQL: "#4169e1",
  TypeORM: "#fe0902",
  Git: "#f05032",
  /** Claro para contraste (logo GitHub en repos oscuros) */
  GitHub: "#e6edf3",
  Figma: "#f24e1e",
  Insomnia: "#4000bf",
};

export const skillShowcase: SkillShowcaseItem[] =
  technicalSkillCategories.flatMap((cat) =>
    cat.items.map((name) => ({
      name,
      brandColor: SKILL_BRAND_COLOR[name] ?? "#6366f1",
    })),
  );

/** Color de ícono para stack en tarjetas de proyecto (mismas claves que en `stack`) */
export function getStackIconBrandColor(techName: string): string {
  return SKILL_BRAND_COLOR[techName] ?? "#6366f1";
}

export const projects: ProjectItem[] = [
  {
    id: "smash-center",
    title: "Smash Center",
    summary: "Sitio de alto impacto visual para marca deportiva.",
    impact: "Mejora de presencia digital y gestion de clientes.",
    stack: ["Next.js", "TypeScript", "Tailwind", "CSS Modules", "Vercel"],
    status: "live",
    liveUrl: "https://smashcenter.vercel.app/",
  },
  {
    id: "Baires tech",
    title: "Baires tech",
    summary: "E-commerce de productos apple.",
    impact: "Mejora la experiencia de compra y la navegacion.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    status: "live",
    liveUrl: "https://baires-tech.vercel.app/"
  },
];

