import { Footer } from "@/components/Footer/Footer";
import { DesktopNav } from "@/components/NavBar/desktopNav";
import { MobileNav } from "@/components/NavBar/mobileNav";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
       <Head>
      
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
      </header>
      <body className="bg-primaryBg  overflow-x-hidden p-0 m-0">
        <Main />
      <Footer/>
        <NextScript />
      </body>
    </Html>
  );
}
