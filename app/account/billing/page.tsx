import { Download, Calendar, DollarSign, User2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Billing() {
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
            <div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <DollarSign className="h-5 w-5" />
                <div className="flex-1">
                  <p className="font-medium">Premium Account</p>
                  <p className="text-sm text-muted-foreground">
                    Lifetime access • Purchased on Jan 15, 2024
                  </p>
                </div>
                <Badge variant="default" className="bg-green-600">
                  Active
                </Badge>
              </div>
            </div>
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
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-4">
                  <div className="space-y-1">
                    <p className="font-medium">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nisi, eos?
                    </p>
                    <p className="text-sm text-muted-foreground">
                      21st June, 2025 • xvr4f5edjs8
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="font-medium">$49</p>
                    <Badge variant="default" className="text-xs">
                      Paid
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white text-black"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Receipt
                  </Button>
                </div>
              </div>
              <Separator />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
