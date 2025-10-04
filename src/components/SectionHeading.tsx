import clsx from "clsx";
import { ReactNode } from "react";

type Heading = {
  preheader: string;
  header: string;
  paragraph?: string;
  className?: string;
  children?: ReactNode
};

const SectionHeading = ({
  preheader,
  header,
  paragraph,
  children,
  className,
}: Heading) => {
  return (
    <div className={clsx("flex flex-col gap-4 w-full mb-20", className)}>
      <div>
        <h3 className="text-sm uppercase tracking-[.2em] text-[#666666]">
          {preheader}
        </h3>
        <h2 className="font-bold text-4xl bg-gradient-to-r from-white to-[#bdbdbd] inline-block text-transparent bg-clip-text leading-none pb-3 pt-2 sm:text-5xl sm:leading-snug sm:py-0">
          {header}
        </h2>
      </div>
      {paragraph && <p>{paragraph}</p>}
      {children}
    </div>
  );
};

export default SectionHeading;
