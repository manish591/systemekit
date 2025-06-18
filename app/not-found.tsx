'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-6">
        <h1 className="text-8xl font-bold text-foreground mb-4">404</h1>

        <h2 className="text-2xl font-semibold text-foreground/80 mb-4">
          Page Not Found
        </h2>

        <p className="text-foreground/60 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeft strokeWidth={2} />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
