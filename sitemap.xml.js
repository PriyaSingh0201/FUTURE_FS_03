// SEO Sitemap Generation
function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nike-redesigned.vercel.app</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>1.00</priority>
     </url>
     <url>
       <loc>https://nike-redesigned.vercel.app/products</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>https://nike-redesigned.vercel.app/innovation</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>https://nike-redesigned.vercel.app/athletes</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
     <url>
       <loc>https://nike-redesigned.vercel.app/community</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <priority>0.80</priority>
     </url>
   </urlset>
 `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Generate the XML sitemap
  const sitemap = generateSiteMap()

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap