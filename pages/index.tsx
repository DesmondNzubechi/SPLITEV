import Image from "next/image";
import { Inter } from "next/font/google";
import { DesktopNav } from "@/components/NavBar/desktopNav";
import { VideoComponent } from "@/components/Video/video";
import { HeroSection } from "@/components/HeroSection/HeroSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#F5F5F5]">
      <DesktopNav />
      <HeroSection/>
   </main>
  );
}
