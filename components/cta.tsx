import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <div className="bg-accent dark:bg-accent/40 flex items-center justify-center px-4 py-28">
      <div className="text-center max-w-4xl mx-auto">
        <div>
          <span className="inline-flex text-foreground font-medium items-center px-4 rounded-full text-sm mb-8">
            READY TO GET STARTED?
          </span>
          <h1 className="text-4xl md:text-5xl max-w-xl font-semibold mb-12 tracking-tight">
            Get access to all the components now.
          </h1>
          <Button>
            <div className="flex gap-2 items-center">
              <Link href="#pricing">Get all-access</Link>
              <ChevronRight className="h-full mt-1" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
