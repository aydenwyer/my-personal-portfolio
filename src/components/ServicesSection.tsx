"use client";

import Heading from "./SectionHeading";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const ServicesSection = () => {
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	const { ref, inView } = useInView({
		threshold: 0.75,
	});

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection("About");
		}
	}, [inView]);

	return (
		<section
			id="about"
			className="scroll-m-40 w-full"
			ref={ref}
		>
			<Heading
				preheader="about"
				header="Here's my story"
				className="mb-10"
			>
				<div className="flex gap-10">
					<div>
						<div className="bg-gradient-to-b from-transparent via-[#666666] to-transparent h-full w-[2px] rounded-full" />
					</div>
					<div className="flex flex-col gap-3">
						<div className="relative">
							<div className="bg-[#666666] w-2 aspect-square absolute rounded-full -left-[45px] top-1/2" />
							<p>
								My software journey started out from my initial interest in the
								web. With a background in design, I wanted to take my website
								design skills a step further and learn the process of website
								development.
							</p>
						</div>

						<div className="relative">
							<div className="bg-[#666666] w-2 aspect-square absolute rounded-full -left-[45px] top-1/2" />
							<p>
								From there, I then studied Computer Science at Kansas State
								University, where I learned the ins and outs of programming
								through long nights of Object Oriented Programming, Data
								Structures and Algorithms, Software Architecture, and much more.
							</p>
						</div>

						<div className="relative">
							<div className="bg-[#666666] w-2 aspect-square absolute rounded-full -left-[45px] top-1/2" />
							<p>
								I now have the skills to create robust software with an eye
								catching design, and am striving to continue learning new
								technologies and adapting to future challenges.
							</p>
						</div>
					</div>
				</div>
			</Heading>
			{/* <div className="flex gap-2">
        {Services.map((service, key) => (
          <Card
            key={key}
            heading={service.serviceName}
            paragraph={service.serviceDescription}
            image="/test-image.png"
            imageWidth="full"
            className="items-center sm:flex-col flex-1"
          />
        ))}
      </div> */}
		</section>
	);
};

export default ServicesSection;
