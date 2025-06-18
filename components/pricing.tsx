import { Check } from 'lucide-react';
import { Button } from './ui/button';

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <div className="text-center mb-20">
          <p className="text-md text-foreground mb-8 tracking-wide uppercase">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Choose the plan that&apos;s right for you
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col md:flex-row gap-2 max-w-6xl w-full">
            <div className="flex-1 rounded-3xl p-6 shadow-sm border">
              <h2 className="text-center font-semibold text-foreground/60 text-lg mb-6">
                BASIC
              </h2>
              <div className="mb-6 text-center">
                <div className="justify-center flex items-center gap-x-2">
                  <span className="text-5xl font-bold">$0</span>
                </div>
                <div className="text-gray-500 mt-1 text-sm">
                  lifetime access
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>1 User</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>5GB Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Basic Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Limited API Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Standard Analytics</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <Button variant="outline" className="h-12 w-full font-medium">
                  Browse Components
                </Button>
                <p className="text-foreground/60 text-sm mt-6 text-center">
                  Perfect for individuals and small projects
                </p>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="flex-1 rounded-3xl p-6 shadow-sm relative border-2 border-primary">
              <div className="absolute -top-3 right-8 bg-primary px-4 py-1 rounded-full text-sm">
                Popular
              </div>
              <h2 className="text-center font-semibold text-foreground/60 text-lg mb-6">
                PRO
              </h2>
              <div className="mb-6 text-center">
                <div className="justify-center flex items-center gap-x-2">
                  <span className="text-5xl font-bold">$129</span>
                </div>
                <div className="text-gray-500 mt-1 text-sm">
                  lifetime access
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>5 Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>50GB Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Priority Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Full API Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Advanced Analytics</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <Button className="w-full h-12 font-medium">Subscribe</Button>
                <p className="text-foreground/60 text-sm mt-6 text-center">
                  Ideal for growing businesses and teams
                </p>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="flex-1 bg-foreground rounded-3xl p-6 shadow-sm border">
              <h2 className="text-center font-semibold text-background/60 text-lg mb-6">
                ENTERPRISE
              </h2>
              <div className="mb-6 text-center">
                <div className="justify-center flex items-center gap-x-2">
                  <span className="text-background text-5xl font-bold">
                    $99
                  </span>
                </div>
                <div className="text-background/60 mt-1 text-sm">
                  lifetime access
                </div>
              </div>
              <div className="space-y-2 mb-8 text-background">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Unlimited Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>500GB Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>24/7 Premium Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Custom Integrations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>AI-Powered Insights</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <Button variant="outline" className="w-full h-12 font-medium">
                  Subscribe
                </Button>
                <p className="text-background/60 text-sm mt-6 text-center">
                  For large-scale operations and high-volume users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
