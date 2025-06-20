import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export default function RequestAComponent() {
  return (
    <section className="max-w-lg px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Request a Component</h1>
      <p className="mb-4 text-foreground/60">
        Need a specific component for your project? We&apos;re here to help!
      </p>

      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            className="text-base"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="query" className="text-base font-medium">
            Component Request Details
          </Label>
          <Textarea
            id="query"
            placeholder="Describe the component you need in detail... For example: 'I need a pricing table with 3 tiers, toggle for monthly/yearly billing, highlight on the middle tier, and integration with Stripe for payments. The design should match our brand colors and work well on mobile devices.'"
            className="min-h-[150px] text-base"
            required
          />
          <p className="text-sm text-gray-500">
            Include details about functionality, design preferences,
            integrations needed, and any specific requirements or constraints.
          </p>
        </div>

        <Button type="submit">
          <Send className="w-4 h-4" />
          Submit Component Request
        </Button>
      </form>

      <div>
        <p className="text-sm text-foreground/60 mt-6">
          <strong>Response Time:</strong> We typically respond within 24 hours
          with a detailed proposal and timeline for your custom component.
        </p>
      </div>
    </section>
  );
}
