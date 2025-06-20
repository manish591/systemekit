'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';

export function SignOutButton() {
  return (
    <Button
      variant="ghost"
      className="p-0 h-5 font-normal w-full flex justify-start"
      onClick={() => {
        signOut({ redirectTo: '/login' });
      }}
    >
      Signout
    </Button>
  );
}
