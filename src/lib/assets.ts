const SIMPLE_ICONS_BASE_URL = 'https://cdn.simpleicons.org';

const publicBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const specialTechnologyLogos: Record<string, string> = {
  aws:
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="%23FF9900"/><text x="32" y="38" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700" fill="%23111827">AWS</text></svg>',
};

export const getTechnologyLogoUrl = (icon: string) => specialTechnologyLogos[icon] ?? `${SIMPLE_ICONS_BASE_URL}/${icon}`;

export const getPublicAssetUrl = (path: string) => `${publicBaseUrl}${path.replace(/^\//, '')}`;
