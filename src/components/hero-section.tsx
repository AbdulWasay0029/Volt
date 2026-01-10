'use client';

import type { DrinkVariant } from '@/lib/drink-variants';
import { ParallaxBackground } from './parallax-background';
import { Button } from './ui/button';
import { SocialIcons } from './social-icons';
import { ChevronUp, ChevronDown, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

type HeroSectionProps = {
  variant: DrinkVariant;
  variantIndex: number;
  onSwitchVariant: (direction: 'next' | 'prev') => void;
  onProgress: (progress: number) => void;
  onLoaded: () => void;
  isSwitching: boolean;
};

export function HeroSection({
  variant,
  variantIndex,
  onSwitchVariant,
  onProgress,
  onLoaded,
  isSwitching,
}: HeroSectionProps) {
  const [textData, setTextData] = useState(variant);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (variant.name !== textData.name) {
      setIsFading(true);
      const timer = setTimeout(() => {
        setTextData(variant);
        setIsFading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [variant, textData.name]);

  const formattedIndex = String(variantIndex + 1).padStart(2, '0');

  return (
    <section
      id="product"
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden"
    >
      <ParallaxBackground
        variant={variant}
        onProgress={onProgress}
        onLoaded={onLoaded}
      />
      <div className="container relative z-10 mx-auto grid h-full grid-cols-12 items-center px-4">
        {/* Left Side Text Overlay */}
        <div className="col-span-12 md:col-span-6">
          <div
            className={cn(
              'flex flex-col items-center text-center md:items-start md:text-left transition-opacity duration-300',
              isFading ? 'opacity-0' : 'opacity-100'
            )}
          >
            <p className="font-headline text-lg font-light uppercase tracking-widest text-primary">
              {textData.subtitle}
            </p>
            <h1 className="font-headline text-7xl font-bold uppercase tracking-tighter md:text-9xl">
              {textData.name}
            </h1>
            <p className="mt-4 max-w-md text-base text-foreground/80 md:text-lg">
              {textData.description}
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                BUY NOW
              </Button>
              <Button
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                EXPLORE FLAVORS
              </Button>
            </div>
          </div>
        </div>

        {/* Right Side Variant Navigation for Desktop */}
        <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center md:flex">
          <button
            onClick={() => onSwitchVariant('prev')}
            className="group mb-4 flex flex-col items-center font-headline text-sm uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary"
            disabled={isSwitching}
          >
            <ChevronUp className="h-6 w-6 transition-transform group-hover:-translate-y-1" />
            Prev
          </button>
          <div className="relative">
            {isSwitching && (
              <Loader2 className="absolute -top-8 left-1/2 h-6 w-6 -translate-x-1/2 animate-spin text-primary" />
            )}
            <span
              className="font-headline text-8xl font-bold text-foreground/10"
              style={{ color: variant.themeColor }}
            >
              {formattedIndex}
            </span>
          </div>

          <div className="my-6 h-16 w-px bg-border"></div>
          <button
            onClick={() => onSwitchVariant('next')}
            className="group mt-4 flex flex-col items-center font-headline text-sm uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary"
            disabled={isSwitching}
          >
            Next
            <ChevronDown className="h-6 w-6 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Bottom Center Social Icons & Mobile Nav */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-12">
            <button
                onClick={() => onSwitchVariant('prev')}
                className="group flex items-center gap-2 font-headline text-sm uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary md:hidden"
                disabled={isSwitching}
            >
                <ChevronUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
                Prev
            </button>

            <div className="hidden md:flex">
                <SocialIcons />
            </div>

            <button
                onClick={() => onSwitchVariant('next')}
                className="group flex items-center gap-2 font-headline text-sm uppercase tracking-widest text-foreground/60 transition-colors hover:text-primary md:hidden"
                disabled={isSwitching}
            >
                Next
                <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
        </div>
        <div className="mt-4 flex justify-center md:hidden">
            <span
                className="font-headline text-5xl font-bold text-foreground/10"
                style={{ color: variant.themeColor }}
            >
                {formattedIndex}
            </span>
        </div>
         <div className="mt-4 flex md:hidden justify-center">
            <SocialIcons />
        </div>
      </div>
    </section>
  );
}
