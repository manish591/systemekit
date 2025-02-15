import { Search, ClipboardCopy, Settings } from 'lucide-react';

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-md font-mono text-primary mb-8 tracking-wide uppercase">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Just 3 steps to get started
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                <Search className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Browse & Choose</h3>
              <p className="text-gray-600">
                Explore our extensive library of components and tools. Find the
                perfect elements to enhance your website - from animated buttons
                to gradient backgrounds. Preview how they&apos;ll look before
                you decide.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                <ClipboardCopy className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Copy & Paste</h3>
              <p className="text-gray-600">
                Found what you love? Just click to copy the code. No complex
                coding needed. Paste it directly into your GoHighLevel builder
                and watch your website transform instantly.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center">
                <Settings className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Customize & Launch</h3>
              <p className="text-gray-600">
                Make it yours with our easy customization tools. Adjust colors,
                shadows, and animations to match your brand. Then launch your
                enhanced website with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
