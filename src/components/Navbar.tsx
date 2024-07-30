import React from "react";
import NavNameTag from "@/components/NavNameTag";
import NavLinkList from "@/components/NavLinkList";
import NavIcons from "@/components/NavIcons";

export default function Navbar() {
  return (
    <aside className="hidden lg:flex bg-[#202020] border-r-[1px] border-[#292929] w-72 px-4 py-6 flex-col z-50">
      <div>
        <NavNameTag />
        <NavLinkList />
      </div>

      <NavIcons />
    </aside>
  );
}
