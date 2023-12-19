import Heading from '../SectionHeading'
import Projects from '../../../_projects'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    <section id='projects' className='scroll-m-28'>
        <Heading preheader="projects" header="What I've been up to" paragraph="Here are the projects that I’ve completed to showcase my skills in coding and creating high-level design."/>
        <div className="flex flex-col gap-2">
        {
            Projects.map((project, idx) => (
                <ProjectCard key={idx} heading={project.projectName} paragraph={project.projectDesc} tech={project.tech}/>
            ))
        }
        </div>
    </section>
  )
}

export default ProjectSection;