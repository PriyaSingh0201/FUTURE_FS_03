export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  ...props 
}) {
  const baseClasses = 'font-bold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50'
  
  const variants = {
    primary: 'bg-black text-white hover:bg-nike-dark-gray focus:ring-black',
    secondary: 'border-2 border-black text-black hover:bg-black hover:text-white focus:ring-black',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white',
    orange: 'bg-nike-orange text-white hover:bg-orange-600 focus:ring-nike-orange'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${disabledClasses} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}