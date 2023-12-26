import Image from "next/image";
import Link from "next/link"

type Project = {
  image: string;
  heading: string;
  paragraph: string;
  tech: string[];
  link: string;
};

const ProjectCard = ({ heading, paragraph, tech, image, link }: Project) => {
  return (
    <Link href={link} className="max-w-xl flex flex-col sm:flex-row gap-9 items-start card cursor-pointer p-5 rounded-md border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] transition-all ease-out duration-150">
      <div className="w-[170px] h-[100px] bg-no-repeat bg-cover" style={{backgroundImage: `url(${image})`}}></div>
      <div className="flex flex-col gap-7 flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center card-animation transition-all ease-out">
            <h2 className="text-xl font-medium text-white">{heading}</h2>
            <Image
              src="/arrow-right.svg"
              width={15}
              height={10}
              alt="Arrow Right"
            />
          </div>
          <p>{paragraph}</p>
        </div>
        <ul className="grid grid-flow-col auto-cols-min gap-3">
          {tech.map((item, idx) => (
            <li
              className="place-self-start rounded-full px-4 py-1 bg-gradient-to-br from-white/20 to-white/10 border-[1px] border-neutral-500 text-white text-sm"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ProjectCard;
