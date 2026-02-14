import React from 'react';
import { EXPERIENCES } from '../constants';
import { Microscope } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-12 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 border-b border-chem-border pb-6">
        <h2 className="text-4xl md:text-5xl font-serif text-lab-text">Experience Log</h2>
        <div className="hidden md:block mb-2 text-chem-accent">
            <Microscope size={24} />
        </div>
        <span className="font-sans font-semibold text-xs text-lab-dim md:ml-auto">REF: EXP_002</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="group relative bg-white border border-chem-border hover:border-chem-accent transition-all duration-300 min-h-auto md:min-h-[320px] flex flex-col p-6 shadow-sm hover:shadow-xl">
            
            {/* Header: Resembling Element Card */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <span className="font-sans font-bold text-4xl text-chem-accent tracking-tight">{exp.symbol}</span>
                    <span className="block font-sans font-medium text-xs text-lab-dim mt-1 uppercase tracking-wider">{exp.role}</span>
                </div>
                <div className="text-right">
                    <span className="font-sans font-bold text-sm text-chem-gold">{exp.atomicNumber}</span>
                    <span className="block font-sans font-medium text-[10px] text-lab-dim mt-1 text-right">{exp.mass}</span>
                </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 mb-6 md:mb-0">
                <h3 className="font-serif text-xl text-lab-text mb-2 group-hover:text-chem-accent transition-colors">
                    {exp.company}
                </h3>
                <div className="w-8 h-1 bg-lab-light mb-4 group-hover:bg-chem-accent transition-colors"></div>
                <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                        <li key={i} className="font-sans text-sm text-lab-dim leading-relaxed flex items-start gap-2">
                            <span className="text-chem-accent mt-1.5 text-[10px] shrink-0">■</span>
                            {desc}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer: Date */}
            <div className="mt-auto pt-4 border-t border-lab-light flex justify-between items-center">
                <span className="font-sans font-bold text-[10px] text-lab-text uppercase tracking-wider">{exp.period}</span>
                {exp.link && (
                    <a href={exp.link} target="_blank" rel="noreferrer" className="text-[10px] font-sans font-bold border border-lab-border px-3 py-1 rounded-full text-lab-dim hover:bg-chem-accent hover:border-chem-accent hover:text-white transition-all">
                        SOURCE
                    </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;