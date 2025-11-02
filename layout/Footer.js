export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Shoes</a></li>
              <li><a href="#" className="hover:text-white">Clothing</a></li>
              <li><a href="#" className="hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SPORTS</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Running</a></li>
              <li><a href="#" className="hover:text-white">Basketball</a></li>
              <li><a href="#" className="hover:text-white">Football</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Help</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">COMPANY</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">About Nike</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Nike Redesigned. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}