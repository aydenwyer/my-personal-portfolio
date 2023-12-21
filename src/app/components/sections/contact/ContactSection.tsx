"use client"

import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../../../../context/active-section-context";
import Heading from "../../SectionHeading";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

const ContactSection = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const {ref, inView} = useInView({
    threshold: 0.5,
  });  

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Contact")
    }
  }, [inView])

  return (
    <section id="contact" className="scroll-m-28" ref={ref}>
      <Heading
        preheader="contact"
        header="Get in touch"
        paragraph="Shoot me an email to get started on a project, or tell me how your day's going. I don't bite!"
      />
      <ContactForm />
    </section>
  );
};

export default ContactSection;
