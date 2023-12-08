import React from 'react'
import NavNameTag from './NavNameTag'
import NavLinkList from './NavLinkList'
import NavIcons from './NavIcons'

export default function Navbar() {
  return (
    <aside className='bg-neutral-800 border-r-[1px] border-neutral-700 w-72 p-5 flex flex-col'>
      <div>
        <NavNameTag/>
        <NavLinkList/>  
      </div>
        
      <NavIcons />
    </aside>
  )
}