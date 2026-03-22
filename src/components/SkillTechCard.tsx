"use client";

import { useState } from "react";
import { getSkillIconUrl } from "@/lib/skillIcons";

export type SkillTechCardProps = {
  name: string;
  /** Color oficial / de marca del ícono (hex) */
  brandColor: string;
};

/**
 * Ícono monocromo (Simple Icons) teñido con `brandColor` vía mask-image.
 */
export default function SkillTechCard({ name, brandColor }: SkillTechCardProps) {
  const [iconFailed, setIconFailed] = useState(false);
  const url = getSkillIconUrl(name);

  return (
    <article className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(130deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02)),var(--surface)] px-3 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm transition hover:border-white/18 hover:shadow-[0_12px_28px_rgba(3,5,12,0.35)]">
      {/* Comprueba carga del SVG para fallback */}
      <img
        src={url}
        alt=""
        className="pointer-events-none fixed h-px w-px opacity-0"
        aria-hidden
        onError={() => setIconFailed(true)}
      />

      <div className="relative flex h-14 w-full items-center justify-center">
        {!iconFailed ? (
          <div
            className="h-11 w-11 shrink-0 transition group-hover:scale-105"
            style={{
              WebkitMaskImage: `url(${url})`,
              maskImage: `url(${url})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              backgroundColor: brandColor,
            }}
            aria-hidden
          />
        ) : (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-foreground"
            aria-hidden
          >
            {name.slice(0, 2)}
          </div>
        )}
      </div>

      <h3 className="mt-3 text-center text-xs font-semibold leading-tight tracking-tight text-foreground sm:text-sm">
        {name}
      </h3>
    </article>
  );
}
