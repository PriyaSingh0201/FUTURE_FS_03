// SEO Utilities and Meta Data Management

export const defaultSEO = {
  title: 'Nike Redesigned - Just Do It | AI-Powered Modern Design',
  description: 'Experience Nike like never before with our AI-redesigned website featuring modern UI, responsive design, and cutting-edge user experience.',
  keywords: 'Nike, sneakers, sportswear, AI design, modern UI, responsive design, athletic wear, basketball shoes, running shoes',
  author: 'Nike Redesigned Team',
  image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=1200&h=630',
  url: 'https://nike-redesigned.vercel.app'
}

export const generatePageSEO = (page) => {
  const seoData = {
    home: {
      title: 'Nike Redesigned - Just Do It | AI-Powered Modern Design',
      description: 'Experience Nike like never before with our AI-redesigned website featuring modern UI, responsive design, and cutting-edge user experience.',
      keywords: 'Nike, sneakers, sportswear, AI design, modern UI, responsive design'
    },
    products: {
      title: 'Nike Products - Shoes, Clothing & Accessories | Nike Redesigned',
      description: 'Shop the latest Nike products including Air Max, Jordan, React and more. Premium athletic wear designed for performance.',
      keywords: 'Nike products, Nike shoes, Nike clothing, Air Max, Jordan, React, athletic wear'
    },
    innovation: {
      title: 'Nike Innovation - Technology & Design | Nike Redesigned',
      description: 'Discover Nike\\'s groundbreaking technologies including Air Max, Flyknit, React Foam and more innovations that power athletic performance.',
      keywords: 'Nike innovation, Nike technology, Air Max technology, Flyknit, React Foam, athletic innovation'
    },
    athletes: {
      title: 'Nike Athletes - Champions & Inspiration | Nike Redesigned',
      description: 'Meet the world-class athletes who represent Nike and inspire millions to push their limits and achieve greatness.',
      keywords: 'Nike athletes, professional athletes, sports champions, athletic inspiration'
    },
    community: {
      title: 'Nike Community - Join the Movement | Nike Redesigned',
      description: 'Join the global Nike community. Connect with athletes, share your journey, and be part of the movement that inspires greatness.',
      keywords: 'Nike community, athletic community, sports community, fitness motivation'
    }
  }

  return seoData[page] || defaultSEO
}

export const generateStructuredData = (type, data) => {
  const baseData = {
    '@context': 'https://schema.org'
  }

  switch (type) {
    case 'product':
      return {
        ...baseData,
        '@type': 'Product',
        name: data.name,
        description: data.description,
        image: data.image,
        brand: {
          '@type': 'Brand',
          name: 'Nike'
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        },
        aggregateRating: data.rating ? {
          '@type': 'AggregateRating',
          ratingValue: data.rating,
          reviewCount: data.reviews
        } : undefined
      }

    case 'organization':
      return {
        ...baseData,
        '@type': 'Organization',
        name: 'Nike Redesigned',
        description: 'Modern Nike website redesign with AI-powered branding',
        url: defaultSEO.url,
        logo: `${defaultSEO.url}/logo.png`,
        sameAs: [
          'https://twitter.com/nike',
          'https://facebook.com/nike',
          'https://instagram.com/nike'
        ]
      }

    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        name: 'Nike Redesigned',
        url: defaultSEO.url,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${defaultSEO.url}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      }

    default:
      return baseData
  }
}