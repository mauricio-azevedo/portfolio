export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ContactIconName = 'email' | 'github' | 'linkedin';

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
