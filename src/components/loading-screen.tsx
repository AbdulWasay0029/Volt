'use client';

import { useEffect, useState } from 'react';
import { Icons } from './icons';
import { Progress } from './ui/progress';
import { cn } from '@/lib/utils';

type LoadingScreenProps = {
  isLoaded: boolean;
  progress: number;
};

export function LoadingScreen({ isLoaded, progress }: LoadingScreenProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => setShow(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500',
        isLoaded ? 'opacity-0' : 'opacity-100',
        !show && 'hidden'
      )}
    >
      <div className="flex flex-col items-center gap-4">
        <Icons.logo className="h-16 w-16 text-primary" />
        <div className="w-48 text-center">
          <Progress value={progress} className="h-2" />
          <p className="mt-2 text-sm font-medium text-primary">
            Loading {Math.round(progress)}%
          </p>
        </div>
      </div>
    </div>
  );
}
