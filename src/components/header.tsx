'use client';

import Link from 'next/link';
import { Icons } from './icons';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'product', name: 'Product' },
  { id: 'ingredients', name: 'Ingredients' },
  { id: 'nutrition', name: 'Nutrition' },
  { id: 'reviews', name: 'Reviews' },
  { id: 'faq', name: 'FAQ' },
  { id: 'contact', name: 'Contact' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      )}
      style={{ scrollPaddingTop: '80px' }}
    >
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" aria-label="VOLT homepage">
          <Icons.logo className="h-7 w-auto text-primary transition-colors hover:text-primary/80" />
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className={cn(
                'font-headline text-sm font-medium uppercase tracking-wider text-foreground/80 transition-colors hover:text-primary',
                activeSection === section.id && 'text-primary'
              )}
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
