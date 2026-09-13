'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';
import recipesData from '@/data/recipes.json';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPost } from '@/types/blog';
import { Recipe } from '@/types/recipe';

const blogs: BlogPost[] = blogsData as BlogPost[];
const recipes: Recipe[] = recipesData as Recipe[];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  // Поиск по статьям
  const filteredBlogs = blogs.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Возьмем 3 рецепта для сайдбара
  const sidebarRecipes = recipes.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      {/* Шапка блога */}
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Blog & Article
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>

        {/* Форма поиска */}
        <div className="mt-8 flex w-full max-w-xl items-center gap-2 rounded-full border border-gray-200 bg-white p-2 shadow-sm focus-within:border-black">
          <input
            type="text"
            placeholder="Search article, news or recipe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent px-4 text-sm text-black outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 shrink-0"
          >
            Search
          </button>
        </div>
      </div>

      {/* Основная сетка: Статьи + Сайдбар */}
      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        {/* Список статей */}
        <div className="flex flex-col gap-10 lg:col-span-2">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))
          ) : (
            <div className="py-12 text-center text-gray-500">
              No articles found matching &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>

        {/* Сайдбар */}
        <aside className="flex flex-col gap-10">
          {/* Популярные рецепты */}
          <div className="rounded-[30px] border border-gray-100 bg-gray-50/50 p-6">
            <h3 className="text-xl font-bold text-black">Tasty Recipes</h3>
            <div className="mt-6 flex flex-col gap-6">
              {sidebarRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.id}`}
                  className="group flex items-center gap-4"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-[16px]">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="line-clamp-2 text-sm font-bold text-black transition-colors group-hover:text-gray-600">
                      {recipe.title}
                    </h4>
                    <p className="mt-1 text-xs text-gray-500">By {recipe.author.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Промо баннер */}
          <div className="relative overflow-hidden rounded-[30px] bg-[#E7FAFE] p-8 text-center">
            <h3 className="text-2xl font-bold text-black">
              Don&apos;t forget to eat healthy food
            </h3>
            <p className="mt-4 text-xs text-gray-500">
              www.foodieland.com
            </p>
            <div className="relative mx-auto mt-6 h-48 w-full">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop"
                alt="Healthy Food Promo"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}