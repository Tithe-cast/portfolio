import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import BackendArchitecture from "@/components/BackendArchitecture";
import WorkingProcess from "@/components/WorkingProcess";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-16">
        <Hero />
        <Stats />
        <About />
        <Services />
        <BackendArchitecture />
        <WorkingProcess />
        <TechStack />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />    
      </div>
      <Footer />
    </main>
  );
}






