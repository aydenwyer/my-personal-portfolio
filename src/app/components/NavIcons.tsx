import Image from 'next/image';
import { NAV_ICONS } from '../_constants'

type Icon = {
    name: string,
    src: string,
    link: string
}

const NavIcons = () => {
  return (
    <div className="mt-auto flex justify-between">
        <div className="flex gap-3">
            {NAV_ICONS.map((icon: Icon, idx) => (
                <a target="_blank" href={icon.link} className='cursor-pointer'><Image key={idx} src={icon.src} width={18} height={18} alt={icon.name} /></a>
            ))}
        </div>
        <div>
            <Image src="/logo.png" width={43.41} height={18} alt="Ayden Wyer Logo"/>
        </div>
    </div>
  )
}

export default NavIcons