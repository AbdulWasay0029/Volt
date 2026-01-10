import { Twitter, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    href: 'https://twitter.com',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    href: 'https://instagram.com',
    icon: Instagram,
    label: 'Instagram',
  },
  {
    href: 'https://facebook.com',
    icon: Facebook,
    label: 'Facebook',
  },
];

export function SocialIcons() {
  return (
    <div className="flex items-center space-x-6">
      {socialLinks.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="text-foreground/60 transition-colors hover:text-primary"
        >
          <social.icon className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
}
