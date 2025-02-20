import { MoveRight } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function Cta() {
  return (
    <div className="bg-primary/10 flex items-center justify-center px-4 py-28">
      <div className="text-center max-w-4xl mx-auto">
        <div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-primary font-medium text-sm mb-2">
            READY TO GET STARTED?
          </span>
          <h1 className="text-4xl md:text-5xl max-w-xl font-semibold mb-12 tracking-tight">
            Get access to all the components.
          </h1>
          <Button>
            <div className="flex gap-2 items-center">
              <Link href="#pricing">Get all-access</Link>
              <MoveRight className="h-full mt-1" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
