import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate subscription
    setIsSubscribed(true)
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-nike-black to-nike-dark-gray text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            STAY IN THE <span className="gradient-text">LOOP</span>
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Be the first to know about new releases, exclusive offers, and athlete stories
          </p>

          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-black font-medium focus:outline-none focus:ring-4 focus:ring-nike-orange/50"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-green-500 px-8 py-4 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-bold">Successfully Subscribed!</span>
              </div>
            </div>
          )}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50M+</div>
              <div className="text-gray-400">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">180+</div>
              <div className="text-gray-400">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}