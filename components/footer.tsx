import Link from 'next/link';
import { CodeXml, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="bg-accent dark:bg-accent/40">
      <div className="max-w-[1300px] mx-auto px-4 md:px-8 pt-16 pb-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center gap-2">
            <CodeXml className="w-6 h- mt-[2px]" strokeWidth={2} />
            <span className="text-xl font-semibold">Systemekit</span>
          </div>
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          <div>
            <h2 className="text-lg text-foreground mb-4">Product</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/docs/components"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/tools"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-foreground mb-4">Company</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/blog"
                  className="text-foreground/60 hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg text-foreground mb-4">Social</h2>
            <ul className="flex gap-4 md:flex-col">
              <li>
                <a
                  href="https://www.youtube.com/@gauravlakheraofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-foreground flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2" /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} systemekit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
