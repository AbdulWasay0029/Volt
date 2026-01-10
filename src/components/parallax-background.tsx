'use client';

import type { DrinkVariant } from '@/lib/drink-variants';
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from 'react';

type ParallaxBackgroundProps = {
  variant: DrinkVariant;
  onProgress: (progress: number) => void;
  onLoaded: () => void;
};

export function ParallaxBackground({
  variant,
  onProgress,
  onLoaded,
}: ParallaxBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef(0);
  const [isReady, setIsReady] = useState(false);

  // Generate image URLs
  const getFrameUrl = (baseUrl: string, frame: number, totalFrames: number) => {
    const frameNumber = String(frame + 1).padStart(4, '0');
    const urlParts = baseUrl.split('/');
    const fileName = urlParts.pop() || '';
    const newFileName = fileName.replace(/_(\d+)\.webp$/, `_${frameNumber}.webp`);
    return [...urlParts, newFileName].join('/');
  };

  // Preload images
  useEffect(() => {
    setIsReady(false);
    onProgress(0);
    const { webpSequencePath, frameCount } = variant;

    let loadedCount = 0;
    const imagePromises: Promise<HTMLImageElement>[] = [];
    const newImages: HTMLImageElement[] = [];

    const framesToLoad = Math.ceil(frameCount / 2);

    for (let i = 0; i < frameCount; i += 2) {
      const img = new Image();
      img.src = getFrameUrl(webpSequencePath, i, frameCount);
      newImages.push(img);

      const promise = new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => {
          loadedCount++;
          onProgress((loadedCount / framesToLoad) * 100);
          resolve(img);
        };
        img.onerror = reject;
      });
      imagePromises.push(promise);
    }

    Promise.all(imagePromises).then((loadedImages) => {
      imagesRef.current = loadedImages;
      setIsReady(true);
      onLoaded();
    });
  }, [variant, onProgress, onLoaded]);

  const drawImage = useCallback(() => {
    if (!isReady || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[frameIndexRef.current];

    if (ctx && img) {
      // Scale image to cover canvas while maintaining aspect ratio
      const canvasAspect = canvas.width / canvas.height;
      const imageAspect = img.naturalWidth / img.naturalHeight;
      let sx = 0, sy = 0, sWidth = img.naturalWidth, sHeight = img.naturalHeight;

      if (canvasAspect > imageAspect) {
        sHeight = img.naturalWidth / canvasAspect;
        sy = (img.naturalHeight - sHeight) / 2;
      } else {
        sWidth = img.naturalHeight * canvasAspect;
        sx = (img.naturalWidth - sWidth) / 2;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
    }
  }, [isReady]);

  // Initial draw
  useEffect(() => {
    if (isReady) {
      drawImage();
    }
  }, [isReady, drawImage]);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const imageCount = imagesRef.current.length;
      const newFrameIndex = Math.min(
        imageCount - 1,
        Math.max(0, Math.floor(scrollFraction * imageCount))
      );
      if (newFrameIndex !== frameIndexRef.current) {
        frameIndexRef.current = newFrameIndex;
        requestAnimationFrame(drawImage);
      }
    };

    if (isReady) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReady, drawImage, variant.frameCount]);

  // Handle resize
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawImage();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawImage]);

  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen bg-black">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
