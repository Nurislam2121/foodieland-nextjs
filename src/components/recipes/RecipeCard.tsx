'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Utensils, Heart } from 'lucide-react';
import { Recipe } from '@/types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <div className="group relative flex flex-col justify-between rounded-[30px] bg-[#E7FAFE] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div>
        <div className="relative h-60 w-full overflow-hidden rounded-[20px]">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            aria-label="Add to favorites"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-transform active:scale-90"
          >
            <Heart
              size={20}
              className={
                isLiked
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-400 hover:text-gray-600'
              }
            />
          </button>
        </div>

        <h3 className="mt-6 text-xl font-bold leading-snug tracking-tight text-black line-clamp-2">
          <Link href={`/recipes/${recipe.id}`} className="hover:underline">
            {recipe.title}
          </Link>
        </h3>
      </div>

      <div className="mt-6 flex items-center gap-6">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
          <Clock size={16} className="text-black" />
          <span>{recipe.totalTime}</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
          <Utensils size={16} className="text-black" />
          <span>{recipe.category}</span>
        </div>
      </div>
    </div>
  );
};