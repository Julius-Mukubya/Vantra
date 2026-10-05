import { Download } from "@/components/download";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import {
  Audiences,
  Features,
  HowItWorks,
  Safety,
  TrustBadges,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <TrustBadges />
        <Audiences />
        <Safety />
        <Download />
      </main>
      <Footer />
    </>
  );
}
