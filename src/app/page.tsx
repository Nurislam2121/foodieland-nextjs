import Image from "next/image";
import recipesData from '@/data/recipes.json';
import { HeroBanner } from '@/components/home/HeroBanner';
import { Recipe } from '@/types/recipe';

const recipes: Recipe[] = recipesData as Recipe[];

export default function HomePage() {
  const featuredRecipe = recipes.find((r) => r.isFeatured) || recipes[0];

  return (
    <div>
      <HeroBanner recipe={featuredRecipe} />
    </div>
  );
}