export interface Author {
    name: string
    avatar: string
    date: string
}

export interface NutritionInfo {
    calories: string;
    totalFat: string
    protein: string
    carbohydrate: string
    cholesterol: string
}

export interface IngredientGroup {
    title: string;
    items: string[]
}

export interface InstructionStep {
  step?: number;
  title: string;
  text: string;
}

export interface Recipe {
    id: string;
    title: string;
    badge?: string;
    description: string;
    image: string;
    videoUrl: string;
    category: string
    prepTime: string;
    cookTime: string;
    totalTime: string
    author: Author;
    nutrition?: NutritionInfo
    ingredientGroups: IngredientGroup[];
    instructions?: InstructionStep[];
    isFeatured?: boolean
    isFavorite?: boolean
}
