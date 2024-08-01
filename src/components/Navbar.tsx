"use client";

import React from "react";
import NavNameTag from "@/components/NavNameTag";
import NavLinkList from "@/components/NavLinkList";
import NavIcons from "@/components/NavIcons";
import { X } from "lucide-react";
import { useNavbarStateContext } from "@/context/navbar-state-context";
import clsx from "clsx";

const Navbar = () => {
  const { navOpen, setNavOpen } = useNavbarStateContext();

  return (
    <aside
      className={clsx(
        "fixed top-0 h-screen flex justify-between lg:static bg-[#202020] border-r-[1px] border-[#292929] w-72 px-4 py-6 flex-col z-50 transition-all duration-300 ease-in-out",
        navOpen ? "right-0" : "-right-72"
      )}
    >
      <div className="flex flex-col">
        <NavNameTag className="hidden lg:flex" />
        <div
          onClick={() => setNavOpen(false)}
          className="lg:hidden p-3 self-end cursor-pointer rounded-md border-[1px] border-[#292929]"
        >
          <X />
        </div>
        <NavLinkList />
      </div>

      <NavIcons />
    </aside>
  );
};

export default Navbar;
