export default function CommunityShowcase() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">JOIN THE MOVEMENT</h2>
          <p className="text-xl text-gray-300">Be part of the Nike community and share your story</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-nike-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">ATHLETES</h3>
            <p className="text-gray-300">Connect with professional athletes and get inspired</p>
          </div>
          
          <div className="text-center">
            <div className="bg-nike-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">TRAINING</h3>
            <p className="text-gray-300">Access exclusive training programs and workouts</p>
          </div>
          
          <div className="text-center">
            <div className="bg-nike-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">COMMUNITY</h3>
            <p className="text-gray-300">Share your achievements and motivate others</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-secondary">Join Now</button>
        </div>
      </div>
    </section>
  )
}