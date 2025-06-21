'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function BuyPremiumButton({
  isPremiumUser,
}: Readonly<{ isPremiumUser: boolean }>) {
  const router = useRouter();

  return (
    <>
      {isPremiumUser ? (
        <Button
          className="w-full h-12 font-medium"
          onClick={() => {
            window.location.href = 'http://localhost:3000/docs/tools';
          }}
        >
          Buy Premium
        </Button>
      ) : (
        <Button
          className="w-full h-12 font-medium"
          onClick={() => {
            router.push('/login');
          }}
        >
          Buy Premium
        </Button>
      )}
    </>
  );
}
