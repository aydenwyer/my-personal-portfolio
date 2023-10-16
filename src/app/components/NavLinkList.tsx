import NavLink from './NavLink'

export default function NavNameTag() {
    interface Link {
        link: string,
        linkName: string
    }

    const navLinks: Link[] = [
        {
            link: "/services",
            linkName: "Services"
        },
        {
            link: "/projects",
            linkName: "Projects"
        },
        {
            link: "/Resume",
            linkName: "Resume"
        },
        {
            link: "/Blog",
            linkName: "Blog"
        },
    ]

    return (
            <div className='my-10'>
                <ul className='flex flex-col gap-1'>
                    {navLinks.map((link) => (
                        <li key={link.linkName}>
                            <NavLink link={link.link} linkName={link.linkName}/>
                        </li>
                    ))}
                </ul>
            </div>
    )
  }