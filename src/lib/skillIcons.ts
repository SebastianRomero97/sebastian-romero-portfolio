/** Slugs de Simple Icons (nombre mostrado → archivo .svg) */
export const SLUG_BY_SKILL: Record<string, string> = {
  HTML: "html5",
  /** En Simple Icons ≥15 el ícono `css3` fue reemplazado por `css`. */
  CSS: "css",
  JavaScript: "javascript",
  TypeScript: "typescript",
  React: "react",
  "Next.js": "nextdotjs",
  "Tailwind CSS": "tailwindcss",
  /** Nombre corto usado en stack de proyectos */
  Tailwind: "tailwindcss",
  Vercel: "vercel",
  "CSS Modules": "cssmodules",
  SCSS: "sass",
  "Node.js": "nodedotjs",
  Express: "express",
  PostgreSQL: "postgresql",
  TypeORM: "typeorm",
  Git: "git",
  GitHub: "github",
  Vite: "vite",
  Figma: "figma",
  Insomnia: "insomnia",
};

/** v11 no incluye TypeORM (se agregó en releases posteriores). Mantener versión reciente para todos los íconos. */
export const SIMPLE_ICONS_VERSION = "16";

/** URL del SVG de Simple Icons por slug (p. ej. `github`, `gmail`). */
export function getSimpleIconUrl(slug: string): string {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SIMPLE_ICONS_VERSION}/icons/${slug}.svg`;
}

export function getSkillIconUrl(skillName: string): string {
  const slug =
    SLUG_BY_SKILL[skillName] ??
    skillName.toLowerCase().replace(/\s+/g, "").replace(/\./g, "");
  return getSimpleIconUrl(slug);
}
