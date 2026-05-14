// Type definitions for site configuration

export type Lang = "en" | "zh";

export interface SocialLinks {
  email: string;
  linkedin?: string;
  twitter?: string;
  github: string;
  website?: string;
  orcid?: string;
}

export interface PersonalConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: SocialLinks;
  avatar?: string;
}

export interface AboutConfig {
  bio: string;
  skills: string[];
  researchDirections: string[];
}

export interface Project {
  name: string;
  description: string;
  link?: string;
  skills: string[];
  role?: string;
  level?: string;
  leader?: string;
  leaderLink?: string;
}

export interface Experience {
  organization: string;
  title: string;
  dateRange: string;
  bullets: string[];
  link?: string;
}

export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
  link?: string;
}

export interface Paper {
  title: string;
  venue: string;
  level?: string;
  status?: string;
  authors: string;
  myRole?: string;
  contribution?: string;
  link?: string;
  dois?: string[];
  creditRoles?: string[];
  pinned?: boolean;
}

export interface Award {
  title: string;
  date?: string;
  description?: string;
  link?: string;
}

export interface NexaLink {
  name: string;
  description: string;
  url: string;
  icon?: string;
}

export interface NexaConfig {
  intro: string;
  links: NexaLink[];
  github?: string;
  paper?: string;
  docs?: string;
}

export interface SiteConfig {
  personal: PersonalConfig;
  about: AboutConfig;
  projects: Project[];
  experience: Experience[];
  education: Education[];
  research: Paper[];
  awards: Award[];
  nexa: NexaConfig;
}

export interface I18nStrings {
  navAbout: string;
  navNexa: string;
  navResearch: string;
  navExperience: string;
  navProjects: string;
  navEducation: string;
  navAwards: string;
  navBlog: string;
  heroGreeting: string;
  heroIm: string;
  sectionAbout: string;
  sectionNexa: string;
  sectionResearch: string;
  sectionExperience: string;
  sectionProjects: string;
  sectionEducation: string;
  sectionAwards: string;
  blogTitle: string;
  blogDesc: string;
  blogBack: string;
  footerBuilt: string;
  langSwitchLabel: string;
  statusAccepted: string;
  statusSubmitting: string;
  statusPreprint: string;
  roleFirstAuthor: string;
  doiLabel: string;
  creditLabel: string;
}