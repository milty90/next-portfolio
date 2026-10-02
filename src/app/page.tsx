import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Stack from "./components/sections/Stack";
import Career from "./components/sections/Career";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stack />
        <About />
        <Career />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
