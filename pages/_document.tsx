import { Footer } from "@/components/Footer/Footer";
import { DesktopNav } from "@/components/NavBar/desktopNav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="overflow-x-hidden bg-primaryBg">
        <DesktopNav/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
