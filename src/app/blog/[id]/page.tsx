import Image from 'next/image';
import Link from 'next/link';
import blogsData from '@/data/blogs.json';
import recipesData from '@/data/recipes.json';
import { BlogPost } from '@/types/blog';
import { Recipe } from '@/types/recipe';
import { Share2, Globe, MessageCircle } from 'lucide-react';

const blogs: BlogPost[] = blogsData as BlogPost[];
const recipes: Recipe[] = recipesData as Recipe[];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  const post = blogs.find((b) => String(b.id) === resolvedParams.id) || blogs[0];
  const sidebarRecipes = recipes.slice(0, 3);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-black">{post.author.name}</span>
          </div>

          <span className="h-4 w-[1px] bg-gray-200" aria-hidden="true" />

          <time className="text-xs text-gray-400">{post.date}</time>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-4xl text-center text-base leading-relaxed text-gray-500">
        {post.description}
      </p>

      <div className="relative mt-10 h-[350px] w-full overflow-hidden rounded-[30px] sm:h-[480px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-lg leading-relaxed">
              {post.content}
            </p>

            <blockquote className="my-10 rounded-[20px] bg-gray-50 p-8 text-xl font-medium italic leading-relaxed text-black border-l-4 border-black">
              &quot;Cooking is all about people. Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people eat together.&quot;
            </blockquote>

            <p className="mt-6 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla facilisi. Phasellus ut sodales tellus. Vivamus erai, auctor in imperdiet ac, matti sit amet augue. Etiam accumsan, magna eu elementum consequat, felis diam sodales nisi, ac feugiat sem quam quis quam.
            </p>

            <h3 className="mt-10 text-2xl font-bold text-black">
              How to get started with basic techniques
            </h3>

            <p className="mt-4 text-base leading-relaxed">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-b border-gray-100 py-6">
            <span className="text-sm font-bold tracking-wider text-black uppercase">
              Share this article
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-black hover:text-white"
                aria-label="Share on Facebook"
              >
                <Share2 size={18} />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-black hover:text-white"
                aria-label="Share on Twitter"
              >
                <Globe size={18} />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 transition-colors hover:bg-black hover:text-white"
                aria-label="Share on Instagram"
              >
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-10">
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
        </aside>
      </div>
    </main>
  );
}