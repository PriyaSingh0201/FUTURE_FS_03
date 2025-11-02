import { useState } from 'react'
import Image from 'next/image'

const innovations = [
  {
    id: 1,
    title: "Nike Air Technology",
    description: "Revolutionary cushioning that changed the game forever",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "1979"
  },
  {
    id: 2,
    title: "Flyknit Innovation",
    description: "Precision-engineered for performance and sustainability",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2012"
  },
  {
    id: 3,
    title: "React Foam",
    description: "Lightweight, durable, and responsive cushioning",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    year: "2017"
  }
]

export default function InnovationSection() {
  const [activeInnovation, setActiveInnovation] = useState(0)

  return (
    <section className="section-padding bg-nike-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">INNOVATION</span> NEVER STOPS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the groundbreaking technologies that power every step, jump, and sprint
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Innovation Selector */}
          <div className="space-y-6">
            {innovations.map((innovation, index) => (
              <div
                key={innovation.id}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeInnovation === index
                    ? 'bg-white shadow-xl transform scale-105'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                onClick={() => setActiveInnovation(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl font-bold text-nike-orange">{innovation.year}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{innovation.title}</h3>
                    <p className="text-gray-600">{innovation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Innovation Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden">
            <Image
              src={innovations[activeInnovation].image}
              alt={innovations[activeInnovation].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{innovations[activeInnovation].title}</h3>
              <p className="text-lg">{innovations[activeInnovation].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}