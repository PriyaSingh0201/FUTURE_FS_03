import Image from 'next/image'

export default function HeroSection({ title, description, backgroundImage, ctaText }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Nike Hero"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>
      
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">{title}</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">{description}</p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
            {ctaText}
          </button>
        </div>
      </div>
    </div>
  )
}