'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'How do I use these components in Systeme.io?',
    answer:
      'Each component comes with clean HTML and CSS. Simply copy the HTML code and paste it into a custom code block inside Systeme.io’s page builder. For CSS, use the global style section in your page settings.',
  },
  {
    question: 'Can I customize the components to match my brand?',
    answer:
      'Yes! All components use utility-friendly class names so you can easily change colors, spacing, fonts, and layout. You can edit the styles directly or override them in your global CSS.',
  },
  {
    question: 'Will these components work on all Systeme.io plans?',
    answer:
      "Most components work on all plans, but custom CSS might be limited on the Free plan. If you're using advanced components, make sure your plan allows custom code injection.",
  },
  {
    question: 'Do I need to know how to code?',
    answer:
      'Not much! You only need to copy and paste the provided HTML/CSS. However, basic knowledge of how to edit code blocks in Systeme.io will help with customization.',
  },
  {
    question: 'Are these components mobile responsive?',
    answer:
      'Yes! All components are built with responsiveness in mind using Tailwind-inspired utility classes. They look great on desktops, tablets, and mobile devices.',
  },
  {
    question: 'Can I request or suggest new components?',
    answer:
      "Absolutely. You can reach out via GitHub, email, or the suggestion form to share ideas for new components you'd like to see added.",
  },
  {
    question: 'Is JavaScript required for these components?',
    answer:
      'Yes. Few components uses javascript. But the javascript will be provided.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: Readonly<FAQItemProps>) {
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
          <p className="text-foreground/60">{answer}</p>
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
            {faqItems.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onClick={() => setOpenItem(openItem === index ? null : index)}
              />
            ))}
            {/* <p className="text-center mt-8 text-foreground/60">
              Still have questions? Email us at{' '}
              <a
                href="mailto:support@acme.ai"
                className="text-foreground underline"
              >
                support@acme.ai
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
