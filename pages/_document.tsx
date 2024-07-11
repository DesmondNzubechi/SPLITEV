import { Footer } from "@/components/Footer/Footer";
import { DesktopNav } from "@/components/NavBar/desktopNav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-primaryBg overflow-x-hidden mr-[-12%] mr-0">
        <DesktopNav/>
        <Main />
      <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
