import NavLink from './NavLink';
import { NAV_LINKS } from '../_constants';

type Link = {
    linkName: string,
    link: string
}

export default function NavNameTag() {    

    return (
            <div className='my-10'>
                <ul className='flex flex-col gap-1'>
                    {NAV_LINKS.map((link: Link, idx: number) => (
                        <li key={idx}>
                            <NavLink link={link.link} linkName={link.linkName}/>
                        </li>
                    ))}
                </ul>
            </div>
    )
  }