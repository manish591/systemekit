'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const faqItems = [
  'What is acme.ai?',
  'How can I get started with acme.ai?',
  'What types of AI models does acme.ai support?',
  'Is acme.ai suitable for beginners in AI development?',
  'What kind of support does acme.ai provide?',
];

interface FAQItemProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, isOpen, onClick }: Readonly<FAQItemProps>) {
  return (
    <div className="border rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-base font-medium">{question}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-foreground/60">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            eveniet accusantium necessitatibus velit mollitia illum ab veniam,
            eum odit error, ipsam quis aperiam
          </p>
        </div>
      )}
    </div>
  );
}

export function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  return (
    <section id="faqs" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <p className="text-md text-foreground mb-8 tracking-wide uppercase">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Frequently asked questions
          </h2>
        </div>
        <div className="flex flex-col items-center py-12 md:px-20">
          <div className="w-full max-w-2xl">
            {faqItems.map((question, index) => (
              <FAQItem
                key={question}
                question={question}
                isOpen={openItem === index}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              />
            ))}
            <p className="text-center mt-8 text-foreground/60">
              Still have questions? Email us at{' '}
              <a
                href="mailto:support@acme.ai"
                className="text-foreground underline"
              >
                support@acme.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
