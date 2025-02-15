import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const intersans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ghlcn',
  description: 'Make your ghl websites stunning. Also systeme',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${intersans.variable} antialiased`}>{children}</body>
    </html>
  );
}
