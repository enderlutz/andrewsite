import { Hero } from "@/components/sections/hero";
import { Competencies } from "@/components/sections/competencies";
import { Numbers } from "@/components/sections/numbers";
import { Highlights } from "@/components/sections/highlights";
import { PageTeasers } from "@/components/sections/page-teasers";

export default function Home() {
  return (
    <>
      <Hero />
      <Competencies />
      <Numbers />
      <Highlights />
      <PageTeasers />
    </>
  );
}
