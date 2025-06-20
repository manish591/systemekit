'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TBoxShadow = {
  id: string;
  tailwind: string;
  css: string;
};

export function ShadowCard({ boxShadow }: Readonly<{ boxShadow: TBoxShadow }>) {
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={cn(
        'group relative h-44 bg-background rounded-md overflow-hidden',
        boxShadow.tailwind,
      )}
    >
      <Button
        variant="outline"
        className="font-normal h-7 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        onClick={() => {
          navigator.clipboard.writeText(boxShadow.css);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? 'Copied' : 'Copy'}
      </Button>
    </div>
  );
}
