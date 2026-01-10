import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const avatar1 = PlaceHolderImages.find((img) => img.id === 'review-avatar-1');
const avatar2 = PlaceHolderImages.find((img) => img.id === 'review-avatar-2');
const avatar3 = PlaceHolderImages.find((img) => img.id === 'review-avatar-3');

const reviews = [
  {
    name: 'Alex R.',
    title: 'Pro Gamer',
    text: "VOLT is a game-changer. The focus is unreal, and there's no jittery feeling or crash. I can stream for hours and stay sharp. The RED variant is my go-to.",
    avatar: avatar1,
    rating: 5,
  },
  {
    name: 'Jessica L.',
    title: 'Software Engineer',
    text: "As a developer, long coding sessions are my life. VOLT NEON keeps my mind clear and my energy levels stable. Tastes amazing too, unlike other energy drinks.",
    avatar: avatar2,
    rating: 5,
  },
  {
    name: 'Mike T.',
    title: 'Fitness Coach',
    text: "The clean ingredients are what sold me. I recommend VOLT to all my clients for a pre-workout boost. It provides genuine energy for intense sessions.",
    avatar: avatar3,
    rating: 5,
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background/90 py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Don't Take Our Word For It
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            See what our community of high-performers is saying about VOLT.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="flex h-full flex-col justify-between">
                      <CardContent className="p-6">
                        <Quote className="h-8 w-8 text-primary" />
                        <p className="mt-4 text-muted-foreground">
                          {review.text}
                        </p>
                        <div className="mt-6 flex items-center">
                          {review.avatar && (
                            <Image
                              src={review.avatar.imageUrl}
                              alt={review.name}
                              width={48}
                              height={48}
                              className="h-12 w-12 rounded-full object-cover"
                              data-ai-hint={review.avatar.imageHint}
                            />
                          )}
                          <div className="ml-4">
                            <p className="font-semibold text-foreground">
                              {review.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {review.title}
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12" />
            <CarouselNext className="mr-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
