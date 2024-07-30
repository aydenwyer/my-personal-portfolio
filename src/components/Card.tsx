import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Project = {
  image?: string;
  heading: string;
  paragraph: string;
  tech?: string[];
  redirect?: string;
  imageWidth?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
};

const Card = ({
  heading,
  paragraph,
  tech,
  image,
  imageWidth,
  redirect,
  className,
}: Project) => {
  return (
    <Link
      href={redirect || ""}
      target={redirect ? "_blank" : ""}
      className={clsx(
        "w-full hover:backdrop-blur-[2px] flex flex-col sm:flex-row gap-9 items-start card cursor-pointer p-5 rounded-md border-[1px] group border-transparent hover:bg-white/[.02] hover:border-[#303030] transition-all ease-out duration-150",
        className
      )}
    >
      {image && (
        <div
          className={clsx(
            "w-[170px] aspect-video bg-no-repeat bg-cover",
            imageWidth === "md"
              ? "!w-52"
              : imageWidth === "lg"
              ? "!w-60"
              : imageWidth === "xl"
              ? "!w-72"
              : imageWidth === "full"
              ? "w-full"
              : "!w-44"
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="flex flex-col gap-7 flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 items-end transition-all ease-out text-white">
            <h2 className="text-xl font-medium">{heading}</h2>
            <ArrowUpRight className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all duration-150 ease-in-out" />
          </div>
          <p>{paragraph}</p>
        </div>
        {tech && (
          <ul className="grid grid-flow-col auto-cols-min gap-2">
            {tech.map((item, key) => (
              <li
                className="place-self-start rounded-full px-2 py-1 border-[1px] border-[#3d3d3d] bg-[#2c2c2c] text-white text-sm"
                key={key}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
};

export default Card;
