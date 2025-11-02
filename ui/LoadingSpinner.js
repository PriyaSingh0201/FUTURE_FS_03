export default function LoadingSpinner({ size = 'md', color = 'black' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  }

  const colorClasses = {
    black: 'border-black',
    white: 'border-white',
    orange: 'border-nike-orange'
  }

  return (
    <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 ${colorClasses[color]}`}></div>
  )
}