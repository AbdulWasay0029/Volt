export type DrinkVariant = {
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  webpSequencePath: string;
  frameCount: number;
};

export const drinkVariants: DrinkVariant[] = [
  {
    name: 'VOLT',
    subtitle: 'Energy Drink',
    description:
      'A clean, high-voltage energy drink engineered for instant focus and sustained power.',
    themeColor: '#7DF9FF', // Electric Blue
    webpSequencePath:
      'https://mvseqjzqphbvjsajlaat.supabase.co/storage/v1/object/public/volt-blue/frame_0001.webp',
    frameCount: 192,
  },
  {
    name: 'VOLT RED',
    subtitle: 'Energy Drink',
    description:
      'An aggressive, high-impact energy blend designed for intensity and performance.',
    themeColor: '#FF2D55', // Vibrant Red
    webpSequencePath:
      'https://mvseqjzqphbvjsajlaat.supabase.co/storage/v1/object/public/volt-red/frame_0001.webp',
    frameCount: 192,
  },
  {
    name: 'VOLT NEON',
    subtitle: 'Energy Drink',
    description:
      'A futuristic neon-charged energy drink with an electric aftertaste.',
    themeColor: '#9D00FF', // Neon Purple
    webpSequencePath:
      'https://mvseqjzqphbvjsajlaat.supabase.co/storage/v1/object/public/volt-neon/frame_0001.webp',
    frameCount: 192,
  },
];
