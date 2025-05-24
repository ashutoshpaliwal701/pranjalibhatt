import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const categories = {
    frontend: "Frontend Development",
    backend: "Backend Development",
    design: "Design Tools",
    other: "Other Skills"
  };

  const categoryIcons = {
    frontend: "🌐",
    backend: "⚙️",
    design: "🎨",
    other: "🔧"
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    })
  };

  // Group skills by category
  const groupedSkills = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="section-heading"
        >
          <motion.h2 variants={variants} className="section-title">My Skills</motion.h2>
          <motion.p variants={variants} className="section-subtitle">
            Technologies and tools I work with
          </motion.p>
        </motion.div>

        <motion.div 
          variants={variants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              variants={variants}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                <h3 className="text-xl font-semibold">{categories[category as keyof typeof categories]}</h3>
              </div>
              
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-secondary-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        custom={skill.level}
                        variants={skillVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="h-full bg-gradient-to-r from-primary-foreground to-accent-foreground"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;