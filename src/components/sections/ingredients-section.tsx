import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const ingredientsImage = PlaceHolderImages.find(
  (img) => img.id === 'ingredients-image'
);
const keyIngredients = [
  { name: 'Natural Caffeine', description: 'For sharp focus and clean energy.' },
  {
    name: 'Adaptogen Blend',
    description: 'To help your body manage stress and maintain balance.',
  },
  {
    name: 'B-Vitamin Complex',
    description: 'Essential for energy production and cognitive function.',
  },
  {
    name: 'Electrolytes',
    description: 'For optimal hydration and muscle function.',
  },
];

export function IngredientsSection() {
  return (
    <section id="ingredients" className="bg-background/90 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-2xl lg:order-last lg:h-auto">
            {ingredientsImage && (
              <Image
                src={ingredientsImage.imageUrl}
                alt={ingredientsImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={ingredientsImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Clean Ingredients.
              <br />
              <span className="text-primary">Powerful Results.</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe what you put in your body matters. That's why VOLT is
              crafted with premium, functional ingredients designed to work with
              your body, not against it.
            </p>
            <ul className="mt-8 space-y-4">
              {keyIngredients.map((ingredient) => (
                <li key={ingredient.name} className="flex items-start">
                  <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {ingredient.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {ingredient.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
