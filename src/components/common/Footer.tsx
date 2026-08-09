import Link from 'next/link';
import { Share2, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="w-full bg-white pb-12 pt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* ЛОго + навигация */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-gray-200/60 pb-12 md:flex-row md:items-center">
          <div>
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-black">
              <Image src="/logo.svg" alt="Foodieland Logo" width={110} height={30} priority/>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>

          <nav className="flex flex-wrap gap-8">
            <Link href="/recipes" className="text-base font-medium text-black hover:text-gray-600">
              Recipes
            </Link>
            <Link href="/blog" className="text-base font-medium text-black hover:text-gray-600">
              Blog
            </Link>
            <Link href="/contact" className="text-base font-medium text-black hover:text-gray-600">
              Contact
            </Link>
            <Link href="/about" className="text-base font-medium text-black hover:text-gray-600">
              About us
            </Link>
          </nav>
        </div>

        {/* Копирайт + Соцсети */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Flowbase. Powered by{' '}
            <span className="font-medium text-orange-500">Webflow</span>
          </p>

          <div className="flex items-center gap-6">
            <Link href="#" className="text-black hover:text-gray-600">
              <Share2 size={18} />
            </Link>
            <Link href="#" className="text-black hover:text-gray-600">
              <Globe size={18} />
            </Link>
            <Link href="#" className="text-black hover:text-gray-600">
              <MessageCircle size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};