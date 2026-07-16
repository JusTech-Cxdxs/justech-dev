import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Awards from "@/components/sections/Awards";
import Security from "@/components/sections/Security";
import Experience from "@/components/sections/Experience";
import Journey from "@/components/sections/Journey";
import Services from "@/components/sections/Services";
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
      <Journey />
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
