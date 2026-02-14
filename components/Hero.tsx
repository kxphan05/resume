import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowDownRight, CircleDot, Database, Binary } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] flex flex-col pt-6 pb-12 px-4 md:px-12 relative overflow-hidden">
      
      {/* Grid Layout - Bauhaus inspired asymmetry */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-px bg-chem-border border border-chem-border max-w-7xl mx-auto w-full shadow-sm">
        
        {/* Cell 1: Large Title (Spans 8 cols) */}
        <div className="lg:col-span-8 bg-lab-surface p-6 md:p-16 flex flex-col justify-center relative">
          <div className="hidden md:flex absolute top-6 left-6 items-center gap-2 text-chem-accent font-sans font-bold text-xs tracking-widest">
            <CircleDot size={12} />
            <span>SUBJ: KANG XUN PHAN</span>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tighter text-lab-text mb-6 mt-4 md:mt-0">
            AI <br />
            <span className="italic text-lab-dim font-serif">ENG</span>INEER
          </h1>

          <p className="font-sans text-sm md:text-base text-lab-dim max-w-md leading-relaxed border-l-4 border-chem-accent pl-4">
            Blending laboratory precision with algorithmic rhythm. 
            Designing intelligent systems at the intersection of rigorous research and fluid deployment.
          </p>

          <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="group relative px-6 py-3 bg-lab-text text-white font-sans text-sm font-bold tracking-wider hover:bg-chem-accent transition-colors shadow-md hover:shadow-lg w-full md:w-auto text-center">
              INIT_CONTACT
            </a>
            <div className="flex gap-6 w-full md:w-auto justify-center md:justify-start">
              <a href={SOCIAL_LINKS.github} className="font-sans font-medium text-xs text-lab-dim hover:text-chem-accent border-b-2 border-transparent hover:border-chem-accent transition-all pb-1">
                GITHUB_REPO
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="font-sans font-medium text-xs text-lab-dim hover:text-chem-accent border-b-2 border-transparent hover:border-chem-accent transition-all pb-1">
                LINKEDIN_PROF
              </a>
            </div>
          </div>
        </div>

        {/* Cell 2: Visual / Image (Spans 4 cols) */}
        <div className="lg:col-span-4 bg-lab-light relative overflow-hidden group min-h-[300px] lg:min-h-auto order-first lg:order-none">
            {/* The Image */}
            <img 
              src="https://placehold.co/600x800/eff6ff/1e3a8a?text=KXP" 
              alt="Portrait" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700"
            />
            
            {/* Bauhaus Shape Overlay */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-chem-accent rounded-bl-full opacity-90 mix-blend-multiply"></div>
            
            {/* Data Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
                <div className="flex justify-between border-t border-lab-text/20 pt-4 backdrop-blur-sm bg-white/30 p-4">
                    <div>
                        <div className="text-xs font-sans font-bold text-chem-accent mb-1">UNIT</div>
                        <div className="text-2xl font-serif text-lab-text">01</div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs font-sans font-bold text-chem-accent mb-1">STATUS</div>
                        <div className="text-xs font-sans font-bold text-lab-text">OPERATIONAL</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Cell 3: Decorative Data (Spans 4 cols) */}
        <div className="lg:col-span-4 bg-lab-surface p-8 border-t lg:border-t-0 border-chem-border flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
            <Database className="text-chem-accent mb-4" size={24} />
            <div>
                <h3 className="font-serif text-2xl text-lab-text mb-2">Data Systems</h3>
                <p className="font-sans text-sm text-lab-dim">
                    Architecting scalable pipelines for high-throughput model inference.
                </p>
            </div>
        </div>

        {/* Cell 4: Decorative Data (Spans 4 cols) */}
        <div className="lg:col-span-4 bg-lab-light/50 p-8 flex flex-col justify-between min-h-[160px] md:min-h-[200px]">
             <Binary className="text-chem-accent mb-4" size={24} />
             <div>
                <h3 className="font-serif text-2xl text-lab-text mb-2">Algorithms</h3>
                <p className="font-sans text-sm text-lab-dim">
                    Optimizing speaker diarization and statistical backends.
                </p>
            </div>
        </div>

        {/* Cell 5: "Available" Callout (Spans 4 cols) */}
        <div className="lg:col-span-4 bg-lab-text p-8 flex flex-col justify-between min-h-[160px] md:min-h-[200px] relative overflow-hidden">
             {/* Decorative striped background */}
             <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(45deg, #fff 25%, transparent 25%, transparent 50%, #fff 50%, #fff 75%, transparent 75%, transparent)', backgroundSize: '10px 10px'}}></div>
             
             <div className="relative z-10">
                 <div className="flex justify-between items-start">
                    <ArrowDownRight className="text-white" size={32} />
                    <span className="font-sans font-bold text-xs border border-white/30 text-white px-2 py-1">2026-2030</span>
                 </div>
                 <div className="mt-8">
                    <div className="font-sans text-xs font-bold uppercase tracking-widest text-chem-accent mb-1">Availability</div>
                    <div className="font-serif text-2xl md:text-3xl text-white italic">Open for Research</div>
                 </div>
             </div>
        </div>

      </div>
      
      {/* Floating chemical notation decorations */}
      <div className="absolute left-4 bottom-12 font-sans font-semibold text-[10px] text-lab-border hidden xl:block rotate-90 origin-left">
        C8H10N4O2 // CAFFEINE_HIGH
      </div>

    </section>
  );
};

export default Hero;