import Image from 'next/image';
import { InboxIcon } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
}

const posts: InstagramPost[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop',
    likes: '1.2k',
    comments: '45',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop',
    likes: '2.8k',
    comments: '112',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=400&auto=format&fit=crop',
    likes: '950',
    comments: '31',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=400&auto=format&fit=crop',
    likes: '3.1k',
    comments: '89',
  },
];

export const InstagramFeed = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#E7FAFE]/30 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            Check out @foodieland on Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500 sm:text-base">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative h-80 overflow-hidden rounded-[20px] bg-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg hover:bg-gray-100"
                >
                  <InboxIcon size={18} />
                  <span>View Post</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
          >
            <span>Visit Our Instagram</span>
            <InboxIcon size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};