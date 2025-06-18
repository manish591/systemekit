'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export function CodeBlock({
  code,
  language,
}: Readonly<{ code: string; language: string }>) {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative border rounded-md p-2">
      <Button
        onClick={copyToClipboard}
        variant="outline"
        className="absolute right-2 top-2 rounded text-sm"
      >
        {copied ? 'Copied!' : 'Copy'}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={theme === 'dark' ? vscDarkPlus : vs}
        customStyle={{
          border: 'none',
          backgroundColor: 'transparent',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
