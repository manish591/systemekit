import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export function Solution() {
  return (
    <section
      id="solutions"
      className="bg-accent/40 dark:bg-accent/30 py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-md text-foreground mb-8 tracking-wide uppercase">
            SOLUTION
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Empower Your GHL Websites With Pro Tools
          </h2>
          <p className="text-xl w-full md:w-[80%] lg:w-[60%] mx-auto text-foreground/60">
            Transform your GoHighLevel sites from ordinary to extraordinary with
            our complete design and tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-8 md:gap-8 max-w-6xl mx-auto">
          <Card className="relative shadow-sm border bg-secondary dark:bg-secondary/40">
            <CardContent className="h-full p-0 px-8 pt-10 md:px-6 md:pt-8 flex flex-col">
              <div>
                <h3 className="text-xl text-foreground font-semibold mb-3">
                  Ready-to-Use Components
                </h3>
                <p className="text-foreground/60 mt-4 mb-4">
                  Tired of your GoHighLevel sites looking like everyone
                  else&apos;s? Basic templates and limited design options make
                  it hard to stand out from competitors.
                </p>
              </div>
              <div className="px-4 pt-4 md:px-2 mt-auto">
                <Image
                  className="w-full rounded-t-md"
                  src="/placeholder.webp"
                  width={500}
                  height={500}
                  alt="components"
                />
              </div>
            </CardContent>
          </Card>
          <Card className="col-span-2 relative shadow-sm border bg-secondary dark:bg-secondary/40">
            <CardContent className="h-full p-0 px-8 pt-10 flex flex-col">
              <div>
                <h3 className="text-xl text-foreground font-semibold mb-3">
                  Design Tools Suite
                </h3>
                <p className="text-foreground/60 mt-4 mb-4">
                  Access our complete toolkit designed specifically for GHL
                  users: Shadow Generator, Gradient Creator, Color Palette
                  Generator and many more.
                </p>
              </div>
              <div className="px-4 md:px-8 lg:px-32 pt-4 mt-auto">
                <Image
                  className="w-full rounded-t-md"
                  src="/placeholder.webp"
                  width={500}
                  height={500}
                  alt="tools"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
