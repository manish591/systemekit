import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export default function BlogPage() {
  return (
    <main className="flex flex-col min-h-[100vh]">
      <Navbar />
      <div className="flex-1 max-w-[1300px] mx-auto w-full px-4 md:px-8 pt-4 pb-24">
        <div className="mb-8">
          <h1 className="text-xl font-medium text-foreground">Blogs</h1>
          <p className="text-foreground/60 text-sm">
            We will provide quick tips for systeme.io
          </p>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
