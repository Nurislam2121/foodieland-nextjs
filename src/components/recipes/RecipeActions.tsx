'use client';

import { Printer, Share2 } from 'lucide-react';

export function RecipeActions() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } catch (err) {
      }
    } else if (typeof window !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href);
      alert('Ссылка скопирована в буфер обмена!');
    }
  };

  return (
    <div className="flex items-center gap-4 print:hidden">
      <button
        type="button"
        onClick={handlePrint}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E7FAFE] transition-transform hover:scale-105"
        aria-label="Print recipe"
      >
        <Printer size={20} className="text-black" />
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E7FAFE] transition-transform hover:scale-105"
        aria-label="Share recipe"
      >
        <Share2 size={20} className="text-black" />
      </button>
    </div>
  );
}