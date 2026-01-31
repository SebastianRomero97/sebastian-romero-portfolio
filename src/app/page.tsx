import Abaut from "@/components/sections/About/Abaut";
import Contact from "@/components/sections/Contact/Contact";
import Projects from "@/components/sections/Projects/projects";
import Skills from "@/components/sections/Skills/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <Abaut/>
      <Projects/>
      <Skills/>
      <Contact/>
      </main>
    </div>
  );
}
