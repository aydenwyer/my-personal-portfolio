import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ActiveSectionContextProvider from "../context/active-section-context";
import { Toaster } from "react-hot-toast";
import NavNameTag from "@/components/NavNameTag";
import { Menu } from "lucide-react";

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
					"h-full bg-[#202020] text-[#b1b1b1] font-regular scroll-smooth"
				}
			>
				<Toaster position="bottom-center" />
				<main className="flex flex-col lg:flex-row w-full lg:h-screen lg:w-screen">
					<ActiveSectionContextProvider>
						<Navbar />
						<section className="bg-gradient-to-br from-[#202020] to-[#171717] grow overflow-y-auto overflow-x-hidden lg:overflow-y-scroll flex flex-col items-center scroll-smooth">
							<div className="w-full p-6 border-b-[1px] border-[#292929] flex items-center justify-between">
								<NavNameTag className="!p-0 border-b-0"/>
                <div className="p-3 cursor-pointer rounded-md border-[1px] border-[#292929]">
                  <Menu />
                </div>
							</div>
							<div className="z-10 flex flex-col gap-32 w-full items-center h-fit px-6 max-w-[650px]">
								{children}
							</div>
							<Footer />
							{/* <div className="background-lines fixed left-0 right-0 top-0 bottom-0 z-0 opacity-[.2]"></div>
              <div className="background-lines fixed left-0 right-0 top-0 bottom-0 z-0 opacity-[.2] rotate-90"></div> */}
						</section>
					</ActiveSectionContextProvider>
				</main>
			</body>
		</html>
	);
}
