import { useActiveSectionContext } from "@/context/active-section-context";
import clsx from "clsx";
import Link from "next/link";
import React, { ReactNode } from "react";

export type Link = {
  linkName: string;
  link: string;
};

const NavLink = ({ link, children }: { link: Link; children?: ReactNode }) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <Link
      href={link.link}
      className={clsx(
        "flex gap-3 py-2 px-4 hover:text-white rounded-md ease-in-out duration-150 border-[1px] border-transparent",
        activeSection === link.linkName
          ? "text-white border-[#383838] bg-[#292929]"
          : "text-neutral-500"
      )}
      onClick={() => {
        setActiveSection(link.linkName);
        setTimeOfLastClick(Date.now());
      }}
    >
      {children}
      {link.linkName}
    </Link>
  );
};

export default NavLink;
