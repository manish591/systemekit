'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { ComponentForm } from './component-form';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

export function CreateComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>
          <Plus className="h-4 w-4" />
          Add Component
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-lg font-semibold">
            Add new component
          </DialogTitle>
          <DialogDescription className="text-sm text-foreground/60">
            Fill the details below to create a new component
          </DialogDescription>
        </DialogHeader>
        <ComponentForm setCloseFormDialog={setOpen} />
      </DialogContent>
    </Dialog>
  );
}
