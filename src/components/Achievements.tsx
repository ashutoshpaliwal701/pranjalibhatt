import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { achievementsData } from '../data/portfolioData';
import { User } from 'lucide-react';

const Achievements = () => {
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
    <section id="achievements" className="py-20">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="section-heading"
        >
          <motion.h2 variants={variants} className="section-title">Achievements</motion.h2>
          <motion.p variants={variants} className="section-subtitle">
            Recognition and accomplishments along my journey
          </motion.p>
        </motion.div>

        <motion.div 
          variants={variants}
          className="max-w-3xl mx-auto space-y-8"
        >
          {achievementsData.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="card hover:shadow-md transition-shadow duration-300"
            >
              <div className="card-header flex flex-row items-start justify-between">
                <div>
                  <h3 className="card-title text-primary-foreground">{achievement.title}</h3>
                  <p className="text-secondary-foreground">{achievement.date}</p>
                </div>
                <div className="p-2 rounded-full bg-accent/10">
                  {<User size={20}/>}
                </div>
              </div>
              <div className="card-content">
                <p className="text-foreground/80">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;