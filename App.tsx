import React, { useState } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import { FlaskConical, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-lab-bg text-lab-text overflow-x-hidden bg-grid-paper bg-[length:40px_40px]">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-chem-glassBorder h-16 flex items-center px-6 md:px-12 justify-between">
        <div className="flex items-center gap-2 text-chem-accent z-50 relative">
          <FlaskConical size={20} />
          <span className="font-serif font-bold text-lg text-lab-text tracking-wider">KX.PHAN</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-xs font-sans font-semibold tracking-widest text-lab-dim">
           <a href="#hero" className="hover:text-chem-accent transition-colors">MAIN</a>
           <a href="#experience" className="hover:text-chem-accent transition-colors">LOGS</a>
           <a href="#skills" className="hover:text-chem-accent transition-colors">INV</a>
           <a href="#research" className="hover:text-chem-accent transition-colors">R&D</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden z-50 relative text-lab-text p-2 hover:bg-lab-light rounded-full transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-lab-surface/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
           <a href="#hero" onClick={handleNavClick} className="text-2xl font-serif font-medium hover:text-chem-accent transition-colors">MAIN</a>
           <a href="#experience" onClick={handleNavClick} className="text-2xl font-serif font-medium hover:text-chem-accent transition-colors">LOGS</a>
           <a href="#skills" onClick={handleNavClick} className="text-2xl font-serif font-medium hover:text-chem-accent transition-colors">INVENTORY</a>
           <a href="#research" onClick={handleNavClick} className="text-2xl font-serif font-medium hover:text-chem-accent transition-colors">R&D</a>
        </div>
      </nav>

      <main className="pt-16">
        <div id="hero">
            <Hero />
        </div>
        
        {/* Transition Divider: The Hull Curve (Light Blue -> White) */}
        <div className="relative h-12 md:h-24 w-full overflow-hidden">
             <svg viewBox="0 0 1440 100" className="absolute bottom-0 w-full h-full text-lab-surface fill-current" preserveAspectRatio="none">
                 <path d="M0,100 C480,100 480,0 960,0 C1440,0 1440,100 1440,100 Z"></path>
             </svg>
        </div>

        <div id="experience" className="bg-lab-surface">
             <Experience />
        </div>

        <div id="skills" className="bg-lab-surface relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-chem-border to-transparent"></div>
            <Skills />
        </div>

        {/* Transition Divider: The Hull Curve Inverse (White -> Light Blue) */}
        <div className="relative h-12 md:h-24 w-full overflow-hidden bg-lab-surface">
             <svg viewBox="0 0 1440 100" className="absolute top-0 w-full h-full text-lab-bg fill-current transform rotate-180" preserveAspectRatio="none">
                 <path d="M0,100 C480,100 480,0 960,0 C1440,0 1440,100 1440,100 Z"></path>
             </svg>
        </div>

        <div id="education" className="bg-lab-bg">
            <Education />
        </div>

        <div id="research">
             <Portfolio />
        </div>
      </main>

      <footer className="py-12 border-t border-chem-border text-center font-sans text-xs text-lab-dim font-medium px-4">
        <p>ENGINEERED IN SINGAPORE © {new Date().getFullYear()}</p>
        <p className="mt-2 text-chem-accent font-bold">SAMPLE ANALYSIS COMPLETE</p>
      </footer>
    </div>
  );
};

export default App;