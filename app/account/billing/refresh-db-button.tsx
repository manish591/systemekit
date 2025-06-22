'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function RefreshDatabaseButton() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => {
        router.refresh();
      }}
    >
      Refresh Database
    </Button>
  );
}
