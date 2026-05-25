const SIMPLE_ICONS_BASE_URL = 'https://cdn.simpleicons.org';

const publicBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const svgDataUri = (svg: string) => `data:image/svg+xml,${encodeURIComponent(svg)}`;

const specialTechnologyLogos: Record<string, string> = {
  aws: svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#FF9900" />
      <text x="32" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="#111827">AWS</text>
    </svg>
  `),
  oracle: svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#F80000" />
      <text x="32" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700" fill="#FFFFFF">ORACLE</text>
    </svg>
  `),
  rspec: svgDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="14" fill="#E9573F" />
      <circle cx="32" cy="29" r="13" fill="#FFFFFF" opacity="0.95" />
      <text x="32" y="36" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" fill="#E9573F">R</text>
      <text x="32" y="53" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="9" font-weight="700" fill="#FFFFFF">RSpec</text>
    </svg>
  `),
};

export const getTechnologyLogoUrl = (icon: string) => specialTechnologyLogos[icon] ?? `${SIMPLE_ICONS_BASE_URL}/${icon}`;

export const getPublicAssetUrl = (path: string) => `${publicBaseUrl}${path.replace(/^\//, '')}`;
