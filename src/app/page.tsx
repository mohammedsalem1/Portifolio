import { Hero } from "@/components/hero/hero";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { MoreProjects } from "@/components/sections/more-projects";
import { Process } from "@/components/sections/process";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <MoreProjects />
      <Process />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
