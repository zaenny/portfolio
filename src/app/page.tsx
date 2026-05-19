import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SiProjects from "@/components/sections/SiProjects";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Archiving from "@/components/sections/Archiving";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <SiProjects />
        <Skills />
        <Projects />
        <Archiving />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
