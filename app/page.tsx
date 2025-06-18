import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Solution } from '@/components/solution';
import { HowItWorks } from '@/components/how-it-works';
import { Faq } from '@/components/faq';
import { Pricing } from '@/components/pricing';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Faq />
    </main>
  );
}
