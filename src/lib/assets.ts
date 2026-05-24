const SIMPLE_ICONS_BASE_URL = 'https://cdn.simpleicons.org';

const publicBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const getTechnologyLogoUrl = (icon: string) => `${SIMPLE_ICONS_BASE_URL}/${icon}`;

export const getPublicAssetUrl = (path: string) => `${publicBaseUrl}${path.replace(/^\//, '')}`;
