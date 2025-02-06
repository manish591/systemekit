'use client';

import * as React from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all border-border/40',
        isScrolled ? 'bg-background/80 backdrop-blur-lg' : 'bg-background',
      )}
    >
      <div className="max-w-7xl flex mx-auto h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div>
            <Image src="/logo.svg" alt="logo" width={30} height={30} />
          </div>
          <span className="text-xl font-semibold">ghlcn</span>
        </Link>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link href="#">Components</Link>
          </Button>
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link href="#">Tools</Link>
          </Button>
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link href="#">Pricing</Link>
          </Button>
          <Button variant="ghost" className="hidden md:flex" asChild>
            <Link href="#">How it works?</Link>
          </Button>
          <Button
            variant="ghost"
            className="ml-4 hidden md:flex border"
            asChild
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <div className="flex gap-2 items-center">
              <Link href="/signup">Get all-access</Link>
              <MoveRight className="h-full mt-1" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
