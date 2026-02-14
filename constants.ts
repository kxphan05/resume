import { ExperienceItem, SkillCategory, EducationItem, AwardItem } from './types';

export const SOCIAL_LINKS = {
  email: "kxphan05@gmail.com",
  linkedin: "https://linkedin.com/in/kang-xun-phan-8bb0b6249",
  github: "https://github.com/kxphan05",
  phone: "9456 9522",
  location: "437 Tampines Street 43 #10-141"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "htx",
    atomicNumber: 26,
    symbol: "Htx",
    mass: "4mo",
    role: "AI Engineering Intern",
    company: "HTX (Home Team Science & Technology Agency)",
    period: "Dec 2025 – Mar 2026",
    type: "work",
    description: [
      "Optimized Speaker Diarization: Benchmarked embedding models using DiArt, reducing error rate from 25% to 15%.",
      "LLM Throughput Analysis: Benchmarked Qwen LLM variants on Azure Compute.",
      "STT Reliability: Integrated live microphone testing script into GitLab CI pipelines.",
      "Research: Explored PLDA statistical backend as alternative to cosine similarity."
    ]
  },
  {
    id: "gym-bot",
    atomicNumber: 25,
    symbol: "Gb",
    mass: "Bot",
    role: "Gym Logs Telegram Bot",
    company: "Personal Project",
    period: "2025",
    type: "project",
    link: "https://t.me/gymlogsbot",
    description: [
      "Deployed workout-logging bot transitioning from Raspberry Pi to scalable cloud architecture.",
      "Containerized using Docker, migrated to Fly.io and Supabase (PostgreSQL)."
    ]
  },
  {
    id: "cs50",
    atomicNumber: 24,
    symbol: "Cs",
    mass: "Cert",
    role: "CS50x Certification",
    company: "Harvard (edX)",
    period: "2024",
    type: "project",
    link: "https://github.com/me50/kxphan05/tree/cs50/problems/2024/x/project",
    description: [
      "Gained foundational knowledge in sorting algorithms, Big O notation, and CI/CD.",
      "Developed web app to track IPPT scores using Flask and SQL."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Technical Core",
    skills: ["Python", "Git", "Docker", "Linux", "Azure", "SQL"]
  },
  {
    name: "AI & Data Science",
    skills: ["Machine Learning", "Statistical Modeling", "Speech-to-Text", "Speaker Diarization"]
  },
  {
    name: "Soft Skills",
    skills: ["Independent Learner", "Team Player", "Leadership", "Problem Solving"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Nanyang Technological University",
    degree: "Computer Science",
    period: "Aug 2026 - Dec 2030 (Expected)",
    details: [
      "Turing AI Scholars Programme: One of only 40 scholars selected annually."
    ]
  },
  {
    institution: "Raffles Institution",
    degree: "A Levels",
    period: "Feb 2022 - Dec 2023",
    highlight: "13 Academic Units (2 H3s)",
    details: [
      "Rank Points: 90",
      "8 Distinctions including H3 Mathematics and H3 Chemistry",
      "Member of Raffles Academy (Chemistry)"
    ]
  }
];

export const AWARDS: AwardItem[] = [
  { title: "Lee Kuan Yew Award for Mathematics and Science", year: "2022" },
  { title: "Singapore Chemistry Olympiad: Gold Medal", year: "2023", description: "Top 8 Nationwide" },
  { title: "Singapore Mathematical Olympiad: Silver Award", year: "2023" },
  { title: "Singapore Chemistry League: Team Overall 2nd", year: "2023" },
  { title: "Commanding Officer Coin", year: "2025" },
  { title: "Unit Sergeant Major | NCC (Victoria School)", year: "2018-2021", description: "Outstanding Cadet Awards" },
  { title: "Dragon Boating (Raffles Institution)", year: "2023", description: "Placed 3rd in National A-Division" }
];
