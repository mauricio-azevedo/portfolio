export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type ContactLink = {
  label: string;
  href: string;
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
  description: string;
};

export type FeaturedProject = {
  name: string;
  summary: string;
  repositoryUrl: string;
  image: {
    src: string;
    alt: string;
  };
  features: string[];
};
