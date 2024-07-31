import clsx from "clsx";
import Image from "next/image";

export default function NavNameTag({ className }: { className?: string }) {
	return (
		<div
			className={clsx(
				"flex items-center justify-between border-b-[1px] border-[#292929] px-1 pb-6",
				className
			)}
		>
			<div className="flex gap-3">
				<div className="overflow-hidden rounded-full">
					<Image
						src="/profile_pic_small.png"
						width={43}
						height={43}
						alt="Picture of me"
					></Image>
				</div>
				<div>
					<p className="text-sm text-[#aeaeae]">Hello, I&apos;m</p>
					<p className="text-white text-lg leading-none font-medium">
						Ayden Wyer
					</p>
				</div>
			</div>

			{/* <div className="flex gap-2">
        <button className="bg-gradient-to-br from-white/20 to-white/10 border-[1px] border-neutral-500 rounded-full p-1.5">
          <Image
            src={HouseIcon}
            width={15}
            height={15}
            alt="House Icon"
          ></Image>
        </button>
      </div> */}
		</div>
	);
}
