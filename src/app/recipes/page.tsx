'use client';

import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import recipesData from '@/data/recipes.json';
import { Recipe } from '@/types/recipe';

const recipes: Recipe[] = recipesData as Recipe[];

export default function RecipesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'default' | 'time'>('default');

  const categories = useMemo(() => {
    const rawCategories = recipes.map((r) => r.category).filter(Boolean);
    const unique = Array.from(new Set(rawCategories));
    return ['All', ...unique];
  }, []);

  const parseMinutes = (timeStr?: string): number => {
    if (!timeStr) return 0;
    const match = timeStr.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const filteredRecipes = useMemo(() => {
    return recipes
      .filter((recipe) => {
        const query = searchQuery.toLowerCase().trim();
        
        const matchesTitle = recipe.title?.toLowerCase().includes(query);
        const matchesCatText = recipe.category?.toLowerCase().includes(query);
        const matchesDesc = recipe.description?.toLowerCase().includes(query);
        const matchesSearch = !query || matchesTitle || matchesCatText || matchesDesc;

        const matchesCategory =
          selectedCategory === 'All' ||
          recipe.category?.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (sortBy === 'time') {
          const timeA = parseMinutes(a.totalTime || a.prepTime);
          const timeB = parseMinutes(b.totalTime || b.prepTime);
          return timeA - timeB;
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSortBy('default');
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
          Explore Recipes
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 sm:text-base">
          Find the perfect dish for any meal, diet, or occasion from our curated culinary collection.
        </p>

        <div className="relative mx-auto mt-8 max-w-2xl">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes..."
            className="w-full rounded-full bg-[#E7FAFE]/60 py-4 pl-14 pr-6 text-sm text-black placeholder-gray-400 outline-none shadow-sm transition-all focus:bg-white focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      <div className="mb-10 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex w-full gap-2 overflow-x-auto pb-2 md:w-auto md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold whitespace-nowrap transition-all ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-black text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex w-full items-center justify-end gap-3 md:w-auto">
          <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-700">
            <SlidersHorizontal size={16} />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'default' | 'time')}
              className="bg-transparent outline-none cursor-pointer"
            >
              <option value="default">Default Sort</option>
              <option value="time">Fastest Cooking</option>
            </select>
          </div>
        </div>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="my-16 flex flex-col items-center justify-center rounded-[30px] bg-[#E7FAFE]/40 py-16 text-center">
          <h3 className="text-2xl font-bold text-black">No recipes found</h3>
          <p className="mt-2 text-sm text-gray-500">
            We couldn&apos;t find anything matching &quot;{searchQuery || selectedCategory}&quot;
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-6 flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition-transform active:scale-95"
          >
            <RotateCcw size={16} />
            <span>Reset Filters</span>
          </button>
        </div>
      )}
    </main>
  );
}