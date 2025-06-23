import { Calendar, DollarSign, User2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { auth } from '@/auth';
import { prisma } from '@/prisma';
import { Plan } from '@prisma/client';
import Link from 'next/link';
import { RefreshDatabaseButton } from './refresh-db-button';

export default async function Billing() {
  const session = await auth();
  const userId = session?.user?.id as string;
  const userData = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      payment: true,
    },
  });

  if (!userData) {
    throw new Error('Profile data not found');
  }

  return (
    <>
      <div className="flex items-center justify-between mt-[-4px] mb-6">
        <div>
          <h2 className="text-xl font-semibold">Billing Information</h2>
          <p className="text-foreground/60 mt-1">
            View your payment information
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User2 className="h-5 w-5" />
            Account Status
          </CardTitle>
          <CardDescription>View your account status</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {userData.plan === Plan.FREE ? (
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <DollarSign className="h-5 w-5" />
                <div className="flex-1">
                  <p className="font-medium">Free Account</p>
                  <p className="text-sm text-muted-foreground">
                    Member Since • {userData.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <Link href="/#pricing">
                  <Button>Buy Premium</Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <DollarSign className="h-5 w-5" />
                <div className="flex-1">
                  <p className="font-medium">Premium Account</p>
                  <p className="text-sm text-muted-foreground">
                    Lifetime access • Purchased on{' '}
                    {userData.payment[0].createdAt.toLocaleDateString()}
                  </p>
                </div>
                <Badge variant="default" className="bg-primary text-black">
                  Premium
                </Badge>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Payment History
          </CardTitle>
          <CardDescription>
            View and download your payment receipts
          </CardDescription>
        </CardHeader>
        <CardContent>
          {userData.payment.length > 0 ? (
            <div className="space-y-4">
              {userData.payment.map((pay) => {
                return (
                  <div
                    key={pay.id}
                    className="hover:bg-secondary border px-4 rounded-md flex items-center justify-between py-3"
                  >
                    <div className="flex items-center gap-4">
                      <div className="space-y-1">
                        <p className="font-medium">
                          Systemekit Premium Membership
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {pay.createdAt.toLocaleDateString()} • {pay.paymentId}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right flex items-center gap-2">
                        <p className="font-medium">$49</p>
                        {pay.status === 'SUCCESS' ? (
                          <Badge
                            variant="default"
                            className="bg-green-200 text-xs pointer-events-none"
                          >
                            Success
                          </Badge>
                        ) : (
                          <Badge
                            variant="destructive"
                            className="text-xs pointer-events-none"
                          >
                            Failed
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center">
              <h3 className="font-semibold mb-2">Data Not found!</h3>
              <RefreshDatabaseButton />
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
