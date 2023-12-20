"use client";

import { NAV_LINKS } from "../../../../lib/_constants";
import { useActiveSectionContext } from "../../../../context/active-section-context";
import Link from 'next/link'
import clsx from 'clsx'

type Link = {
  linkName: string;
  link: string;
};

export default function NavNameTag() {
  const { activeSection, setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <nav className="my-10">
      <ul className="flex flex-col gap-1">
        {NAV_LINKS.map((link: Link, idx: number) => (
          <li key={idx}>
            <Link
              href={link.link}
              className={clsx(
                "flex py-1 px-4 hover:text-white rounded-sm ease-in-out duration-150 border-[1px] border-transparent",
                {
                  "active-nav-link": activeSection === link.linkName,
                }
              )}
              onClick={() => {
                  setActiveSection(link.linkName)
                  setTimeOfLastClick(Date.now())
                }
              }
            >
              {link.linkName}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
