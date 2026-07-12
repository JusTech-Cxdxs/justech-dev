// Home page — composes the sections in order. Sections are stubs until
// the sections build step; wiring is here so the architecture is real.
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Security from "@/components/sections/Security";
import Projects from "@/components/sections/Projects";
import SafeWeb from "@/components/sections/SafeWeb";
import Collaborations from "@/components/sections/Collaborations";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Security />
      <Experience />
      <Services />
      <Projects />
      <SafeWeb />
      <Collaborations />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
