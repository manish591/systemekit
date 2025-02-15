import Link from 'next/link';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer id="footer" className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-4">
        <Link href="/" className="flex items- space-x-2 mb-10">
          <div>
            <Image src="/logo.svg" alt="logo" width={30} height={30} />
          </div>
          <span className="text-xl font-semibold">ghlcn</span>
        </Link>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Product
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/components"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Components
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Company
            </h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Social</h2>
            <ul className="flex gap-4 md:flex-col">
              <li>
                <a
                  href="https://twitter.com/ghlcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <Twitter className="w-5 h-5 mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/ghlcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <Youtube className="w-5 h-5 mr-2" /> YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/ghlcn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 flex items-center"
                >
                  <Facebook className="w-5 h-5 mr-2" /> Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} GHLCN. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
