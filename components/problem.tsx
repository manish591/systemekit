import { PenTool, Hourglass, ChartNoAxesCombined } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Problem() {
  return (
    <section
      id="problems"
      className="py-32 lg:py-36 px-8 md:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-20">
        <p className="text-md text-foreground mb-8 tracking-wide uppercase">
          PROBLEM
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
          Poor design is costing you potential clients
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <Card className="relative shadow-none border-0 bg-transparent">
          <CardContent className="p-0">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <PenTool className="w-6 h-6 text-foreground/60" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Design Limitation Problem
            </h3>
            <p className="text-foreground/60 mt-4">
              Tired of your GoHighLevel sites looking like everyone else&apos;s?
              Basic templates and limited design options make it hard to stand
              out from competitors.
            </p>
          </CardContent>
        </Card>
        <Card className="relative shadow-none border-0 bg-transparent">
          <CardContent className="p-0">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <Hourglass className="w-6 h-6 text-foreground/60" />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Time & Effort Problem
            </h3>
            <p className="text-foreground/60 mt-4">
              Spending hours trying to customize your website? Complex coding
              and custom CSS eat up valuable time you could spend on growing
              your business.
            </p>
          </CardContent>
        </Card>
        <Card className="relative shadow-none border-0 bg-transparent">
          <CardContent className="p-0">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
              <ChartNoAxesCombined className="w-6 h-6 text-foreground/60" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Conversion Problem</h3>
            <p className="text-foreground/60 mt-4">
              Losing potential clients because your website looks
              unprofessional? Basic designs and lackluster elements can hurt
              your credibility and lower conversion rates.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
