import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "../context/active-section-context";
import { Toaster } from "react-hot-toast";
import NavbarStateContextProvider from "@/context/navbar-state-context";
import MobileNavbar from "@/components/MobileNavbar";

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
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        <main className="flex flex-col lg:flex-row w-full lg:h-screen lg:w-screen">
          <ActiveSectionContextProvider>
            <NavbarStateContextProvider>
              <Navbar />
              <section className="bg-gradient-to-br from-[#202020] to-[#171717] grow overflow-y-auto overflow-x-hidden lg:overflow-y-scroll flex flex-col items-center scroll-smooth">
                <MobileNavbar />
                <div className="py-32 pt-40 lg:pt-32 flex flex-1 flex-col gap-32 w-full items-center px-6 max-w-[650px] scroll-m-0">
                  {children}
                </div>
                <Footer />
              </section>
            </NavbarStateContextProvider>
          </ActiveSectionContextProvider>
        </main>
      </body>
    </html>
  );
}
