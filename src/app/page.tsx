import { highlights, owner, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="relative pb-20">
      <div className="ambient-orb ambient-orb--a" />
      <div className="ambient-orb ambient-orb--b" />
      <div className="ambient-orb ambient-orb--c" />

      <header className="container-shell sticky top-0 z-40 mt-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 md:px-6">
          <a href="#inicio" className="text-sm font-semibold text-foreground">
            {owner.name}
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="nav-link" href="#proyectos">
              Proyectos
            </a>
            <a className="nav-link" href="#stack">
              Stack
            </a>
            <a className="nav-link" href="#contacto">
              Contacto
            </a>
          </nav>
          <a
            href={`mailto:${owner.email}`}
            className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-white/15"
          >
            Hablemos
          </a>
        </div>
      </header>

      <section id="inicio" className="container-shell mt-8">
        <div className="glass card-lift rounded-3xl p-6 md:p-10">
          <div className="flex flex-wrap gap-2">
            <span className="pill">Portfolio 2026</span>
            <span className="pill">Disponible freelance</span>
            <span className="pill">{owner.city}</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Creo experiencias web{" "}
            <span className="gradient-text">atractivas y orientadas a resultados</span>
            .
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg">{owner.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      <section className="container-shell mt-8 grid gap-4 md:grid-cols-3">
        <article className="glass card-lift rounded-3xl p-6 md:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Lo que priorizo
          </p>
          <ul className="mt-4 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="text-sm text-foreground sm:text-base">
                • {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="glass card-lift rounded-3xl p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Estado actual
          </p>
          <p className="mt-3 text-lg font-semibold text-foreground">
            {owner.availability}
          </p>
          <p className="mt-2 text-sm">Respuesta promedio: dentro de 24hs.</p>
        </article>
      </section>

      <section className="container-shell mt-8 grid gap-4 lg:grid-cols-5">
        <article className="glass card-lift rounded-3xl p-6 lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Developer DNA
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-foreground">
            Construyo con foco en estética, claridad y negocio.
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base">
            Esta sección te diferencia porque muestra cómo pensás y ejecutás: no
            solo código, sino criterio de producto.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-(--muted)">
                Discover
              </p>
              <p className="mt-2 text-sm text-foreground">
                Entiendo objetivos y usuarios reales.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-(--muted)">
                Design
              </p>
              <p className="mt-2 text-sm text-foreground">
                Transformo necesidades en experiencia usable.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-wider text-(--muted)">
                Deliver
              </p>
              <p className="mt-2 text-sm text-foreground">
                Entrego producción con calidad y performance.
              </p>
            </div>
          </div>
        </article>

        <article className="glass terminal-glow card-lift rounded-3xl p-5 lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-(--muted)">
            Signature Console
          </p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4 font-mono text-xs leading-relaxed text-emerald-300">
            <p>&gt; init project --goal "impact + speed"</p>
            <p>&gt; stack add nextjs typescript tailwind</p>
            <p>&gt; optimize --lighthouse --a11y --seo</p>
            <p>&gt; deploy vercel --production</p>
            <p className="mt-2 text-cyan-300">status: ready_for_hiring = true</p>
          </div>
        </article>
      </section>

      <section id="proyectos" className="container-shell mt-16">
        <h2 className="section-title font-semibold">Proyectos destacados</h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base">
          Estructura pensada como case study: problema, solución, stack e impacto.
          Podés reemplazar textos y links sin tocar el diseño.
        </p>

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

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>

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

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-white/10"
                  >
                    Ver código
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="stack" className="container-shell mt-16">
        <h2 className="section-title font-semibold">Stack y herramientas</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contacto" className="container-shell mt-16">
        <div className="glass card-lift rounded-3xl p-6 md:p-10">
          <h2 className="section-title font-semibold">Hablemos de tu proyecto</h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base">
            ¿Querés una web rápida, moderna y lista para producción? Escribime y
            armamos una propuesta enfocada en resultados.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${owner.email}`}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Enviar email
            </a>
            <a
              href="#inicio"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
            >
              Volver arriba
            </a>
          </div>
        </div>
      </section>

      <footer className="container-shell mt-16 border-t border-white/10 pt-8 text-sm text-(--muted)">
        © {new Date().getFullYear()} {owner.name} · Portfolio Edition
      </footer>
    </main>
  );
}
