import { ArrowDown, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks, personalInfo } from '../data/portfolioData';
import pranjaliBhatt from "../img/Pranjali.jpg"

const Hero = () => {


  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 z-0" />
      
      <div className="container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-6">
              Core Java Developer
            </span>
            
            <h1 className="h1 mb-4 text-foreground">
              Hi, I'm <span className="text-primary-foreground">Pranjali Bhatt</span>
            </h1>
            
            <p className="text-xl text-secondary-foreground max-w-xl mb-8">
              {personalInfo.summary}
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
              {socialLinks.map((link) => (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline flex items-center gap-2"
                >
                  {<User size={20}/>}
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
            
            <a 
              href="#contact"
              className="btn btn-primary btn-lg inline-flex items-center gap-2"
            >
              Let's Connect
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-foreground/80 to-accent-foreground/80 flex items-center justify-center text-white text-5xl font-bold">
                <img src={pranjaliBhatt} className='w-full h-full rounded-full object-cover'/>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about"
            className="flex flex-col items-center text-secondary-foreground hover:text-primary-foreground transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;