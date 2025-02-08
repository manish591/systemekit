import { Navbar } from '@/components/other/navbar';
import { Hero } from '@/components/other/hero';
// import { Cta } from '@/components/other/cta';
// import { Faq } from '@/components/other/faq';
// import { Footer } from '@/components/other/footer';
// import { HowItWorks } from '@/components/other/how-it-works';
// import { Pricing } from '@/components/other/pricing';
// import { Problem } from '@/components/other/problem';
// import { Solution } from '@/components/other/solution';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <Faq />
      <Cta />
      <Footer /> */}
    </main>
  );
}
