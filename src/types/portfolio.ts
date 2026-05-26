export type Language = 'en' | 'pt';

export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ContactIconName = 'email' | 'github' | 'linkedin' | 'whatsapp';

export type ContactLink = {
  label: string;
  href: string;
  icon: ContactIconName;
  isExternal?: boolean;
};

export type Technology = {
  name: string;
  icon: string;
};

export type TechnologyGroup = {
  category: string;
  id: string;
  items: Technology[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  technologies: Technology[];
};

export type FeaturedProject = {
  name: string;
  summary: string;
  liveUrl: string;
  repositoryUrl: string;
  image: {
    src: string;
    alt: string;
  };
  features: string[];
};

export type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  profileImage: {
    src: string;
    alt: string;
  };
  heroSummary: string;
  heroNote: string;
  about: string;
};

export type AboutFact = {
  label: string;
  value: string;
  icon: string;
};

export type PortfolioLabels = {
  primaryNavigation: string;
  mobileNavigation: string;
  openNavigation: string;
  resume: string;
  resumeAria: string;
  aboutSection: string;
  aboutTitle: string;
  techStackSection: string;
  techStackTitle: string;
  techStackAria: string;
  experienceSection: string;
  experienceTitle: string;
  experienceAria: string;
  featuredProjectSection: string;
  online: string;
  liveLink: string;
  repositoryLink: string;
  contactAria: string;
  contactTitle: string;
  contactSubtitle: string;
  footerRights: string;
};

export type PortfolioContent = {
  navigationItems: NavigationItem[];
  contactLinks: ContactLink[];
  techStack: TechnologyGroup[];
  experiences: Experience[];
  featuredProject: FeaturedProject;
  profile: Profile;
  aboutFacts: AboutFact[];
  labels: PortfolioLabels;
};
