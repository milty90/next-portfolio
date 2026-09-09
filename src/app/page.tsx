import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Stack from "./components/sections/Stack";
import Career from "./components/sections/Career";
import Portfolio from "./components/sections/Portfolio";
import Values from "./components/sections/Values";
import Contact from "./components/sections/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Stack />
        <Career />
        <Portfolio />
        <Values />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
