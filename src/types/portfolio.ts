export type NavigationItem = {
  label: string;
  href: string;
};

export type ContactLinkKind = 'email' | 'github' | 'linkedin' | 'whatsapp' | 'resume';

export type ContactLink = {
  kind: ContactLinkKind;
  label: string;
  href: string;
  isExternal?: boolean;
};

export type Profile = {
  name: string;
  /** Short mono tag shown next to the name in the header. */
  tag: string;
  /** Current status shown in the hero, next to the location. */
  status: string;
  location: string;
  timezone: string;
  profileImage: {
    src: string;
    alt: string;
  };
  summary: string;
  note: string;
};

export type ProjectItem = {
  name: string;
  /** Mono metadata line, e.g. "Next.js / NestJS · 2026" or "Company · 2024". */
  meta: string;
  description: string;
  href?: string;
  repositoryUrl?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  /** Contracting employer when the work was delivered for another company. */
  employer?: string;
  period: string;
  summary: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type PortfolioLabels = {
  primaryNavigation: string;
  projectsSection: string;
  experienceSection: string;
  skillsSection: string;
  contactSection: string;
  websiteLink: string;
  codeLink: string;
  footerRights: string;
};

export type PortfolioContent = {
  navigationItems: NavigationItem[];
  profile: Profile;
  contactLinks: ContactLink[];
  projects: ProjectItem[];
  experience: {
    period: string;
    items: ExperienceItem[];
  };
  skills: SkillGroup[];
  contact: {
    statement: string;
  };
  labels: PortfolioLabels;
};
