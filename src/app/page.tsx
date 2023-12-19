import type { Metadata } from "next";
import Services from "./components/sections/services/ServicesSection";
import Projects from "./components/sections/projects/ProjectSection";
import Contact from "./components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Ayden Wyer",
  description: "Welcome to my personal portfolio",
};

export default function Home() {
  return (
    <section className="flex flex-col gap-44">
      <Services />
      <Projects />
      <Contact />
    </section>
  );
}
