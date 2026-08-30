import Image from 'next/image';
import Link from 'next/link';

export const ChefBanner = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            Everyone can be a chef in their own kitchen
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="mt-8">
            <Link
              href="/recipes"
              className="inline-flex items-center rounded-2xl bg-black px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-[30px] sm:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
              alt="Chef in kitchen"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};