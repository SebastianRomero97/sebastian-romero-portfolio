import { getSkillIconUrl } from "@/lib/skillIcons";
import { getStackIconBrandColor } from "@/data/portfolio";

type ProjectStackIconsProps = {
  stack: string[];
};

/**
 * Íconos de marca (Simple Icons) para el stack de un proyecto — sin texto, con tooltip.
 */
export default function ProjectStackIcons({ stack }: ProjectStackIconsProps) {
  return (
    <div
      className="mt-4 flex flex-wrap items-center gap-2"
      role="list"
      aria-label="Tecnologías del proyecto"
    >
      {stack.map((name, index) => {
        const url = getSkillIconUrl(name);
        const color = getStackIconBrandColor(name);

        return (
          <span
            key={`${name}-${index}`}
            role="listitem"
            title={name}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
          >
            <span
              className="inline-block h-5 w-5 shrink-0"
              style={{
                WebkitMaskImage: `url(${url})`,
                maskImage: `url(${url})`,
                WebkitMaskSize: "contain",
                maskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                backgroundColor: color,
              }}
              aria-hidden
            />
            <span className="sr-only">{name}</span>
          </span>
        );
      })}
    </div>
  );
}
