import Heading from "../SectionHeading";
import ServiceCard from "./ServicesCard";
import Services from "../../../../lib/_services";

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-m-40">
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
