import Link from 'next/link';

export default function HomePage() {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
    <div className="min-h-screen flex flex-col items-center justify-center font-sans bg-background selection:bg-primary selection:text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Site!</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/pages/portfolio" className="text-xl text-blue-600 hover:underline dark:text-blue-400">
          Go to Portfolio
        </Link>
      </nav>
    </div>
  );
}
