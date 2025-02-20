import Link from 'next/link';
import Image from 'next/image';
import { MoveRight, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b transition-all border-border/40 bg-background/60 backdrop-blur-lg">
      <div className="px-4 md:px-8 max-w-[1400px] flex mx-auto h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div>
            <Image src="/logo.svg" alt="logo" width={30} height={30} />
          </div>
          <span className="text-xl font-semibold">ghlcn</span>
        </Link>

        <div className="hidden md:flex items-center gap-0 lg:gap-3">
          <Button variant="ghost" className="flex" asChild>
            <Link href="/docs/components/gradient-button">Components</Link>
          </Button>
          <Button variant="ghost" className="flex" asChild>
            <Link href="/docs/tools/gradient-generator">Tools</Link>
          </Button>
          <Button variant="ghost" className="flex" asChild>
            <Link href="#how-it-works">How it works?</Link>
          </Button>
          <Button variant="ghost" className="ml-4 flex border" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <div className="flex gap-2 items-center">
              <Link href="#pricing">Get all-access</Link>
              <MoveRight className="h-full mt-1" />
            </div>
          </Button>
        </div>
        {/* mobile navbar */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center space-x-2">
                    <div>
                      <Image
                        src="/logo.svg"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <span className="text-xl font-semibold">ghlcn</span>
                  </Link>
                </SheetTitle>
                <SheetDescription asChild>
                  <div className="pt-4 flex flex-col w-full gap-2 mt-8">
                    <Button
                      variant="ghost"
                      className="flex p-0 mr-auto"
                      asChild
                    >
                      <Link href="/docs/components/gradient-button">
                        Components
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex p-0 mr-auto"
                      asChild
                    >
                      <Link href="/docs/tools/gradient-generator">Tools</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex p-0 mr-auto"
                      asChild
                    >
                      <Link href="#how-it-works">How it works?</Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="flex border mt-6"
                      asChild
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild>
                      <Link href="#pricing">
                        <div className="flex gap-2 items-center">
                          <p>Get all-access</p>
                          <MoveRight className="h-full mt-1" />
                        </div>
                      </Link>
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
