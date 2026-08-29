import { Recipe } from '@/types/recipe';
import { RecipeCard } from './RecipeCard';
import { AdBannerCard } from './AdBannerCard';

interface RecipeGridProps {
  recipes: Recipe[];
}

export const RecipeGrid = ({ recipes }: RecipeGridProps) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
          Simple and tasty recipes
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 sm:text-base">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.slice(0, 5).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        
        <AdBannerCard />

        {recipes.slice(5).map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};