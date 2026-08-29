'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  bgColor: string;
}

const categories: CategoryItem[] = [
  {
    id: '1',
    name: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=200&auto=format&fit=crop',
    bgColor: 'bg-amber-50',
  },
  {
    id: '2',
    name: 'Vegan',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200&auto=format&fit=crop',
    bgColor: 'bg-emerald-50',
  },
  {
    id: '3',
    name: 'Meat',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=200&auto=format&fit=crop',
    bgColor: 'bg-red-50',
  },
  {
    id: '4',
    name: 'Dessert',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=200&auto=format&fit=crop',
    bgColor: 'bg-pink-50',
  },
  {
    id: '5',
    name: 'Lunch',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop',
    bgColor: 'bg-orange-50',
  },
  {
    id: '6',
    name: 'Chocolate',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=200&auto=format&fit=crop',
    bgColor: 'bg-amber-100',
  },
];

export const Categories = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-black sm:text-3xl md:text-4xl">
          Categories
        </h2>
      </div>

      <div className="flex w-full gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 md:grid-cols-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/recipes?category=${cat.name.toLowerCase()}`}
            className={`group flex min-w-[130px] flex-col items-center justify-center rounded-[30px] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cat.bgColor}`}
          >
            <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full transition-transform group-hover:scale-105">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-base font-semibold text-black">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};