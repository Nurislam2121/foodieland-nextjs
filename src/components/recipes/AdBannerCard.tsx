import Image from 'next/image';

export const AdBannerCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-between overflow-hidden rounded-[30px] bg-[#003D29] p-8 text-center text-white">
      <h3 className="font-serif text-2xl italic tracking-wide text-amber-100">
        Don&apos;t forget to eat <br /> healthy food
      </h3>

      <div className="relative my-6 h-48 w-48 overflow-hidden rounded-full border-4 border-white/10 shadow-2xl">
        <Image
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop"
          alt="Healthy Food"
          fill
          className="object-cover"
        />
      </div>

      <span className="text-xs text-emerald-200/60 tracking-widest">
        www.foodieland.com
      </span>
    </div>
  );
};