import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { getProducts } from '../../lib/cms'

const categories = ['All', 'Running', 'Basketball', 'Lifestyle']

export default function ProductGrid() {
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const fetchedProducts = await getProducts(
          activeCategory === 'All' ? null : activeCategory,
          true // Only featured products
        )
        setProducts(fetchedProducts)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [activeCategory])

  return (
    <section className="section-padding bg-nike-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            FEATURED <span className="gradient-text">PRODUCTS</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">Discover our most popular and innovative designs</p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}