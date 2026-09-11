import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Stack from "../components/sections/Stack";
import Portfolio from "../components/sections/Portfolio";
import Values from "../components/sections/Values";
import Contact from "../components/sections/Contact";
import Career from "../components/sections/Career";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Career />
      <Portfolio />
      <Values />
      <Contact />
    </main>
  );
}
