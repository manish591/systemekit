import { VideoPlayer } from '@/components/video-player';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="hero">
      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]',
          )}
        />
        <div className="flex flex-col items-center justify-center px-4 pt-16 md:pt-28 z-10">
          <Link href="/docs/tools">
            <div className="text-sm font-semibold mb-10 inline-flex items-center gap-2 rounded-full bg-background shadow-md border px-2 py-1">
              <div className="flex items-center gap-2 px-2 py-1 border-r">
                <span className="text-amber-400">📣</span>
                <p className="text-xs md:text-sm text-foreground/70">
                  Announcement
                </p>
              </div>
              <span className="text-foreground text-xs md:text-sm">
                Introducing tools
              </span>
              <ArrowRight height={16} width={16} />
            </div>
          </Link>
          <div className="flex max-w-2xl flex-col items-center text-center">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight md:w-[80%] md:text-5xl">
              Sick of Boring Systeme Designs? We&apos;ve Got You
            </h1>
            <p className="mb-8 max-w-xl text-lg tracking-wide text-foreground/60">
              Copy-paste ready made components to enhance your Systeme websites.
              Boost conversion rates with stunning, responsive designs.
            </p>
            <div className="flex items-center gap-3">
              <Link href="#pricing">
                <Button asChild size="lg" className="mb-4 px-8">
                  <span className="flex items-center gap-2">
                    Get All-Access
                    <ChevronRight className="h-full mt-1" />
                  </span>
                </Button>
              </Link>
              <Link href="/docs/getting-started/introduction">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="mb-4 px-8 border"
                >
                  <span className="flex items-center gap-2">
                    View Documentation
                  </span>
                </Button>
              </Link>
            </div>
            <p className="text-sm text-foreground/50">
              browse over 100+ components and tools
            </p>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="border shadow-lg p-2.5 rounded-lg mt-16 max-w-5xl mx-auto">
          <VideoPlayer
            videoId="dQw4w9WgXcQ"
            thumbnailUrl="https://res.cloudinary.com/dcugqfvvg/image/upload/v1750719298/Screenshot_2025-06-24_042401_bdxasa.png"
            title="how ghlcn works"
          />
        </div>
      </div>
    </section>
  );
}
