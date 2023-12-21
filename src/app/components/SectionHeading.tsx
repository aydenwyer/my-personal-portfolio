type Heading = {
  preheader: string;
  header: string;
  paragraph: string;
};

const SectionHeading = ({ preheader, header, paragraph }: Heading) => {
  return (
    <div className="flex flex-col gap-4 max-w-lg mb-20">
      <div>
        <h3 className="text-sm uppercase tracking-[.2em] text-[#dfdfdf]">
          {preheader}
        </h3>
        <h1 className="font-bold text-5xl bg-gradient-to-r from-white to-[#D0D0D0] inline-block text-transparent bg-clip-text leading-snug">
          {header}
        </h1>
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default SectionHeading;
