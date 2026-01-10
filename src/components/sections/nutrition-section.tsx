import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const nutritionData = [
  { label: 'Calories', value: '10' },
  { label: 'Total Fat', value: '0g' },
  { label: 'Sodium', value: '150mg' },
  { label: 'Total Carbohydrate', value: '2g' },
  { label: 'Total Sugars', value: '0g' },
  { label: 'Protein', value: '0g' },
];

const vitaminsData = [
  { label: 'Niacin (Vit. B3)', value: '100%' },
  { label: 'Vitamin B6', value: '100%' },
  { label: 'Vitamin B12', value: '100%' },
  { label: 'Pantothenic Acid (Vit. B5)', value: '100%' },
];

export function NutritionSection() {
  return (
    <section id="nutrition" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Nutrition Facts
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Zero compromise. All the energy and focus you need with none of the
            stuff you don't.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-md border-4 border-foreground bg-background p-2">
            <CardHeader className="p-4">
              <CardTitle className="font-headline text-4xl font-extrabold tracking-tighter">
                Nutrition Facts
              </CardTitle>
              <p className="text-sm text-muted-foreground">Serving Size 1 Can (16 fl oz)</p>
            </CardHeader>
            <Separator className="h-2 bg-foreground" />
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between font-bold">
                <span>Amount per serving</span>
              </div>
              <div className="mb-2 flex justify-between border-b-4 border-foreground pb-2 text-3xl font-extrabold">
                <span className="font-headline">Calories</span>
                <span>10</span>
              </div>
              <div className="flex justify-end font-bold text-muted-foreground">
                <span>% Daily Value*</span>
              </div>
              <Separator className="my-1 h-px bg-foreground" />
              {nutritionData.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between">
                    <span className="font-bold">{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <Separator className="my-1 h-px bg-foreground" />
                </div>
              ))}
              {vitaminsData.map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between">
                    <span>{item.label}</span>
                    <span className="font-bold">{item.value}</span>
                  </div>
                  <Separator className="my-1 h-px bg-foreground" />
                </div>
              ))}
              <p className="mt-4 text-xs text-muted-foreground">
                *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
