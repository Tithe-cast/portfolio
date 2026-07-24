export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://syeda-sima-portfolio.vercel.app/sitemap.xml',
  };
}
