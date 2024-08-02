import fs from "fs";
import path from "path";
import Button from "@/components/Button";
import { ArrowLeft } from "lucide-react";

type Project = {
  name: string;
  company: string;
  mainImage: string;
  problem: string;
  ideation: string;
  functionality: string[];
  futurePlans: string[];
};

const page = async ({ params }: { params: { name: string } }) => {
  let projectPath = path.join(
    process.cwd(),
    `/src/lib/projects/${params.name}.json`
  );
  let file = fs.readFileSync(projectPath, "utf-8");
  const data: Project = JSON.parse(file);

  return (
    <section className="flex flex-col gap-10">
      <Button text="Back" iconLeft={<ArrowLeft width={18} />} />
      <div>
        <h3 className="text-sm uppercase tracking-[.2em] text-[#666666]">
          {data.company}
        </h3>
        <h1 className="font-bold text-2xl bg-gradient-to-r from-white to-[#bdbdbd] inline-block text-transparent bg-clip-text leading-none mb-3 sm:text-3xl sm:leading-snug sm:py-0">
          {data.name}
        </h1>
      </div>

      <img src={data.mainImage} className="w-full rounded-md" />

      <div>
        <h2 className="font-medium text-lg text-[#dadada] inline-block leading-none mb-3 sm:text-xl sm:leading-snug sm:py-0">
          Problem
        </h2>
        <p>{data.problem}</p>
      </div>
      <div>
        <h2 className="font-medium text-lg text-[#dadada] inline-block leading-none mb-3 sm:text-xl sm:leading-snug sm:py-0">
          Solution
        </h2>
        <p>{data.ideation}</p>
      </div>
      <div>
        <h2 className="font-medium text-lg text-[#dadada] inline-block leading-none mb-3 sm:text-xl sm:leading-snug sm:py-0">
          Functionality
        </h2>
        <ul className="list-disc">
          {data.functionality.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-medium text-lg text-[#dadada] inline-block leading-none mb-3 sm:text-xl sm:leading-snug sm:py-0">
          Future plans
        </h2>
        <ul className="list-disc">
          {data.futurePlans.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
