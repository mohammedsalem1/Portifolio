/**
 * Absolute URL of the deployed site, used for metadata, the sitemap and
 * share images. Set NEXT_PUBLIC_SITE_URL once a domain is chosen. On Vercel
 * the production URL is picked up automatically.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
