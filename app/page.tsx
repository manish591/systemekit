import { LogoSection } from '@/components/other/logo';
import { Navbar } from '@/components/other/navbar';
import { VideoPlayer } from '@/components/other/video-player';
import { Button } from '@/components/ui/button';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { ArrowRight, MoveRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="hero">
        <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background">
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ',
            )}
          />
          <div className="flex flex-col items-center justify-center px-4 pt-28">
            {/* Announcement Banner */}
            <div className="text-primary text-sm font-semibold mb-12 inline-flex items-center gap-2 rounded-full bg-primary/20 px-2 py-1">
              <div className="flex items-center gap-2 bg-background/60 px-2 py-1 rounded-full">
                <span className="text-amber-400">📣</span>
                <p>Announcement</p>
              </div>
              <span className="text-pink-600">Introducing typing effect</span>
              <ArrowRight height={16} width={16} />
            </div>

            {/* Main Content */}
            <div className="flex max-w-2xl flex-col items-center text-center">
              <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                Sick of Boring GHL Designs? We&apos;ve Got You
              </h1>
              <p className="mb-8 max-w-2xl text-xl tracking-wide text-muted-foreground">
                Copy-paste ready components to enhance your{' '}
                <strong>GoHighLevel</strong> and <strong>ClickFunnel</strong>{' '}
                websites. Boost conversion rates with stunning, responsive
                designs.
              </p>

              {/* CTA Button */}
              <Button asChild size="lg" className="mb-4 px-8">
                <Link href="/signup">
                  <span className="flex items-center gap-2">
                    Browse Components
                    <MoveRight className="h-full mt-1" />
                  </span>
                </Link>
              </Button>

              {/* Trial Text */}
              <p className="text-sm text-muted-foreground">
                Works with GHL, ClickFunnel and Systeme
              </p>
            </div>
          </div>
        </div>
        <div className="border shadow-lg p-2.5 rounded-lg mt-16 max-w-5xl mx-auto">
          <VideoPlayer
            videoId="dQw4w9WgXcQ"
            thumbnailUrl="/video.png"
            title="how ghlcn works"
          />
        </div>
      </section>
      <LogoSection />
    </main>
  );
}
