import clsx from "clsx";

type Heading = {
  preheader: string;
  header: string;
  paragraph?: string;
  className?: string;
};

const SectionHeading = ({
  preheader,
  header,
  paragraph,
  className,
}: Heading) => {
  return (
    <div className={clsx("flex flex-col gap-4 w-full mb-20", className)}>
      <div>
        <h3 className="text-sm uppercase tracking-[.2em] text-[#666666]">
          {preheader}
        </h3>
        <h1 className="font-bold text-5xl bg-gradient-to-r from-white to-[#bdbdbd] inline-block text-transparent bg-clip-text leading-none pb-3 pt-2 sm:leading-snug sm:py-0">
          {header}
        </h1>
      </div>
      {paragraph && <p>{paragraph}</p>}
    </div>
  );
};

export default SectionHeading;
