import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What is VOLT energy drink?',
    answer:
      'VOLT is a high-performance energy drink designed for focus and sustained power. It features a clean formula to help you perform at your best without the usual crash.',
  },
  {
    question: 'How much caffeine is in a can of VOLT?',
    answer:
      'Each can of VOLT contains 180mg of natural caffeine, equivalent to about two cups of coffee. We recommend not exceeding two cans per day.',
  },
  {
    question: 'Is VOLT suitable for everyone?',
    answer:
      'VOLT is not recommended for children, pregnant or breastfeeding women, or individuals sensitive to caffeine. Please consult with a healthcare professional if you have any medical conditions.',
  },
  {
    question: 'Are there any artificial sweeteners or colors?',
    answer:
      'No, all VOLT variants are made with natural flavors, natural colors, and are sweetened with a blend of stevia and a small amount of pure cane sugar.',
  },
  {
    question: 'Where can I buy VOLT?',
    answer:
      'VOLT is available for purchase directly from our website and at select premium retailers nationwide. Check our store locator for a location near you.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
