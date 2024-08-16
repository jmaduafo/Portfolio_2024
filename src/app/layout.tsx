import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshiRegular.className} bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText px-8`}>
        <Provider>
          <Navbar />
          <main className="">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
