'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Share2, Globe, MessageCircle } from 'lucide-react';
import Image from 'next/image'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Favorites', href: '/favorites' },
  ];

  return (
    <header className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
        <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-black">
          <Image src="/logo.svg" alt="Foodieland Logo" width={110} height={30} priority/>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-black transition-colors hover:text-gray-600"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="#" className="text-black hover:text-gray-600">
            <Share2 size={20} />
          </Link>
          <Link href="#" className="text-black hover:text-gray-600">
            <Globe size={20} />
          </Link>
          <Link href="#" className="text-black hover:text-gray-600">
            <MessageCircle size={20} />
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-black md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-b border-gray-100 bg-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-black hover:text-gray-600"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-6 border-t border-gray-100 pt-4">
            <Link href="#" className="text-black">
              <Share2 size={20} />
            </Link>
            <Link href="#" className="text-black">
              <Globe size={20} />
            </Link>
            <Link href="#" className="text-black">
              <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};