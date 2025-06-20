import Image from 'next/image';
import Link from 'next/link';
import { Palette, GhostIcon as Shadow } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const tools = [
  {
    id: 'gradients',
    title: 'Gradients',
    description:
      'Curated list of cool CSS gradients with live preview and copy-paste code',
    icon: Palette,
    category: 'Colors',
    href: '/docs/tools/gradients',
    img: '/gradients.png',
  },
  {
    id: 'box-shadows',
    title: 'Box Shadows',
    description: 'Curated list of stunning box shadows that you can copy-paste',
    icon: Shadow,
    category: 'Effects',
    href: '/docs/tools/box-shadows',
    img: '/box-shadows.webp',
  },
];

export default function ToolsPage() {
  return (
    <section className="px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Tools</h1>
      <p className="mb-8 text-foreground/60">
        A comprehensive collection of CSS tools to help you create stunning web
        designs. Generate code, preview effects, and copy-paste ready-to-use CSS
        snippets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => {
          return (
            <Link key={tool.id} href={tool.href}>
              <Card className="relative h-full overflow-hidden group hover:scale-[1.02] transition-transform duration-300 hover:shadow-2xl hover:shadow-primary/10">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={tool.img}
                    width={400}
                    height={200}
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge
                    variant="secondary"
                    className="absolute top-3 right-3 text-xs backdrop-blur-sm font-medium px-3 py-1"
                  >
                    {tool.category}
                  </Badge>
                </div>

                <CardHeader className="relative pb-4 pt-6">
                  <CardTitle className="text-xl font-bold leading-tight">
                    {tool.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0 pb-6">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                    {tool.description}
                  </CardDescription>
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
