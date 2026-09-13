import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex flex-col gap-6 md:flex-row md:items-center">
      {/* Обложка статьи */}
      <Link 
        href={`/blog/${post.id}`} 
        className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[240px] md:w-[290px]"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Контент карточки */}
      <div className="flex flex-1 flex-col justify-center">
        <Link href={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-black transition-colors group-hover:text-gray-600 sm:text-2xl">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {post.description}
        </p>

        {/* Автор и дата */}
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
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
    </article>
  );
}