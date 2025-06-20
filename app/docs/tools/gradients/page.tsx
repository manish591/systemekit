import { GradientCard } from './gradientCard';

const GRADIENTS = [
  {
    id: '1',
    tailwind: 'bg-[linear-gradient(135deg,_#ff6a00,_#ee0979)]',
    css: 'background: linear-gradient(135deg, #ff6a00, #ee0979);',
  },
  {
    id: '2',
    tailwind:
      'bg-[linear-gradient(135deg,_#a8edea,_#fed6e3,_#fbc2eb,_#a6c1ee)]',
    css: 'background: linear-gradient(135deg, #a8edea, #fed6e3, #fbc2eb, #a6c1ee)',
  },
];

export default function GradientsPage() {
  return (
    <section className="px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Gradients</h1>
      <p className="mb-8 text-foreground/60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nisi
        reprehenderit. Laboriosam iure quaerat ex. Praesentium, facere
        necessitatibus. Quaerat, omnis dicta porro quisquam impedit alias magni
        est laudantium! Dicta, eveniet!
      </p>

      <div className="grid grid-cols-3 gap-12">
        {GRADIENTS.map((gradient) => {
          return <GradientCard key={gradient.id} gradient={gradient} />;
        })}
      </div>
    </section>
  );
}
