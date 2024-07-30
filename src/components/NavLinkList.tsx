"use client";

import { NAV_LINKS } from "@/lib/_constants";
import NavLink, { Link } from "./NavLink";
import { FolderGit2, Mail, NotepadText, UserCog } from "lucide-react";

export default function NavNameTag() {
  return (
    <nav className="my-6">
      <ul className="flex flex-col gap-1">
        {NAV_LINKS.map((link: Link, key: number) => (
          <li key={key}>
            <NavLink link={link}>
              {link.linkName === "Services" ? (
                <UserCog width={15} />
              ) : link.linkName === "Projects" ? (
                <FolderGit2 width={15} />
              ) : link.linkName === "Contact" ? (
                <Mail width={15} />
              ) : link.linkName === "Resume" ? (
                <NotepadText width={15} />
              ) : (
                ""
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
