'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export function CodeBlock({
  code,
  language,
}: Readonly<{ code: string; language: string }>) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={copyToClipboard}
        className="absolute right-2 top-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <SyntaxHighlighter
        language={language}
        style={vs}
        customStyle={{ padding: '1rem', borderRadius: '0.5rem' }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
