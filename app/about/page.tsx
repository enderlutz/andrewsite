import { About } from "@/components/sections/about";
import { PullQuote } from "@/components/sections/pull-quote";
import { Moments } from "@/components/sections/moments";

export const metadata = {
  title: "About — Andrew Bieh-Mintah",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <PullQuote />
      <Moments />
    </>
  );
}
