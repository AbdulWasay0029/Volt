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
  { id: 'contact', name: 'Contact', href: 'https://www.linkedin.com/in/abdulwasay0029/' },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = '';
      sections.forEach((section) => {
        // Skip external links for scroll spy
        if (section.href) return;

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
        <Link href="/" aria-label="VOLT homepage" className="flex items-center gap-2 group">
          <Icons.logo className="h-8 w-auto text-primary transition-transform group-hover:scale-110" />
          <span className="font-headline text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
            VOLT
          </span>
        </Link>
        <div className="hidden items-center space-x-6 md:flex">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.href || `#${section.id}`}
              target={section.href ? '_blank' : undefined}
              rel={section.href ? 'noopener noreferrer' : undefined}
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
