import React from 'react';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        
        {/* Header Column */}
        <div className="lg:col-span-4">
             <div className="lg:sticky lg:top-24">
                 <div className="flex items-center gap-3 mb-4 md:mb-6 text-chem-accent">
                    <Cpu size={28} />
                    <span className="font-sans font-bold text-sm tracking-widest uppercase">Inventory</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-serif text-lab-text mb-4 md:mb-6">
                    Technical<br/>Apparatus
                 </h2>
                 <p className="font-sans text-sm text-lab-dim leading-relaxed border-l-2 border-chem-border pl-4">
                    A calibrated collection of frameworks, languages, and methodologies used for precision engineering.
                 </p>
             </div>
        </div>

        {/* Content Column */}
        <div className="lg:col-span-8 grid md:grid-cols-2 gap-6 md:gap-8">
            {SKILLS.map((cat, idx) => (
                <div key={idx} className="bg-white border border-chem-border p-6 relative overflow-hidden hover:shadow-lg transition-shadow duration-300 rounded-sm">
                    {/* Decorative colored top bar */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-chem-accent to-lab-light"></div>
                    
                    <h3 className="font-serif text-2xl text-lab-text mb-6 flex items-center gap-2">
                        {cat.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="inline-flex items-center px-3 py-1.5 bg-lab-bg text-lab-text font-sans font-medium text-xs border border-lab-border hover:border-chem-accent hover:text-chem-accent transition-all cursor-default rounded-md">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;