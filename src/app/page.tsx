import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import TechStack from '@/components/TechStack'
export default function Home() {
  return (
    <main>
      <Hero/>
      <Portfolio/>
      <TechStack></TechStack>
      <Footer/>
    </main>
  );
}
