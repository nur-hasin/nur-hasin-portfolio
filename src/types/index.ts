// ─── Personal ──────────────────────────────────────────────────────────────

export interface PersonalLinks {
  github: string;
  linkedin: string;
  leetcode: string;
}

export interface Personal {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  subtitle: string;
  tagline: string;
  location: string;
  phone: string;
  email: string;
  available: boolean;
  links: PersonalLinks;
}

// ─── Stats ─────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  suffix: string;
}

// ─── Education ─────────────────────────────────────────────────────────────

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  current: boolean;
}

// ─── Skills ────────────────────────────────────────────────────────────────

export interface Skills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
  concepts: string[];
}

// ─── Projects ──────────────────────────────────────────────────────────────

export interface Project {
  name: string;
  emoji: string;
  tagline: string;
  tech: string[];
  accentColor: string;
  description: string;
  highlights: string[];
  github: string;
  live?: string;
}

// ─── Experience ────────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  org: string;
  period: string;
  type: string;
  active: boolean;
  highlights: string[];
}

// ─── Achievements ──────────────────────────────────────────────────────────

export interface Achievement {
  title: string;
  desc: string;
  icon: string;
}

// ─── Education ──────────────────────────────────────────────────────────

export interface education {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

// ─── Video ─────────────────────────────────────────────────────────────────

export interface VideoMeta {
  src: string;
  poster: string;
  title: string;
  duration: string;
  resolution: string;
}

// ─── References ────────────────────────────────────────────────────────────

export interface Reference {
  name: string;
  title: string;
  institution: string;
  email: string;
}

// ─── Portfolio (root) ──────────────────────────────────────────────────────

export interface PortfolioData {
  personal: Personal;
  stats: Stat[];
  education: Education[];
  skills: Skills;
  projects: Project[];
  experience: Experience[];
  achievements: Achievement[];
  Education: education[];
  video: VideoMeta;
  references: Reference[];
}

// ─── Component prop helpers ────────────────────────────────────────────────

export interface SectionLabelProps {
  num: string;
  title: string;
  subtitle?: string;
}

export type FadeDirection = "up" | "down" | "left" | "right" | "none";

export interface FadeInProps {
  delay?: number;
  direction?: FadeDirection;
  className?: string;
  once?: boolean;
}

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export type CardVariant = "default" | "elevated" | "bordered" | "ghost";
export type AccentPosition = "left" | "top";