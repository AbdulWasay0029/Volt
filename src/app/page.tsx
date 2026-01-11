import { Suspense } from 'react';
import ClientPage from './client-page';
import { drinkVariants } from '@/lib/drink-variants';

export default function Home() {
  // We pass the static data from the server component to the client component
  // Suspense is required because ClientPage uses useSearchParams
  return (
    <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-black text-white">Loading...</div>}>
      <ClientPage initialVariants={drinkVariants} />
    </Suspense>
  );
}
