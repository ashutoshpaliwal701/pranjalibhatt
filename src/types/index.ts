export interface ProjectType {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  features: string[];
  image?: string;
  github?: string;
  demo?: string;
}

export interface ExperienceType {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  details?: string[];
  technologies?: string[];
  logo?: string;
}

export interface EducationType {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
  details?: string[];
  logo?: string;
}

export interface SkillType {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'design' | 'other';
}

export interface AchievementType {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: string;
}

export interface SocialLinkType {
  platform: string;
  url: string;
  icon: string;
}