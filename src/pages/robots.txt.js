export function GET({ site }) {
  const sitemapUrl = new URL('/sitemap-index.xml', site).toString();

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`);
}
