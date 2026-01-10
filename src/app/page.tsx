import ClientPage from './client-page';
import { drinkVariants } from '@/lib/drink-variants';

export default function Home() {
  // We pass the static data from the server component to the client component
  return <ClientPage initialVariants={drinkVariants} />;
}
