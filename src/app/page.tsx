import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { DesignBackground } from "@/components/sections/DesignBackground";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { Growth } from "@/components/sections/Growth";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Journey />
      <Skills />
      <DesignBackground />
      <Experience />
      <Work />
      <Services />
      <Approach />
      <Growth />
    </main>
  );
}
