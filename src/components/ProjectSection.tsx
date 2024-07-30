"use client";

import Heading from "./SectionHeading";
import Projects from "@/lib/_projects";
import Card from "./Card";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

const ProjectSection = () => {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Projects");
    }
  }, [inView]);

  return (
    <section id="projects" className="scroll-m-28" ref={ref}>
      <Heading
        preheader="projects"
        header="What I've been up to"
        paragraph="Here are the projects that I’ve completed to showcase my skills in coding and creating high-level design."
      />
      <div className="flex flex-col gap-2">
        {Projects.map((project, key) => (
          <Card
            key={key}
            image={project.image}
            heading={project.projectName}
            paragraph={project.projectDesc}
            tech={project.tech}
            redirect={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
