'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, Utensils, Play } from 'lucide-react';
import { Recipe } from '@/types/recipe';

interface HeroBannerProps {
  recipe: Recipe;
}

export const HeroBanner = ({ recipe }: HeroBannerProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-8">
      <div className="grid overflow-hidden rounded-[30px] bg-[#E7FAFE] lg:grid-cols-2">
        <div className="flex flex-col justify-between p-8 md:p-12 lg:p-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow-sm">
              <span>📜</span>
              <span className='text-black'>{recipe.badge || 'Hot Recipes'}</span>
            </div>

            <h1 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
              {recipe.title}
            </h1>

            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-gray-600 sm:text-base">
              {recipe.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-medium text-black">
                <Clock size={16} />
                <span>{recipe.totalTime}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-xs font-medium text-black">
                <Utensils size={16} />
                <span>{recipe.category}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between pt-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={recipe.author.avatar}
                  alt={recipe.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-black">{recipe.author.name}</p>
                <p className="text-xs text-gray-500">{recipe.author.date}</p>
              </div>
            </div>

            <Link
              href={`/recipes/${recipe.id}`}
              className="inline-flex items-center gap-3 rounded-2xl bg-black px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              <span>View Recipes</span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <Play size={12} fill="black" />
              </div>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[300px] w-full lg:min-h-[500px]">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};