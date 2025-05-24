import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

interface ExperienceProps {
  openModal: (id: number) => void;
}

const Experience = ({ openModal }: ExperienceProps) => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="section-heading"
        >
          <motion.h2 variants={variants} className="section-title">Work Experience</motion.h2>
          <motion.p variants={variants} className="section-subtitle">
            My professional journey so far
          </motion.p>
        </motion.div>

        <motion.div 
          variants={variants}
          className="max-w-3xl mx-auto relative"
        >
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              className={`relative mb-12 md:mb-0 md:pb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-12 md:mr-auto md:ml-0' : 'md:text-left md:pl-12 md:ml-auto md:mr-0'
              } md:w-[calc(50%-24px)]`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 w-4 h-4 rounded-full bg-primary-foreground border-4 border-background left-[calc(50%-8px)] md:left-auto md:right-0 md:translate-x-6"></div>
              
              <div 
                onClick={() => openModal(experience.id)}
                className="card cursor-pointer hover:shadow-md transition-shadow duration-300 hover:border-primary-foreground/30"
              >
                <div className="card-header pb-3">
                  <h3 className="card-title text-primary-foreground">{experience.position}</h3>
                  <p className="card-description text-base">{experience.company}</p>
                </div>
                <div className="card-content space-y-3">
                  <div className="flex items-center gap-2 text-secondary-foreground">
                    <Calendar size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <p className="text-foreground/80">{experience.description}</p>
                </div>
                <div className="card-footer justify-end">
                  <button className="text-primary-foreground hover:text-primary-foreground/80 transition-colors flex items-center gap-1">
                    <span>See details</span>
                    <Briefcase size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;