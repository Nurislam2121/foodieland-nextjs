'use client';

import recipesData from '@/data/recipes.json';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import { useFavorites } from '@/context/FavoritesContext';
import { Recipe } from '@/types/recipe';

const recipes: Recipe[] = recipesData as Recipe[];

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  const favoriteRecipes = recipes.filter((r) => favorites.includes(String(r.id)));

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-5xl">
          Favorite Recipes
        </h1>
        <p className="mt-4 max-w-xl text-base text-gray-500">
          Your saved dishes, ready to cook whenever you are.
        </p>
      </div>

      <div className="mt-12">
        {favoriteRecipes.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-gray-500">You haven&apos;t saved any recipes yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}