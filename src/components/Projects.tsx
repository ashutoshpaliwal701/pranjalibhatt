import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github } from 'lucide-react';
import { projectData } from '../data/portfolioData';
import projectImg from '../img/pngwing.png'

interface ProjectsProps {
  openModal: (id: number) => void;
}

const Projects = ({ openModal }: ProjectsProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="section-heading"
        >
          <motion.h2 variants={variants} className="section-title">Projects</motion.h2>
          <motion.p variants={variants} className="section-subtitle">
            Showcasing my technical skills and creativity
          </motion.p>
        </motion.div>

        <motion.div 
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="card overflow-hidden group"
            >
              <div className="h-48 bg-primary-foreground/10 flex items-center justify-center">
                <Code size={64} className="text-primary-foreground/30 group-hover:text-primary-foreground/50 transition-colors duration-300" />
              </div>
              
              <div className="card-header">
                <h3 className="card-title">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs rounded-full bg-accent/20 text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="card-content">
                <p className="text-foreground/80">{project.description}</p>
              </div>
              
              <div className="card-footer justify-between">
                <button 
                  onClick={() => openModal(project.id)}
                  className="btn btn-outline btn-sm"
                >
                  View Details
                </button>
                
                <div className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm p-2"
                    >
                      <Github size={18} />
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm p-2"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;