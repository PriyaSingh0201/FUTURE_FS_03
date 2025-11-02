// CMS Data Management - Simulated dynamic content
// In production, this would connect to Strapi, Firebase, or other CMS

export const cmsData = {
  products: [
    {
      id: 1,
      name: "Air Max 270",
      price: 150,
      originalPrice: 180,
      category: "Running",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Nike Air Max 270 delivers visible Air cushioning from heel to toe.",
      colors: ["Black", "White", "Red"],
      sizes: [7, 8, 9, 10, 11, 12],
      featured: true,
      rating: 4.5,
      reviews: 1250
    },
    {
      id: 2,
      name: "Air Jordan 1 Retro High",
      price: 170,
      category: "Basketball",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "The Air Jordan 1 Retro High remixes the classic design with premium materials.",
      colors: ["Black/Red", "White/Black", "Royal Blue"],
      sizes: [7, 8, 9, 10, 11, 12, 13],
      featured: true,
      rating: 4.8,
      reviews: 2100
    },
    {
      id: 3,
      name: "React Infinity Run",
      price: 160,
      category: "Running",
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Designed to help reduce injury and keep you on the run.",
      colors: ["Black", "White", "Blue"],
      sizes: [6, 7, 8, 9, 10, 11, 12],
      featured: false,
      rating: 4.3,
      reviews: 890
    },
    {
      id: 4,
      name: "Blazer Mid '77",
      price: 100,
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "Styled for the '70s. Loved in the '80s. Classic in the '90s. Ready for the future.",
      colors: ["White", "Black", "Navy"],
      sizes: [6, 7, 8, 9, 10, 11, 12],
      featured: false,
      rating: 4.6,
      reviews: 650
    }
  ],
  
  athletes: [
    {
      id: 1,
      name: "LeBron James",
      sport: "Basketball",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "Excellence is a habit, not an act."
    },
    {
      id: 2,
      name: "Serena Williams",
      sport: "Tennis",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      quote: "I really think a champion is defined not by their wins but by how they can recover when they fall."
    }
  ],
  
  collections: [
    {
      id: 1,
      name: "Air Max Collection",
      description: "Visible Air cushioning technology",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      productCount: 25
    },
    {
      id: 2,
      name: "Jordan Legacy",
      description: "Basketball heritage meets modern style",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      productCount: 18
    }
  ]
}

// Simulated API functions
export const getProducts = (category = null, featured = null) => {
  let products = cmsData.products
  
  if (category) {
    products = products.filter(product => product.category === category)
  }
  
  if (featured !== null) {
    products = products.filter(product => product.featured === featured)
  }
  
  return Promise.resolve(products)
}

export const getProduct = (id) => {
  const product = cmsData.products.find(p => p.id === parseInt(id))
  return Promise.resolve(product)
}

export const getAthletes = () => {
  return Promise.resolve(cmsData.athletes)
}

export const getCollections = () => {
  return Promise.resolve(cmsData.collections)
}