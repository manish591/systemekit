import { ShadowCard } from './shadow-card';

const BOX_SHADOWS = [
  {
    id: '1',
    tailwind:
      'shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]',
    css: 'box-shadow: 0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08);',
  },
  {
    id: '2',
    tailwind:
      'shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]',
    css: 'box-shadow: 0px 0px 0px 1px rgb(0 0 0 / 0.06),0px 1px 1px -0.5px rgb(0 0 0 / 0.06),0px 3px 3px -1.5px rgb(0 0 0 / 0.06), 0px 6px 6px -3px rgb(0 0 0 / 0.06),0px 12px 12px -6px rgb(0 0 0 / 0.06),0px 24px 24px -12px rgb(0 0 0 / 0.06);',
  },
];

export default function BoxShadowsPage() {
  return (
    <section className="px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Box Shadows</h1>
      <p className="mb-8 text-foreground/60">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, nisi
        reprehenderit. Laboriosam iure quaerat ex. Praesentium, facere
        necessitatibus. Quaerat, omnis dicta porro quisquam impedit alias magni
        est laudantium! Dicta, eveniet!
      </p>

      <div className="grid grid-cols-3 gap-12">
        {BOX_SHADOWS.map((shadow) => {
          return <ShadowCard key={shadow.id} boxShadow={shadow} />;
        })}
      </div>
    </section>
  );
}
