import Header from "./components/layout/Header";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
