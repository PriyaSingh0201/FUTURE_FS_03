import { useState } from 'react'
import Image from 'next/image'

export default function ProductCard({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [selectedColor, setSelectedColor] = useState(0)

  const formatPrice = (price) => {
    return typeof price === 'number' ? `$${price}` : price
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300"
        >
          <svg className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
               fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-nike-red text-white px-3 py-1 rounded-full text-sm font-bold">
            SALE
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="btn-outline text-sm mr-2">
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-medium">{product.category}</span>
          {product.rating && (
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-gray-600">{product.rating}</span>
            </div>
          )}
        </div>
        
        <h3 className="font-bold text-lg mb-3 line-clamp-2">{product.name}</h3>
        
        {/* Color Options */}
        {product.colors && (
          <div className="flex space-x-2 mb-4">
            {product.colors.slice(0, 3).map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  selectedColor === index ? 'border-black scale-110' : 'border-gray-300'
                }`}
                style={{ backgroundColor: color.toLowerCase() === 'white' ? '#f3f4f6' : color.toLowerCase() }}
                title={color}
              />
            ))}
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <button className="btn-primary text-sm px-4 py-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}