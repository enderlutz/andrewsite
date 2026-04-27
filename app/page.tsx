import { Hero } from "@/components/sections/hero";
import { ValueStatement } from "@/components/sections/value-statement";
import { Competencies } from "@/components/sections/competencies";
import { Numbers } from "@/components/sections/numbers";
import { Highlights } from "@/components/sections/highlights";
import { PageTeasers } from "@/components/sections/page-teasers";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueStatement />
      <Competencies />
      <Numbers />
      <Highlights />
      <PageTeasers />
    </>
  );
}
