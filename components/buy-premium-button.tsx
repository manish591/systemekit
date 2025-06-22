'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const productId = process.env.NEXT_PUBLIC_PRODUCT_ID!;
const redirectUrl = process.env.NEXT_PUBLIC_BASE_URL;

export function BuyPremiumButton({
  isPremiumUser,
  isLoggedIn,
}: Readonly<{ isPremiumUser: boolean; isLoggedIn: boolean }>) {
  const router = useRouter();

  if (isPremiumUser) {
    return (
      <Link href="/docs/components">
        <Button className="w-full h-12 font-medium">Browse Components</Button>
      </Link>
    );
  }

  return (
    <>
      {isLoggedIn ? (
        <Button
          className="w-full h-12 font-medium"
          onClick={() => {
            window.location.href = `https://test.checkout.dodopayments.com/buy/${productId}?quantity=1&redirect_url=${redirectUrl}/account/billing`;
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
