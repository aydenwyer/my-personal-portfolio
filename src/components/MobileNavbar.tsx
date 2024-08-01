"use client";

import { Menu } from "lucide-react";
import NavNameTag from "./NavNameTag";
import { useNavbarStateContext } from "@/context/navbar-state-context";
import clsx from "clsx";

const MobileNavbar = () => {
  const { navOpen, setNavOpen } = useNavbarStateContext();

  return (
    <div
      className={clsx(
        "fixed z-40 top-0 bg-[#1e1e1e]/50 backdrop-blur-md lg:hidden w-full p-6 border-b-[1px] border-[#292929] flex items-center justify-between transition-all duration-300 ease-in-out",
        navOpen ? "opacity-0" : "opacity-100"
      )}
    >
      <NavNameTag className="!p-0 !border-b-0" />
      <div
        onClick={() => setNavOpen(true)}
        className="p-3 cursor-pointer rounded-md border-[1px] border-[#292929]"
      >
        <Menu />
      </div>
    </div>
  );
};

export default MobileNavbar;
