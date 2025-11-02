import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* AI-Generated Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path d="M2.5 12L7 8.5L12 12L17 8.5L21.5 12L17 15.5L12 12L7 15.5L2.5 12Z" 
                      fill="currentColor" className="text-black"/>
              </svg>
            </div>
            <span className="text-2xl font-bold font-nike-futura tracking-tight">NIKE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="font-medium hover:text-nike-orange transition-colors duration-300">Products</Link>
            <Link href="/innovation" className="font-medium hover:text-nike-orange transition-colors duration-300">Innovation</Link>
            <Link href="/athletes" className="font-medium hover:text-nike-orange transition-colors duration-300">Athletes</Link>
            <Link href="/community" className="font-medium hover:text-nike-orange transition-colors duration-300">Community</Link>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-nike-light-gray rounded-full transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="p-2 hover:bg-nike-light-gray rounded-full transition-colors duration-300 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-nike-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-nike-light-gray rounded-full transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link href="/products" className="font-medium hover:text-nike-orange transition-colors">Products</Link>
              <Link href="/innovation" className="font-medium hover:text-nike-orange transition-colors">Innovation</Link>
              <Link href="/athletes" className="font-medium hover:text-nike-orange transition-colors">Athletes</Link>
              <Link href="/community" className="font-medium hover:text-nike-orange transition-colors">Community</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}