import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BuyPremiumButton } from './buy-premium-button';
import { isPremiumAccount } from '@/app/docs/components/[slug]/actions';
import { auth } from '@/auth';

export async function Pricing() {
  const session = await auth();
  const isLoggedIn = !!session?.user;
  const isProUser = await isPremiumAccount();

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
            <div className="flex-1 rounded-3xl p-6 shadow-sm border bg-card">
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
                  <span>Access to 20+ free components</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Basic HTML & CSS code</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Copy & paste ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Community support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Regular updates</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Link href="/docs/components">
                  <Button variant="outline" className="h-12 w-full font-medium">
                    Browse Components
                  </Button>
                </Link>
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
                  <span className="text-5xl font-bold">$49</span>
                </div>
                <div className="text-gray-500 mt-1 text-sm">
                  lifetime access
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>100+ premium components</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Mobile-responsive designs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Priority email support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Lifetime updates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Exclusive pro-only components</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <BuyPremiumButton
                  isPremiumUser={isProUser}
                  isLoggedIn={isLoggedIn}
                />
                <p className="text-foreground/60 text-sm mt-6 text-center">
                  Ideal for growing businesses and teams
                </p>
              </div>
            </div>

            {/* Custom Development Plan */}
            <div className="flex-1 rounded-3xl p-6 shadow-sm border bg-card">
              <h2 className="text-center font-semibold text-lg mb-6 text-foreground/60">
                Custom Development
              </h2>
              <div className="mb-6 text-center">
                <div className="justify-center flex items-center gap-x-2">
                  <span className="text-5xl font-bold">$500</span>
                </div>
                <div className="mt-1 text-sm text-foreground/60">
                  Starting with this price
                </div>
              </div>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Fully custom Systeme.io sites</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Unlimited revisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>Mobile-first design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>30-day support included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="text-primary" size={20} />
                  <span>SEO optimization</span>
                </div>
              </div>
              <div className="pt-4 border-t">
                <Link href="/contact-us">
                  <Button variant="outline" className="w-full h-12 font-medium">
                    Contact Us
                  </Button>
                </Link>
                <p className="text-foreground/60 text-sm mt-6 text-center">
                  Ideal for fast-iterating businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
