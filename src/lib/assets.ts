const publicBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const getPublicAssetUrl = (path: string) => `${publicBaseUrl}${path.replace(/^\//, '')}`;
