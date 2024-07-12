
import { Inter } from "next/font/google";
import { HeroSectionDriver } from "@/components/HeroSectionDriver/HeroSectionDriver";
import { DesktopNav } from "@/components/NavBar/desktopNav";
import { MobileNav } from "@/components/NavBar/mobileNav";

const inter = Inter({ subsets: ["latin"] });

export default function Driver() {
  return (
    <main className="">
      <DesktopNav />
      <MobileNav/>
      <HeroSectionDriver />
   </main>
  );
}
