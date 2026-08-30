import Image from 'next/image';
import { Clock, Utensils } from 'lucide-react';
import recipesData from '@/data/recipes.json';
import { RecipeCard } from '@/components/recipes/RecipeCard';
import { RecipeActions } from '@/components/recipes/RecipeActions';
import { Recipe } from '@/types/recipe';

const recipes: Recipe[] = recipesData as Recipe[];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function RecipeDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const recipe = recipes.find((r) => String(r.id) === resolvedParams.id) || recipes[0];
  const otherRecipes = recipes.filter((r) => String(r.id) !== resolvedParams.id).slice(0, 3);

  const defaultInstructions = [
    { step: 1, title: 'Prepare ingredients', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
    { step: 2, title: 'Bake & Cook', text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.' },
    { step: 3, title: 'Serve and enjoy', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.' },
  ];

  const instructions = recipe.instructions || defaultInstructions;

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            {recipe.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-3 border-r border-gray-200 pr-6">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                <Image
                  src={recipe.author?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'}
                  alt={recipe.author?.name || 'Author'}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="block font-semibold text-black">{recipe.author?.name || 'John Smith'}</span>
                {recipe.author?.date && (
                  <span className="text-xs text-gray-400">{recipe.author.date}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 border-r border-gray-200 pr-6">
              <Clock size={18} className="text-black" />
              <span>PREP: {recipe.prepTime}</span>
              {recipe.cookTime && <span className="ml-1">| COOK: {recipe.cookTime}</span>}
            </div>

            <div className="flex items-center gap-2">
              <Utensils size={18} className="text-black" />
              <span>{recipe.category}</span>
            </div>
          </div>
        </div>

        <RecipeActions />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="relative h-[400px] overflow-hidden rounded-[30px] sm:h-[480px] lg:col-span-2">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between rounded-[30px] bg-[#E7FAFE] p-8">
          <h3 className="text-2xl font-bold text-black">Nutrition Information</h3>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex justify-between border-b border-gray-200/60 pb-3 text-sm">
              <span className="text-gray-500">Calories</span>
              <span className="font-semibold text-black">{recipe.nutrition?.calories || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3 text-sm">
              <span className="text-gray-500">Total Fat</span>
              <span className="font-semibold text-black">{recipe.nutrition?.totalFat || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3 text-sm">
              <span className="text-gray-500">Protein</span>
              <span className="font-semibold text-black">{recipe.nutrition?.protein || 'N/A'}</span>
            </div>
            <div className="flex justify-between border-b border-gray-200/60 pb-3 text-sm">
              <span className="text-gray-500">Carbohydrate</span>
              <span className="font-semibold text-black">{recipe.nutrition?.carbohydrate || 'N/A'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Cholesterol</span>
              <span className="font-semibold text-black">{recipe.nutrition?.cholesterol || 'N/A'}</span>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-gray-500">
            {recipe.description}
          </p>
        </div>
      </div>

      <p className="mt-12 text-base leading-relaxed text-gray-600">
        {recipe.description}
      </p>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-black">Ingredients</h2>
          
          <div className="mt-6 flex flex-col gap-6">
            {recipe.ingredientGroups && recipe.ingredientGroups.length > 0 ? (
              recipe.ingredientGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold text-black">{group.title}</h3>
                  {group.items.map((item, itemIdx) => (
                    <label key={itemIdx} className="group flex cursor-pointer items-center gap-4 border-b border-gray-100 pb-4 text-sm font-medium text-black">
                      <input
                        type="checkbox"
                        className="h-5 w-5 rounded-full border-gray-300 text-black focus:ring-black accent-black"
                      />
                      <span className="group-has-[:checked]:line-through group-has-[:checked]:text-gray-400">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No ingredients specified.</p>
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-black">Directions</h2>
          <div className="mt-6 flex flex-col gap-8">
            {instructions.map((item, idx) => (
              <div key={idx} className="flex gap-4 border-b border-gray-100 pb-8">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                  {item.step || idx + 1}
                </span>
                <div>
                  <h4 className="text-lg font-bold text-black">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 print:hidden">
        <h2 className="text-center text-3xl font-bold text-black">You may also like this</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {otherRecipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      </div>
    </main>
  );
}