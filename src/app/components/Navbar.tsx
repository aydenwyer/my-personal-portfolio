import React from 'react'
import Image from 'next/image'
import MoonIcon from '../../../public/moon-icon.svg'
import HouseIcon from '../../../public/house-icon.svg'
import NavLink from './NavLink'

export default function Navbar() {
  return (
    <aside className='bg-neutral-800 border-r-[1px] border-neutral-700 w-72 p-5'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-2'>
                <div className='overflow-hidden rounded-full'>
                    <Image src='/profile_pic_small.png' width={43} height={43} alt="Picture of me"></Image>
                </div>
                <div>
                    <p className='text-sm'>Hello, I'm</p>
                    <p className='text-white text-lg leading-none font-medium'>Ayden Wyer</p>
                </div>
            </div>
            
            <div className='flex gap-2'>
                <button className='bg-gradient-to-br from-white/20 to-white/10 border-[1px] border-neutral-500 rounded-full p-1.5'>
                    <Image src={HouseIcon} width={15} height={15} alt="House Icon"></Image>
                </button>
            </div>
        </div>
        <div>
            <ul>
                <li>
                    <NavLink link="/services" linkName="Services"/>
                </li>
                <li>
                    <NavLink link='/projects' linkName="Projects"/>
                </li>
                <li>
                    <NavLink link='/contact' linkName="Contact"/>
                </li>
                <li>
                    <NavLink link='/Resume' linkName="Resume"/>
                </li>
                <li>
                    <NavLink link='/Blog' linkName="Blog"/>
                </li>
            </ul>
        </div>
    </aside>
  )
}