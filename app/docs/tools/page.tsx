import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Palette,
  GhostIcon as Shadow,
  Sparkles,
  Zap,
  Waves,
} from 'lucide-react';
import Image from 'next/image';

const tools = [
  {
    id: 'gradient-generator',
    title: 'Cool Gradient',
    description:
      'Create beautiful CSS gradients with live preview and copy-paste code',
    icon: Palette,
    category: 'Colors',
    href: '/tools/gradient-generator',
  },
  {
    id: 'shadow-generator',
    title: 'Cool Shadows',
    description:
      'Generate stunning box shadows and text shadows with visual controls',
    icon: Shadow,
    category: 'Effects',
    href: '/tools/shadow-generator',
  },
  {
    id: 'glassmorphism',
    title: 'Glassmorphism',
    description:
      'Create modern glass-like effects with backdrop blur and transparency',
    icon: Sparkles,
    category: 'Effects',
    href: '/tools/glassmorphism',
  },
  {
    id: 'wave-generator',
    title: 'Wave Generator',
    description: 'Generate SVG waves and organic shapes for modern web designs',
    icon: Waves,
    category: 'Shapes',
    href: '/tools/wave-generator',
  },
  {
    id: 'css-filters',
    title: 'CSS Filters',
    description:
      'Apply and combine CSS filters like blur, brightness, and contrast',
    icon: Zap,
    category: 'Effects',
    href: '/tools/css-filters',
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
                {/* Tool Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={`/placeholder.webp`}
                    width={400}
                    height={200}
                    alt={tool.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Category Badge on Image */}
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
