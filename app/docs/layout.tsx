import Link from 'next/link';

const SYSTEMEKIT_COMPONENTS = [
  {
    name: 'Button',
    slug: 'button',
  },
  {
    name: 'Gradient Button',
    slug: 'graidient-button',
  },
  {
    name: 'Carousel',
    slug: 'carousel',
  },
  {
    name: 'Image Hover',
    slug: 'image-hover',
  },
  {
    name: 'Other',
    slug: 'other',
  },
];

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
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
              href="/docs/getting-started/how-to-use"
              className="block w-max hover:text-foreground transition-colors text-sm font-medium"
            >
              How to use?
            </Link>
          </div>
          <div className="space-y-3 text-foreground/60">
            <h3 className="font-semibold text-md pb-1 text-foreground">
              Tools
            </h3>
            <Link
              href="/docs/tools/clipper"
              className="block w-max hover:text-foreground transition-colors text-sm font-medium"
            >
              Clipper
            </Link>
            <Link
              href="#"
              className="block w-max hover:text-foreground transition-colors text-sm font-medium"
            >
              Gradient Generator
            </Link>
            <Link
              href="#"
              className="block w-max hover:text-foreground transition-colors text-sm font-medium"
            >
              Shadow Generator
            </Link>
          </div>
          <div className="space-y-3 text-foreground/60">
            <h3 className="font-semibold text-md pb-1 text-foreground">
              Components
            </h3>
            {SYSTEMEKIT_COMPONENTS.map((component) => {
              return (
                <Link
                  href={`/docs/components/${component.slug}`}
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
  );
}
