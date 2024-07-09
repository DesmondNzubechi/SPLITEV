import { Inter } from "next/font/google";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { HeroSectionHost } from "@/components/HeroSectionHost/HeroSectionHost";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-primaryBg">
      <HeroSectionHost />
      <HeroSection/>
   </main>
  );
}
