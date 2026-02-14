import React from 'react';
import { EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-12 md:py-24 px-4 md:px-12 max-w-5xl mx-auto">
       <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-lab-text mb-2">Academic Record</h2>
            <div className="flex items-center justify-center gap-2 text-chem-accent opacity-60">
                <div className="h-px w-12 bg-current"></div>
                <GraduationCap size={16} />
                <div className="h-px w-12 bg-current"></div>
            </div>
       </div>

      <div className="space-y-12">
        {EDUCATION.map((edu, idx) => (
            <div key={idx} className="relative pl-6 md:pl-0">
                {/* Timeline line for mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-chem-border md:hidden"></div>

                <div className="grid md:grid-cols-12 gap-4 md:gap-6 items-start">
                    {/* Period Column */}
                    <div className="md:col-span-3 md:text-right py-1">
                        <span className="inline-block px-3 py-1 bg-white border border-chem-border text-chem-accent font-sans font-bold text-xs rounded-full shadow-sm relative -left-9 md:left-0 z-10">
                            {edu.period}
                        </span>
                    </div>

                    {/* Dot Separator (Desktop) */}
                    <div className="hidden md:flex md:col-span-1 justify-center py-2 relative">
                        <div className="w-px h-full bg-chem-border absolute top-0"></div>
                        <div className="w-3 h-3 rounded-full bg-white border-2 border-chem-accent relative z-10 box-content"></div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-8 bg-white border border-chem-border p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 rounded-sm">
                        <h3 className="text-xl md:text-2xl font-serif text-lab-text mb-1">
                            {edu.institution}
                        </h3>
                        <div className="text-base md:text-lg font-sans font-medium text-lab-dim mb-4">
                            {edu.degree}
                        </div>

                        {edu.highlight && (
                            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 font-sans font-bold text-xs rounded-md">
                                <span>★</span> {edu.highlight}
                            </div>
                        )}

                        <ul className="space-y-2 mt-2">
                            {edu.details.map((d, i) => (
                                <li key={i} className="text-lab-dim font-sans text-sm md:text-base flex gap-3">
                                    <span className="text-chem-border mt-1.5 md:mt-2 w-1.5 h-1.5 rounded-full bg-chem-accent block shrink-0"></span>
                                    {d}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Education;