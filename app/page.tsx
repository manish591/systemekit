import { Navbar } from '@/components/other/navbar';
import { Hero } from '@/components/other/hero';
import { Problem } from '@/components/other/problem';
import { Solution } from '@/components/other/solution';
import { HowItWorks } from '@/components/other/how-it-works';
import { Pricing } from '@/components/other/pricing';
import { Faq } from '@/components/other/faq';
import { Cta } from '@/components/other/cta';
import { Footer } from '@/components/other/footer';

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
