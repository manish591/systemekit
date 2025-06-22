'use client';

import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { CheckCircle2, ChevronLeft, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');
  const isSuccess = searchParams.get('status') === 'succeeded';

  if (!paymentId || !searchParams.get('status')) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 sm:p-8">
      <Card className="w-full max-w-sm animate-in fade-in-0 zoom-in-95 duration-500 shadow-lg rounded-xl">
        <CardHeader className="text-center items-center gap-4 pt-8">
          <div
            className={`p-3 rounded-full ${
              isSuccess ? 'bg-accent/40' : 'bg-destructive/20'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="h-12 w-12 text-green-500" />
            ) : (
              <XCircle className="h-12 w-12 text-destructive" />
            )}
          </div>
          <div className="space-y-1">
            <CardTitle className="text-2xl">
              {isSuccess ? 'Payment Successful' : 'Payment Failed'}
            </CardTitle>
            <CardDescription>Payment ID: {paymentId}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-center space-y-6 pb-8 px-8">
          {isSuccess ? (
            <p className="text-muted-foreground">
              You can download your receipt from the{' '}
              <Link
                href="/settings"
                className="text-foreground font-semibold hover:underline"
              >
                Settings
              </Link>{' '}
              page.
            </p>
          ) : (
            <p className="text-muted-foreground">
              There was an issue processing your payment. Please try again or
              contact our support team.
            </p>
          )}
          <div>
            {isSuccess ? (
              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="block w-full">
                  <Button variant="outline" className="w-full">
                    <ChevronLeft className="w-4 h-4 mt-[2px]" strokeWidth={2} />
                    Back to Home
                  </Button>
                </Link>
                <Link
                  href="/docs/getting-started/introduction"
                  className="w-full block"
                >
                  <Button variant="secondary" className="w-full">
                    View Docs
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-4">
                <Link href="/" className="block w-full">
                  <Button variant="outline" className="w-full">
                    <ChevronLeft className="w-4 h-4 mt-[2px]" strokeWidth={2} />
                    Back to Home
                  </Button>
                </Link>
                <Link href="/contact-us" className="block w-full">
                  <Button variant="secondary" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
