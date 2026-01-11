'use client';

import type { DrinkVariant } from '@/lib/drink-variants';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { LoadingScreen } from '@/components/loading-screen';
import { AboutSection } from '@/components/sections/about-section';
import { FaqSection } from '@/components/sections/faq-section';
import { IngredientsSection } from '@/components/sections/ingredients-section';
import { NutritionSection } from '@/components/sections/nutrition-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import { Footer } from '@/components/footer';

type ClientPageProps = {
  initialVariants: DrinkVariant[];
};

export default function ClientPage({ initialVariants }: ClientPageProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Helper to convert variant name to URL-friendly slug
  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

  // Initialize state based on URL param or default to 0
  const getInitialIndex = () => {
    const paramVariant = searchParams.get('variant');
    if (!paramVariant) return 0;
    const index = initialVariants.findIndex(v => toSlug(v.name) === paramVariant);
    return index >= 0 ? index : 0;
  };

  const [variants] = useState<DrinkVariant[]>(initialVariants);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(getInitialIndex);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  // Sync URL when variant changes (handle internal navigation)
  const updateUrl = useCallback((index: number) => {
    const slug = toSlug(variants[index].name);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set('variant', slug);
    router.replace(`?${newParams.toString()}`, { scroll: false });
  }, [variants, router, searchParams]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const newIndex = getInitialIndex();
    if (newIndex !== currentVariantIndex && !isSwitching) {
      setCurrentVariantIndex(newIndex);
    }
  }, [searchParams]);

  const handleSwitchVariant = (direction: 'next' | 'prev') => {
    if (isSwitching) return;

    setIsSwitching(true);
    setLoadingProgress(0); // Reset progress for the new variant

    const newIndex =
      direction === 'next'
        ? (currentVariantIndex + 1) % variants.length
        : (currentVariantIndex - 1 + variants.length) % variants.length;

    // We update the index immediately to start loading new assets,
    // but the visual transition (fade) is handled in HeroSection
    setCurrentVariantIndex(newIndex);
    updateUrl(newIndex);

    // Allow time for new assets to begin loading before resetting the switching state
    setTimeout(() => {
      setIsSwitching(false);
    }, 1000); // This delay can be adjusted
  };

  const currentVariant = variants[currentVariantIndex];

  // Stable callback to prevent ParallaxBackground effect from re-running on every render
  const handleLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <LoadingScreen
        isLoaded={isLoaded}
        progress={loadingProgress}
      />
      <div style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
        <Header />
        <main>
          <HeroSection
            variant={currentVariant}
            variantIndex={currentVariantIndex}
            onSwitchVariant={handleSwitchVariant}
            onProgress={setLoadingProgress}
            onLoaded={handleLoaded}
            isSwitching={isSwitching}
          />
          <AboutSection />
          <IngredientsSection />
          <NutritionSection />
          <ReviewsSection />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
