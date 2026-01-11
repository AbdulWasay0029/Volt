import Link from 'next/link';
import { Icons } from './icons';
import { SocialIcons } from './social-icons';

export function Footer() {
  return (
    <footer className="bg-black text-muted-foreground" id="contact">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4 flex items-center gap-2 group">
              <Icons.logo className="h-8 w-auto text-primary transition-transform group-hover:scale-110" />
              <span className="font-headline text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors">
                VOLT
              </span>
            </Link>
            <p className="text-center text-sm md:text-left">
              Engineered for speed, focus, and raw electrical power.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="mb-4 font-headline text-lg font-medium text-foreground">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/abdulwasay0029/" className="hover:text-primary" target="_blank" rel="noopener noreferrer">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 font-headline text-lg font-medium text-foreground">
              Follow Us
            </h3>
            <SocialIcons />
          </div>
        </div>

        <div className="mt-12 border-t border-border/20 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} VOLT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
