import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
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
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="section-heading"
        >
          <motion.h2 variants={variants} className="section-title">About Me</motion.h2>
          <motion.p variants={variants} className="section-subtitle">
            Get to know me better
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I am a dedicated Core Java Developer with a passion for building scalable 
              applications. My expertise lies in object-oriented programming, data structures, 
              and algorithms, which I leverage to create efficient and robust software solutions.
            </p>
            
            <p className="text-lg leading-relaxed">
              Currently pursuing my Bachelor's degree in Computer Science Engineering with a 
              specialization in IoT, I am constantly expanding my knowledge and skills in both 
              backend and frontend technologies.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {personalInfo.softSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-accent/30 text-accent-foreground rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-foreground" size={20} />
                <span>{personalInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-foreground" size={20} />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-foreground" size={20} />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="w-full h-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary-foreground/80 to-accent-foreground/80 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative text-white text-center p-6">
                <h3 className="text-3xl font-bold mb-3">Core Java Developer</h3>
                <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
                <p className="text-white/90">
                  Passionate about building scalable applications with clean and efficient code.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;