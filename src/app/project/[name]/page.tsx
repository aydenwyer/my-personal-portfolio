import fs from "fs";
import path from 'path'

const page = async ({ params }: { params: { name: string } }) => {
  let projectPath = path.join(process.cwd(), `/src/lib/projects/${params.name}.json`)
  let file = fs.readFileSync(projectPath, 'utf-8')
  const data = JSON.parse(file);

  return (
    <section className="flex flex-col gap-10">
      <div>
        <h3 className="text-sm uppercase tracking-[.2em] text-[#666666]">
          {data.company}
        </h3>
        <h1 className="font-bold text-2xl bg-gradient-to-r from-white to-[#bdbdbd] inline-block text-transparent bg-clip-text leading-none mb-3 sm:text-3xl sm:leading-snug sm:py-0">
          {data.name}
        </h1>
      </div>

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
    </section>
  );
};

export default page;
