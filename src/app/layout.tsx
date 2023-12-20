import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ActiveSectionContextProvider from "../../context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayden Wyer",
  description: "Welcome to my personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          inter.className +
          "h-full bg-neutral-900 text-[#b1b1b1] font-regular scroll-smooth"
        }
      >
        <main className="flex h-[100vh] w-[100vw]">
          <ActiveSectionContextProvider>
            <Navbar />
            <section className="bg-gradient-to-br from-[#2d2d2d] to-[#171717] grow overflow-y-auto flex justify-center pt-32 scroll-smooth">
              <div className="z-10 flex flex-col gap-32 w-full items-center h-fit">
                {children}
                <Footer />
              </div>
              <div className="background-lines fixed left-0 right-0 top-0 bottom-0 z-0 opacity-[.4]"></div>
            </section>
          </ActiveSectionContextProvider>
        </main>
      </body>
    </html>
  );
}
