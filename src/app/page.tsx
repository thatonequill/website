// app/page.tsx
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "QtQwill",
  description:
    'Placeholder',
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-sans bg-background selection:bg-primary selection:text-white">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Site!</h1>
      <nav className="flex flex-col space-y-4">
        <Link href="/pages/portfolio" className="text-xl text-blue-600 hover:underline dark:text-blue-400">
          Go to my Portfolio
        </Link>
        <p className="text-xl text-teal-600">
          Other links will be added soon.
        </p>
      </nav>
    </div>
  );
}
