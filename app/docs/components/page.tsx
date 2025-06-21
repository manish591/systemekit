import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { prisma } from '@/prisma';
import { ComponentStatus } from '@prisma/client';

export default async function ComponentsPage() {
  const allComponents = await prisma.component.findMany({
    where: {
      status: ComponentStatus.PUBLISHED,
    },
    select: {
      id: true,
      name: true,
      description: true,
      slug: true,
      previewImage: true,
    },
  });

  return (
    <section className="px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Components</h1>
      <p className="mb-8 text-foreground/60">
        A comprehensive collection of CSS components to help you create stunning
        web designs. Generate code, preview effects, and copy-paste ready-to-use
        CSS snippets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allComponents.map((component) => {
          return (
            <Link
              key={component.id}
              href={`/docs/components/${component.slug}`}
            >
              <Card className="bg-card relative h-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 hover:shadow-2xl hover:shadow-primary/10">
                {/* Tool Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={component.previewImage}
                    width={400}
                    height={200}
                    alt={component.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <CardHeader className="relative pb-4 pt-6">
                  <CardTitle className="text-xl font-bold leading-tight">
                    {component.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0 pb-6">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {component.description}
                  </CardDescription>

                  {/* Hover Arrow */}
                  <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-medium mr-2">Try it now</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
