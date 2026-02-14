export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'project';
  atomicNumber: number; // For styling
  symbol: string;       // For styling
  mass: string;         // For styling (e.g. duration or tech stack count)
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string[];
  highlight?: string; // Special highlight for H3s
}

export interface AwardItem {
  title: string;
  year: string;
  description?: string;
}