import Image from "next/image";

type ServiceCard = {
  heading: string;
  paragraph: string;
};

const ServicesCard = ({ heading, paragraph }: ServiceCard) => {
  return (
    <div className="cursor-pointer flex flex-col sm:flex-row gap-6 p-5 max-w-xl items-center rounded-md border-[1px] border-transparent hover:bg-white/[.06] hover:border-[#424242] transition-all ease-out duration-150 card">
      <img
        src="/test-image.png"
        alt="Test image"
        className="w-full sm:w-[270px]"
      />
      <div className="flex flex-col gap-2">
        <div className="flex gap-3 items-center card-animation transition-all ease-out">
          <h2 className="font-medium text-2xl text-white">{heading}</h2>
          <Image
            src="/arrow-right.svg"
            width={15}
            height={10}
            alt="Arrow Right"
          />
        </div>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
