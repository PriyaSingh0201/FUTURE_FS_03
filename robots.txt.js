// SEO Robots.txt Generation
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: https://nike-redesigned.vercel.app/sitemap.xml
`
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // Generate the robots.txt
  const robotsTxt = generateRobotsTxt()

  res.setHeader('Content-Type', 'text/plain')
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

export default RobotsTxt