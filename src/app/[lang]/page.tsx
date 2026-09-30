import { notFound } from "next/navigation";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { isLocale } from "@/i18n/config";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <>
      <Hero lang={lang} />
      <About lang={lang} />
      <Experience lang={lang} />
      <Projects lang={lang} />
      <Process lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
    </>
  );
}
