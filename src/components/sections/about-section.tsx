import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-image');

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Power of <span className="text-primary">VOLT</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              VOLT isn't just another energy drink. It's a high-performance
              beverage engineered for those who demand more from themselves. We
              tapped into the essence of raw electrical power to create a clean,
              potent formula that delivers instant focus and sustained energy
              without the crash.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Our mission is to fuel your ambition, whether you're a creative
              genius, a competitive athlete, or a night owl chasing a deadline.
              With VOLT, you're always one sip away from peak performance.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-2xl lg:h-auto">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
