import Image from "next/image";
import recipesData from '@/data/recipes.json';
import { HeroBanner } from '@/components/home/HeroBanner';
import { Recipe } from '@/types/recipe';
import { Categories } from "@/components/home/Categories";
import { RecipeGrid } from "@/components/recipes/RecipeGrid";
import { ChefBanner } from "@/components/home/ChefBanner";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { Newsletter } from "@/components/home/NewsLetter";

const recipes: Recipe[] = recipesData as Recipe[];

export default function HomePage() {
  const featuredRecipe = recipes.find((r) => r.isFeatured) || recipes[0];

  return (
    <div>
      <HeroBanner recipe={featuredRecipe} />
      <Categories/>
      <RecipeGrid recipes={recipes} />
      <ChefBanner/>
      <InstagramFeed/>
      <Newsletter/>
    </div>
  );
}