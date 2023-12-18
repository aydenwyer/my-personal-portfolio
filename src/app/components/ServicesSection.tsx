import Heading from './SectionHeading';
import ServiceCard from './ServicesCard'
import Services from '../_services'

const ServicesSection = () => {
  return (
    <section id='services'>
        <Heading preheader="services" header="What I can do for you" paragraph="I offer a variety of services that will help give your business the visual identity it deserves."/>
        {
            Services.map((service, idx) => (
                <ServiceCard key={idx} heading={service.serviceName} paragraph={service.serviceDescription}/>
            ))
        }
    </section>
  )
}

export default ServicesSection