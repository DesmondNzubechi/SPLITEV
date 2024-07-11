import { Inter } from "next/font/google";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { HeroSectionHost } from "@/components/HeroSectionHost/HeroSectionHost";
import { HeroSectionDriver } from "@/components/HeroSectionDriver/HeroSectionDriver";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <HeroSectionHost />
   </main>
  );
}
