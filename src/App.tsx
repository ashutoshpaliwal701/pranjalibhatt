import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/ui/Modal';
import { ProjectType, ExperienceType, EducationType } from './types';
import { projectData, experienceData, educationData } from './data/portfolioData';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{
    type: 'project' | 'experience' | 'education';
    data: ProjectType | ExperienceType | EducationType | null;
  }>({
    type: 'project',
    data: null,
  });

  useEffect(() => {
    // Check user preference for dark mode
    if (localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Update HTML class for dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openModal = (type: 'project' | 'experience' | 'education', id: number) => {
    let data;
    
    if (type === 'project') {
      data = projectData.find(project => project.id === id) || null;
    } else if (type === 'experience') {
      data = experienceData.find(exp => exp.id === id) || null;
    } else {
      data = educationData.find(edu => edu.id === id) || null;
    }

    setModalContent({ type, data });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 ease-in-out">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience openModal={(id) => openModal('experience', id)} />
        <Education openModal={(id) => openModal('education', id)} />
        <Projects openModal={(id) => openModal('project', id)} />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}

export default App;