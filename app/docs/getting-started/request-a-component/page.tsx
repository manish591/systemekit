'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import Link from 'next/link';

export default function RequestAComponent() {
  const [query, setQuery] = useState('');

  return (
    <section className="max-w-lg px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Request a Component</h1>
      <p className="mb-4 text-foreground/60">
        Need a specific component for your project? We&apos;re here to help!
      </p>

      <div className="space-y-6">
        <div className="space-y-2 mb-6">
          <Label htmlFor="query" className="text-base font-medium">
            Component Request Details
          </Label>
          <Textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe the component you need in detail..."
            className="min-h-[150px] text-base"
            required
          />
          <p className="text-sm text-foreground/40">
            Include details about functionality, design preferences,
            integrations needed, and any specific requirements or constraints.
          </p>
        </div>

        <Link
          href={`mailto:manishdevrani777@gmail.com?subject=Component Request Details&body=${encodeURIComponent(
            query,
          )}`}
        >
          <Button>
            <Send className="w-4 h-4" />
            Submit Component Request
          </Button>
        </Link>
      </div>

      <div>
        <p className="text-sm text-foreground/60 mt-6">
          <strong>Response Time:</strong> We typically respond within 24 hours
          with a detailed proposal and timeline for your custom component.
        </p>
      </div>
    </section>
  );
}
