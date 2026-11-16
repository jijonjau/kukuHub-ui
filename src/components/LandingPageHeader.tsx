'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from './shared/Button';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About Us', href: '/#about' },
  { label: 'Our Products', href: '/#products' },
  { label: 'Our Farm', href: '/#farm' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function LandingPageHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="relative z-50 w-full px-5 py-3 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/#home" className="flex items-center shrink-0">
          <Image
            src="/icons/logo.png"
            alt="KukuHub"
            width={150}
            height={100}
            className="w-28 sm:w-32 md:w-36 h-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="whitespace-nowrap text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex shrink-0">
          <Button onClick={() => router.push('/#products')}>
            Explore Products
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden justify-end">
          <Button
            variant="iconOnly"
            leftIcon={isOpen ? <X size={24} /> : <Menu size={24} />}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-[var(--color-border)] p-6 flex flex-col items-center gap-5 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[var(--color-text)] font-medium hover:text-[var(--color-primary)] transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <Button fullWidth onClick={() => router.push('/#products')}>
            Explore Products
          </Button>
        </nav>
      )}
    </header>
  );
}
