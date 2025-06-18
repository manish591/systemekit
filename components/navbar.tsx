import Link from 'next/link';
import Image from 'next/image';
import { Menu, CodeXml, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import CommandPalette from './command-palette';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b transition-all border-border/40 bg-background/60 backdrop-blur-lg">
      <div className="px-4 md:px-8 max-w-[1400px] flex mx-auto h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center gap-2">
              <CodeXml className="w-6 h- mt-[2px]" strokeWidth={2} />
              <span className="text-xl font-semibold">Systemekit</span>
            </div>
          </Link>
          <div className="flex items-center gap-6 font-medium text-foreground/60 text-sm">
            <Link href="/docs/getting-started/introduction">Docs</Link>
            <Link href="/docs/tools/gradient-generator">Tools</Link>
            <Link href="#pricing">Pricing</Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="w-full sm:ml-auto sm:w-auto">
            <CommandPalette />
          </div>
          <div className="hidden md:flex items-center gap-4 ml-2">
            <Button variant="ghost" className="flex border" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button>
              <div className="flex gap-2 items-center">
                <Link href="#pricing">Get all-access</Link>
                <ChevronRight className="h-full mt-1" />
              </div>
            </Button>
          </div>
        </div>

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
                      <Link href="/docs/getting-started/introduction">
                        Docs
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
                      className="flex border mt-6 hidden"
                      asChild
                    >
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button asChild className="hidden">
                      <Link href="#pricing">
                        <div className="flex gap-2 items-center">
                          <p>Get all-access</p>
                          <ChevronRight className="h-full mt-1" />
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
