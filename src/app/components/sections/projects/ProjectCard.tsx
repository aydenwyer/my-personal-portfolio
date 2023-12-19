import Image from 'next/image'

type Project = {
  heading: string,
  paragraph: string,
  tech: string[]
}

const ProjectCard = ({heading, paragraph, tech}: Project) => {
  return (
    <div className='max-w-xl flex gap-9 items-start card cursor-pointer p-5 rounded-md border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] transition-all ease-out duration-150'>
      <Image src="/test-image.png" width={170} height={100} alt="Test image"/>
      <div className='flex flex-col gap-7 '>
        <div className="flex flex-col gap-3">
          <div className='flex gap-3 items-center card-animation transition-all ease-out'>
            <h2 className='text-2xl font-medium text-white'>{heading}</h2>
            <Image src="/arrow-right.svg" width={15} height={10} alt="Arrow Right"/>
          </div>
          <p>{paragraph}</p>
        </div>
        <ul className='flex gap-3'>
          {
            tech.map((item, idx) => (
              <li className="rounded-full px-4 py-1 bg-gradient-to-br from-white/20 to-white/10 border-[1px] border-neutral-500 text-white text-sm" key={idx}>{item}</li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default ProjectCard