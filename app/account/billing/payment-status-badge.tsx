import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { PaymentStatus } from '@prisma/client';

export function PaymentStatusBadge({
  status,
}: Readonly<{ status: keyof typeof PaymentStatus }>) {
  const statusStyles = {
    [PaymentStatus.SUCCESS]: 'bg-green-500',
    [PaymentStatus.PROCESSING]: 'bg-yellow-500',
    [PaymentStatus.FAILED]: 'bg-red-500',
    [PaymentStatus.CANCELLED]: 'bg-red-500',
  };

  return (
    <Badge
      variant="default"
      className={cn(
        'text-xs pointer-events-none capitalize text-white',
        statusStyles[status],
      )}
    >
      {status}
    </Badge>
  );
}
