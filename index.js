import Head from 'next/head'
import Layout from '../components/layout/Layout'
import HeroSection from '../components/features/HeroSection'
import ProductGrid from '../components/product/ProductGrid'
import CommunityShowcase from '../components/features/CommunityShowcase'
import InnovationSection from '../components/features/InnovationSection'
import NewsletterSection from '../components/features/NewsletterSection'

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nike Redesigned",
    "description": "Modern Nike website redesign with AI-powered branding",
    "url": "https://nike-redesigned.vercel.app",
    "logo": "https://nike-redesigned.vercel.app/logo.png"
  }

  return (
    <>
      <Head>
        <title>Nike Redesigned - Just Do It | AI-Powered Modern Design</title>
        <meta name="description" content="Experience Nike like never before with our AI-redesigned website featuring modern UI, responsive design, and cutting-edge user experience." />
        <meta name="keywords" content="Nike, sneakers, sportswear, AI design, modern UI, responsive design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Nike Redesigned - Just Do It" />
        <meta property="og:description" content="Experience Nike like never before with our AI-redesigned website" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nike-redesigned.vercel.app" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1200&h=630" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nike Redesigned - Just Do It" />
        <meta name="twitter:description" content="Experience Nike like never before" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://nike-redesigned.vercel.app" />
      </Head>
      
      <Layout>
        <HeroSection 
          title="JUST DO IT"
          description="Unleash your potential with Nike's latest innovations powered by AI design"
          backgroundImage="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          ctaText="Explore Collection"
        />
        <ProductGrid />
        <InnovationSection />
        <CommunityShowcase />
        <NewsletterSection />
      </Layout>
    </>
  )
}