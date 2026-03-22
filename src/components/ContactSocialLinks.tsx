import { getSimpleIconUrl } from "@/lib/skillIcons";

type ContactSocialLinksProps = {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

/**
 * LinkedIn no está en Simple Icons (CDN 404). Ícono vectorial propio, color marca.
 */
function LinkedInGlyph({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      style={color ? { color } : undefined}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

const LINKS: {
  slug: string;
  label: string;
  brandColor: string;
  getHref: (p: ContactSocialLinksProps) => string;
  external: boolean;
  /** Simple Icons dejó de distribuir el SVG de LinkedIn en el CDN */
  useInlineIcon?: boolean;
}[] = [
  {
    slug: "gmail",
    label: "Enviar email",
    brandColor: "#EA4335",
    getHref: ({ email }) => `mailto:${email}`,
    external: false,
  },
  {
    slug: "github",
    label: "Abrir perfil de GitHub",
    brandColor: "#e6edf3",
    getHref: ({ githubUrl }) => githubUrl,
    external: true,
  },
  {
    slug: "linkedin",
    label: "Abrir perfil de LinkedIn",
    brandColor: "#0A66C2",
    getHref: ({ linkedinUrl }) => linkedinUrl,
    external: true,
    useInlineIcon: true,
  },
];

export default function ContactSocialLinks({
  email,
  githubUrl,
  linkedinUrl,
}: ContactSocialLinksProps) {
  const props = { email, githubUrl, linkedinUrl };

  return (
    <ul className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
      {LINKS.map((item) => {
        const href = item.getHref(props);
        const url = item.useInlineIcon ? null : getSimpleIconUrl(item.slug);

        return (
          <li key={item.slug}>
            <a
              href={href}
              aria-label={item.label}
              title={item.label}
              {...(item.external
                ? { target: "_blank" as const, rel: "noopener noreferrer" }
                : {})}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/20 hover:bg-white/10"
            >
              {item.useInlineIcon ? (
                <LinkedInGlyph
                  className="h-7 w-7 shrink-0"
                  color={item.brandColor}
                />
              ) : (
                <span
                  className="inline-block h-7 w-7 shrink-0"
                  style={{
                    WebkitMaskImage: `url(${url})`,
                    maskImage: `url(${url})`,
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    backgroundColor: item.brandColor,
                  }}
                  aria-hidden
                />
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
