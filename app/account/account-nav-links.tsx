'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function AccountNavLinks() {
  const pathname = usePathname();

  return (
    <div className="space-y-2 grid">
      <Link href="/account/profile" className="w-full">
        <Button
          variant="ghost"
          className={cn(
            'w-full text-left justify-start p-0 px-2 text-base',
            pathname.includes('/profile') && 'bg-secondary',
          )}
        >
          Profile
        </Button>
      </Link>
      <Link href="/account/billing" className="w-full">
        <Button
          variant="ghost"
          className={cn(
            'w-full text-left justify-start p-0 px-2 text-base',
            pathname.includes('/billing') && 'bg-secondary',
          )}
        >
          Billing
        </Button>
      </Link>
    </div>
  );
}
