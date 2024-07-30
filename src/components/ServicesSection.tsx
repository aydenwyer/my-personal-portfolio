"use client";

import Heading from "./SectionHeading";
import Services from "@/lib/_services";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import Card from "./Card";

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
    <section id="about" className="scroll-m-40 w-full" ref={ref}>
      <Heading preheader="about" header="Here's my story" className="mb-10" />
      <p className="mb-5">
        As a Computer Science major at{" "}
        <strong className="text-white">Kansas State University</strong>, I bring
        a unique blend of technical expertise and creative flair to the table.
        With a focus on{" "}
        <strong className="text-white">software development</strong> and{" "}
        <strong className="text-white">design</strong>, I thrive on crafting
        visually stunning applications and websites that not only{" "}
        <strong className="text-white">function flawlessly</strong> but also{" "}
        <strong className="text-white">captivate audiences</strong>. With a keen
        eye for detail, I'm driven to push boundaries and deliver impactful
        solutions that leave a lasting impression.
      </p>
      <p>
        When I'm not applying my expertise, I'm involved in{" "}
        <strong className="text-white">videography, golf</strong> or{" "}
        <strong className="text-white">watersports</strong>.
      </p>
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
