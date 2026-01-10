'use client';

import type { DrinkVariant } from '@/lib/drink-variants';
import { useState } from 'react';
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
  const [variants] = useState<DrinkVariant[]>(initialVariants);
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

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

    // Allow time for new assets to begin loading before resetting the switching state
    setTimeout(() => {
      setIsSwitching(false);
    }, 1000); // This delay can be adjusted
  };

  const currentVariant = variants[currentVariantIndex];

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
            onLoaded={() => setIsLoaded(true)}
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
