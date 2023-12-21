"use client"

import Heading from "../SectionHeading";
import ServiceCard from "./ServicesCard";
import Services from "../../../../lib/_services";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../../context/active-section-context";

const ServicesSection = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const {ref, inView} = useInView({
    threshold: 0.75,
  });  

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Services")
    }
  }, [inView])

  return (
    <section id="services" className="scroll-m-40" ref={ref}>
      <Heading
        preheader="services"
        header="What I can do for you"
        paragraph="I offer a variety of services that will help give your business the visual identity it deserves."
      />
      <div className="flex flex-col gap-2">
        {Services.map((service, idx) => (
          <ServiceCard
            key={idx}
            heading={service.serviceName}
            paragraph={service.serviceDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
