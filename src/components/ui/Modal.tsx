import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { ProjectType, ExperienceType, EducationType } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    type: 'project' | 'experience' | 'education';
    data: ProjectType | ExperienceType | EducationType | null;
  };
}

const Modal = ({ isOpen, onClose, content }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      // Re-enable body scroll
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const renderModalContent = () => {
    if (!content.data) return null;

    switch (content.type) {
      case 'project':
        return renderProjectContent(content.data as ProjectType);
      case 'experience':
        return renderExperienceContent(content.data as ExperienceType);
      case 'education':
        return renderEducationContent(content.data as EducationType);
      default:
        return null;
    }
  };

  const renderProjectContent = (project: ProjectType) => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-secondary-foreground">{project.description}</p>
      </div>

      {project.detailedDescription && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p>{project.detailedDescription}</p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 space-y-1">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.github || project.demo) && (
        <div className="flex justify-start gap-4 mt-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline flex items-center gap-2"
            >
              <Github size={18} />
              <span>View Code</span>
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center gap-2"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}
    </>
  );

  const renderExperienceContent = (experience: ExperienceType) => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">{experience.position}</h2>
        <p className="text-xl text-secondary-foreground">{experience.company}</p>
        <p className="text-secondary-foreground">{experience.duration}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p>{experience.description}</p>
      </div>

      {experience.details && experience.details.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Responsibilities & Achievements</h3>
          <ul className="list-disc pl-5 space-y-1">
            {experience.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}

      {experience.technologies && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );

  const renderEducationContent = (education: EducationType) => (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-1">{education.degree}</h2>
        <p className="text-xl text-secondary-foreground">{education.institution}</p>
        <p className="text-secondary-foreground">{education.duration}</p>
      </div>

      {education.description && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <p>{education.description}</p>
        </div>
      )}

      {education.details && education.details.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Details</h3>
          <ul className="list-disc pl-5 space-y-1">
            {education.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-xl"
          >
            <div className="sticky top-0 flex justify-end p-4 border-b border-border bg-background/80 backdrop-blur-sm z-10">
              <button 
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              {renderModalContent()}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;