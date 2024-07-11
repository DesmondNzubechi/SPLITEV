import { Footer } from "@/components/Footer/Footer";
import { DesktopNav } from "@/components/NavBar/desktopNav";
import { MobileNav } from "@/components/NavBar/mobileNav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-primaryBg overflow-x-hidden">
        <DesktopNav />
        <MobileNav/>
        <Main />
      <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
