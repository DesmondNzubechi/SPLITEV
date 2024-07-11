
import { Inter } from "next/font/google";
import { HeroSectionDriver } from "@/components/HeroSectionDriver/HeroSectionDriver";

const inter = Inter({ subsets: ["latin"] });

export default function Driver() {
  return (
    <main className="">
      <HeroSectionDriver />
   </main>
  );
}
