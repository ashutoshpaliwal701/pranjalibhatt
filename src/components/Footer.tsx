import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-primary-foreground">
              Pranjali<span className="text-accent-foreground">.dev</span>
            </a>
            <p className="text-secondary-foreground mt-2">
              Core Java Developer | Problem Solver
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-secondary-foreground">
              &copy; {currentYear} Pranjali Bhatt. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="mt-4 btn btn-ghost btn-sm inline-flex items-center gap-2"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;