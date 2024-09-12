import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";

export const metadata: Metadata = {
  title: "Jasmine Maduafokwa Portfolio 2024",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshiRegular.className} duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText px-[6vw]`}
      >
        <LenisScroll>
          {/* GSAP SCROLLTRIGGER */}
          <Scroll>
            {/* ENABLES DARK AND LIGHT MODE */}
            <Provider>
              <main className="">{children}</main>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
