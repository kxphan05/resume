import React from 'react';
import { AWARDS } from '../constants';
import { Award, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-gradient-to-b from-lab-bg to-white relative overflow-hidden">
      
      {/* Background aquatic noise (blue tint) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23172554\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-12 border-b border-chem-border pb-4">
            <h2 className="text-3xl md:text-4xl font-serif text-lab-text">Honors & Research</h2>
            <Award className="text-chem-gold" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            {AWARDS.map((item, idx) => (
                <div key={idx} className="glass-panel p-6 flex flex-col justify-between group hover:border-chem-accent/30 transition-all duration-300">
                    <div>
                        <div className="flex justify-between items-start mb-2">
                             <h3 className="text-xl font-serif text-lab-text group-hover:text-chem-accent transition-colors">
                                {item.title}
                             </h3>
                             <ExternalLink size={16} className="text-lab-dim opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        {item.description && (
                            <p className="font-sans text-sm text-lab-dim mt-2 pl-3 border-l-2 border-chem-accent/20">
                                {item.description}
                            </p>
                        )}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <span className="font-sans font-bold text-xs text-chem-accent bg-white border border-chem-border px-3 py-1 rounded-full shadow-sm">
                            {item.year}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-24 text-center">
            <div className="inline-block p-4 border border-chem-border rounded-full bg-white shadow-sm">
                <div className="w-2 h-2 bg-chem-accent rounded-full animate-pulse"></div>
            </div>
            <p className="font-sans font-medium text-xs text-lab-dim mt-4 tracking-widest">
                END_OF_TRANSMISSION
            </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;