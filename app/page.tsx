import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Solution } from '@/components/solution';
import { HowItWorks } from '@/components/how-it-works';
import { Faq } from '@/components/faq';
import { Footer } from '@/components/footer';
import { Pricing } from '@/components/pricing';
import { Cta } from '@/components/cta';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
