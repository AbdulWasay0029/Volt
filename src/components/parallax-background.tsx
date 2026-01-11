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
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
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

  const drawImage = useCallback(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Progressive Render Logic:
    let img = imagesRef.current[frameIndexRef.current];

    // Fallback: search backwards for any loaded image
    if (!img) {
      let searchIndex = frameIndexRef.current - 1;
      while (searchIndex >= 0) {
        if (imagesRef.current[searchIndex]) {
          img = imagesRef.current[searchIndex];
          break;
        }
        searchIndex--;
      }
    }

    // Clear canvas before drawing (or if we have no image)
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (img) {
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

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);
    }
  }, []);

  // Preload images aggressively but non-blocking
  useEffect(() => {
    setIsReady(false);
    onProgress(0);

    // Clear canvas immediately when switching variants
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    const { webpSequencePath, frameCount } = variant;
    const totalFramesToLoad = Math.ceil(frameCount / 2);

    imagesRef.current = new Array(totalFramesToLoad).fill(null);

    let loadedCount = 0;
    let hasTriggeredLoad = false;
    const loadThreshold = Math.max(5, Math.floor(totalFramesToLoad * 0.15));

    const checkReady = () => {
      // We need at least the first frame to render anything
      if (!imagesRef.current[0]) return;

      if (!hasTriggeredLoad && loadedCount >= loadThreshold) {
        hasTriggeredLoad = true;
        setIsReady(true);
        onLoaded();
      }
    };

    for (let i = 0; i < frameCount; i += 2) {
      const arrayIndex = i / 2;
      const img = new Image();
      img.src = getFrameUrl(webpSequencePath, i, frameCount);

      img.onload = () => {
        imagesRef.current[arrayIndex] = img;
        loadedCount++;
        onProgress((loadedCount / totalFramesToLoad) * 100);
        checkReady();

        // If this image corresponds to the current frame (or close fallback), force a redraw immediately
        if (arrayIndex <= frameIndexRef.current && (frameIndexRef.current - arrayIndex) < 5) {
          requestAnimationFrame(drawImage);
        }
      };

      img.onerror = () => {
        console.error(`Failed to load frame ${i}`);
        loadedCount++;
        onProgress((loadedCount / totalFramesToLoad) * 100);
        checkReady();
      };
    }

    return () => { };
  }, [variant, onProgress, onLoaded, drawImage]);

  // Handle scroll & sync frame index
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

    // Calculate initial frame based on current scroll position immediately when ready
    if (isReady) {
      handleScroll();
      drawImage(); // Ensure one initial draw happens 
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
