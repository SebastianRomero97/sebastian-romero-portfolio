import Image from "next/image";
import ContactSocialLinks from "@/components/ContactSocialLinks";
import ProjectStackIcons from "@/components/ProjectStackIcons";
import SkillTechCard from "@/components/SkillTechCard";
import {
  educationSection,
  hero,
  owner,
  projects,
  skillShowcase,
} from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative pb-20">
      {/* Brillos laterales fijos al viewport (siguen visibles al hacer scroll) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div className="ambient-orb ambient-orb--a" />
        <div className="ambient-orb ambient-orb--b" />
        <div className="ambient-orb ambient-orb--c" />
      </div>

      <div className="relative z-10">
      <header className="container-shell sticky top-0 z-40 mt-4 overflow-visible">
        <div className="glass flex items-center justify-center overflow-visible rounded-2xl px-4 py-3 md:px-6">

          <nav className="hidden items-center gap-5 md:flex lg:gap-6">
            <a className="nav-link" href="#proyectos">
              Proyectos
            </a>
              <a className="nav-link" href="#">
                Sobre Mi
              </a>
            
            <a className="nav-link" href="#educacion">
              Educación
            </a>
       
            <a className="nav-link" href="#stack">
              Stack
            </a>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <section id="inicio" className="container-shell mt-8">
        <div className="hero-card glass card-lift relative overflow-hidden rounded-3xl p-6 md:p-10">
          <div className="relative z-2">
            <p className="text-left text-[0.65rem] font-bold uppercase tracking-[0.28em] text-(--muted)">
              <span className="text-foreground">{hero.eyebrow.split(" - ")[0]}</span>
              <span className="text-(--accent-orange)"> - </span>
              <span>{hero.eyebrow.split(" - ")[1] ?? ""}</span>
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-10 xl:gap-14">
              <div className="flex shrink-0 justify-center lg:justify-start">
                <div className="hero-photo-frame overflow-hidden rounded-2xl border border-white/15 bg-linear-to-b from-white/[0.07] to-transparent p-[3px] shadow-[0_24px_48px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
                  <div className="overflow-hidden rounded-[13px] bg-[#0a0a0c]">
                    <Image
                      src={owner.profileImage}
                      alt={`Retrato de ${owner.name}`}
                      width={400}
                      height={500}
                      className="h-auto w-full max-w-[260px] object-cover object-[center_15%] sm:max-w-[280px] lg:max-w-[min(280px,32vw)]"
                      sizes="(max-width: 1024px) 280px, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-center">
                <h1 className="text-center text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground sm:text-4xl sm:leading-[1.08] lg:text-left lg:text-5xl xl:text-6xl">
                  <span className="block">{owner.nameLines[0]}</span>
                  <span className="gradient-text block">{owner.nameLines[1]}</span>
                  <span className="block text-(--brand-soft)">{owner.nameLines[2]}</span>
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-center text-base font-medium leading-relaxed text-(--muted) sm:text-lg md:text-xl lg:mx-0 lg:text-left">
                  {owner.role}
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        id="stack"
        className="container-shell mt-8 scroll-mt-28"
        aria-label="Tecnologías y herramientas"
      >
        <article className="glass card-lift rounded-3xl p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Stack
          </p>
          <h2 className="section-title mt-2 font-semibold text-foreground">
            Tecnologías
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {skillShowcase.map((skill) => (
              <SkillTechCard
                key={skill.name}
                name={skill.name}
                brandColor={skill.brandColor}
              />
            ))}
          </div>
        </article>
      </section>


      <section
        id="proyectos"
        className="container-shell mt-16 scroll-mt-28"
        aria-label="Proyectos destacados"
      >
        <article className="glass card-lift rounded-3xl p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Proyectos
          </p>
          <h2 className="section-title mt-2 font-semibold text-foreground">
            Proyectos destacados
          </h2>


          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="glass card-lift rounded-3xl p-5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <span className="pill">
                  {project.status === "live" ? "Live" : "Coming soon"}
                </span>
              </div>
              <p className="mt-4 text-sm">{project.summary}</p>
              <p className="mt-2 text-sm text-foreground">{project.impact}</p>

              <ProjectStackIcons stack={project.stack} />

              <div className="mt-6 flex flex-wrap gap-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white/15"
                  >
                    Ver deploy
                  </a>
                ) : (
                  <span className="rounded-xl border border-white/10 px-4 py-2 text-sm text-(--muted)">
                    Deploy pendiente
                  </span>
                )}

              </div>
            </article>
          ))}
          </div>
        </article>
      </section>

      <section
        id="formacion"
        className="container-shell mt-16 scroll-mt-28"
        aria-label="Educación"
      >
        <article
          id="educacion"
          className="glass card-lift rounded-3xl p-6 md:p-10"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Formación
          </p>
          <h2 className="section-title mt-2 font-semibold text-foreground">
            Educación
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-(--muted)">
            Carreras y certificaciones que respaldan mi perfil técnico.
          </p>

          <div className="mt-8 border-l-2 border-white/15 pl-5">
            <p className="text-base leading-relaxed md:text-lg">
              <span className="font-semibold text-foreground">
                {educationSection.institution}
              </span>
              <span className="text-(--muted)">
                {" "}
                – {educationSection.detail}
              </span>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-black/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:max-w-lg md:max-w-xl">
              <Image
                src={educationSection.certificateSrc}
                alt={educationSection.certificateAlt}
                width={800}
                height={533}
                className="h-auto w-full object-contain"
                sizes="(max-width: 640px) min(100vw - 4rem, 28rem), (max-width: 768px) 32rem, 36rem"
                priority={false}
              />
            </div>
          </div>
        </article>
      </section>



      <section
        id="contacto"
        className="container-shell mt-16 scroll-mt-28"
        aria-label="Contacto"
      >
        <div className="glass card-lift rounded-3xl p-6 md:p-10">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Contacto
          </p>
          <h2 className="section-title mt-2 font-semibold text-foreground">
            ¿Tenés un desafío técnico o un equipo que sume talento?
          </h2>

          <p className="mt-16 text-center text-xs font-semibold uppercase tracking-[0.2em] text-(--muted) sm:mt-20 md:mt-24">
            Puntos de contacto
          </p>
          <ContactSocialLinks
            email={owner.email}
            githubUrl={owner.githubUrl}
            linkedinUrl={owner.linkedinUrl}
          />
        </div>
      </section>

      <footer className="container-shell mt-16 border-t border-white/10 pt-8 text-sm text-(--muted)">
        © {new Date().getFullYear()} {owner.name} · Portfolio Edition
      </footer>
      </div>
    </main>
  );
}
