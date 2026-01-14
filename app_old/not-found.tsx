import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-accent mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-400 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent hover:bg-accent-light text-primary font-bold px-8 py-4 rounded-full transition-all"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
