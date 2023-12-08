'use client'

import Link from "next/link";
import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';

function NavLink({ link, linkName }: any) {
  const params = useParams();
  const pathname = usePathname();

  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const hashFragment = "/" + window.location.hash;
    setCurrentHash(hashFragment);
  }, [params]);

  return (
    <Link href={link} className={`flex py-1 px-4 font-medium hover:text-white rounded-md ease-in-out duration-300 border-[1px] border-transparent ${currentHash === link || pathname === link ? "active-nav-link" : ""}`}>
      {linkName}
    </Link>
  )
}

export default NavLink;