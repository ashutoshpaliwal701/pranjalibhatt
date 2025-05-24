import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { educationData } from '../data/portfolioData';

interface EducationProps {
  openModal: (id: number) => void;
}

const Education = ({ openModal }: EducationProps) => {
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
    <section id="education" className="py-20">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="section-heading"
        >
          <motion.h2 variants={variants} className="section-title">Education</motion.h2>
          <motion.p variants={variants} className="section-subtitle">
            My academic journey and qualifications
          </motion.p>
        </motion.div>

        <motion.div 
          variants={variants}
          className="max-w-3xl mx-auto space-y-8"
        >
          {educationData.map((education) => (
            <motion.div
              key={education.id}
              variants={itemVariants}
              onClick={() => openModal(education.id)}
              className="card cursor-pointer hover:shadow-md transition-shadow duration-300 hover:border-primary-foreground/30"
            >
              <div className="card-header flex flex-row items-start justify-between">
                <div>
                  <h3 className="card-title text-primary-foreground">{education.degree}</h3>
                  <p className="card-description text-base">{education.institution}</p>
                </div>
                <div className="p-2 rounded-full bg-primary/10">
                  <GraduationCap size={24} className="text-primary-foreground" />
                </div>
              </div>
              <div className="card-content space-y-3">
                <div className="flex items-center gap-2 text-secondary-foreground">
                  <Calendar size={16} />
                  <span>{education.duration}</span>
                </div>
                {education.description && (
                  <p className="text-foreground/80">{education.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;