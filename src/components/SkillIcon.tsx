"use client";

import Image from "next/image";
import { useState } from "react";
import { getSkillIconUrl } from "@/lib/skillIcons";

export default function SkillIcon({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/10 text-[10px] font-bold text-foreground"
        aria-hidden
      >
        {name.slice(0, 2)}
      </span>
    );
  }

  return (
    <Image
      src={getSkillIconUrl(name)}
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 shrink-0 object-contain brightness-0 invert opacity-90"
      unoptimized
      onError={() => setFailed(true)}
    />
  );
}
