'use client';

import LandingPageHeader from '../components/LandingPageHeader';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, ChevronUp } from 'lucide-react';
import Button from '../components/shared/Button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setShowScrollTop(heroRef.current.getBoundingClientRect().bottom <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <LandingPageHeader />
      <div
        className="relative min-h-[85vh] bg-cover bg-center bg-no-repeat flex items-start justify-center"
        style={{
          backgroundImage: "url('/images/background.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-[#3B200D]/28" />

        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto pt-12 md:pt-16 pb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Fresh From Our Farm,
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            Straight to Your Home.
          </h2>

          <p className="text-white font-medium text-base sm:text-lg max-w-2xl mx-auto mt-6 leading-relaxed [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
            Your trusted source for fresh eggs, quality poultry meat, healthy
            birds, organic manure and custom feeds. Everything you need for your
            home and poultry farming, all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 md:mt-20">
            <Button
              rightIcon={<ArrowRight size={18} />}
              onClick={() => router.push('/#products')}
            >
              Explore Products
            </Button>

            <Button variant="light" leftIcon={<MessageCircle size={18} />}>
              Contact Us
            </Button>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToProducts}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 
  flex flex-col items-center gap-2 text-white 
  cursor-pointer group"
        >
          <div
            className="w-7 h-11 rounded-full border-2 border-white 
    flex justify-center pt-2"
          >
            <span className="w-1 h-2 rounded-full bg-white animate-scroll-down" />
          </div>

          <span
            className="text-xs font-medium tracking-wider 
    group-hover:text-slate-200 transition-colors"
          >
            Scroll to explore
          </span>
        </button>
      </div>

      {/* Scroll To Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 
    rounded-full bg-orange-500 text-white shadow-lg 
    hover:bg-orange-600 hover:-translate-y-1 
    transition-all duration-300 flex items-center justify-center"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
