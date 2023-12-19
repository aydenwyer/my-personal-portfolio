import Heading from "../SectionHeading";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-m-28">
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
