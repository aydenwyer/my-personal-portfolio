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
      setActiveSection("Services");
    }
  }, [inView]);

  return (
    <section id="services" className="scroll-m-40" ref={ref}>
      <Heading
        preheader="services"
        header="What I can do for you"
        paragraph="I offer a variety of services that will help give your business the visual identity it deserves."
      />
      <div className="flex gap-2">
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
      </div>
    </section>
  );
};

export default ServicesSection;
