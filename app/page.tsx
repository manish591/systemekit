import { Hero } from '@/components/hero';
import { Problem } from '@/components/problem';
import { Solution } from '@/components/solution';
import { HowItWorks } from '@/components/how-it-works';
import { Faq } from '@/components/faq';
import { Pricing } from '@/components/pricing';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

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
      <Footer />
    </main>
  );
}
