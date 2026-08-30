'use client';

import { useState } from 'react';
import Image from 'next/image';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="relative overflow-hidden rounded-[40px] bg-[#E7FAFE] px-6 py-16 text-center sm:px-12 md:py-20">
        <div className="absolute -left-12 -bottom-12 hidden h-60 w-60 md:block lg:h-72 lg:w-72">
          <Image
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop"
            alt="Salad plate"
            fill
            className="object-cover rounded-full opacity-80"
          />
        </div>
        <div className="absolute -right-12 -bottom-12 hidden h-60 w-60 md:block lg:h-72 lg:w-72">
          <Image
            src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop"
            alt="Fruit plate"
            fill
            className="object-cover rounded-full opacity-80"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            Delicious Recipes to Your Inbox
          </h2>
          <p className="mt-4 text-sm text-gray-600 sm:text-base">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <div className="w-full sm:w-auto sm:flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address..."
                className="w-full rounded-2xl bg-white px-6 py-4 text-sm text-black placeholder-gray-400 outline-none shadow-sm focus:ring-2 focus:ring-black"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};