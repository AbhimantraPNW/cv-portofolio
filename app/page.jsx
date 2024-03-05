//components
import About from "@/components/About";
import Hero from "@/components/Hero"; 
import Service from "@/components/Service";
import Work from "@/components/Work";
import Hobby from "@/components/Hobby";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      <Hobby />
      <Cta />
    </main>
  );
}
