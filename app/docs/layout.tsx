import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getComponentDocumentationSlugs } from '../actions';

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const allComponentsSlugs = await getComponentDocumentationSlugs();

  return (
    <>
      <Navbar />
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 h-full grid grid-cols-[220px_1fr] gap-8 py-4 pb-28">
        <div>
          <div className="sticky top-20 space-y-8">
            <div className="space-y-3 text-foreground/60">
              <h3 className="font-semibold text-md pb-1 text-foreground">
                Getting Started
              </h3>
              <Link
                href="/docs/getting-started/introduction"
                className="block w-max hover:text-foreground transition-colors text-sm font-medium"
              >
                Introdution
              </Link>
              <Link
                href="/docs/getting-started/request-a-component"
                className="block w-max hover:text-foreground transition-colors text-sm font-medium"
              >
                Request a Component
              </Link>
            </div>
            <div className="space-y-3 text-foreground/60">
              <h3 className="font-semibold text-md pb-1 text-foreground">
                Tools
              </h3>
              <Link
                href="/docs/tools/gradients"
                className="block w-max hover:text-foreground transition-colors text-sm font-medium"
              >
                Gradients
              </Link>
              <Link
                href="/docs/tools/box-shadows"
                className="block w-max hover:text-foreground transition-colors text-sm font-medium"
              >
                Box Shadows
              </Link>
            </div>
            <div className="space-y-3 text-foreground/60">
              <h3 className="font-semibold text-md pb-1 text-foreground">
                Components
              </h3>
              {allComponentsSlugs.map((component) => {
                return (
                  <Link
                    href={component.href}
                    key={component.name}
                    className="block w-max hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {component.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}
