'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NavLink({ link, linkName }: any) {
  const pathname = usePathname();

  return (
    <Link href={link} className={`flex py-1 px-4 font-medium hover:text-white rounded-md ease-in-out duration-300 border-[1px] ${pathname == link ? "bg-gradient-to-br from-white/10 to-white/5 border-neutral-600 text-white" : "border-transparent"}`}>
      {linkName}
    </Link>
  )
}