export default function Docs() {
  return (
    <section className="max-w-4xl px-4 pb-24 mt-[-4px]">
      <h1 className="text-3xl font-bold mb-6">Introduction</h1>
      <p className="mb-6 text-foreground/60">
        Build beautiful, high-converting pages on{' '}
        <strong className="text-foreground">Systeme.io</strong> —without writing
        a line of JavaScript.
      </p>
      <p className="mb-8 text-foreground/60">
        This library provides a growing collection of{' '}
        <strong className="text-foreground">
          ready-to-use HTML & CSS components
        </strong>{' '}
        that are fully compatible with Systeme.io&apos;s page builder. Whether
        you&apos;re a course creator, funnel builder, or entrepreneur, you can
        copy, paste, and launch faster.
      </p>

      <h2 className="text-2xl font-semibold mb-4">🛠 Why this library?</h2>
      <ul className="list-disc list-inside space-y-2 mb-8">
        <li>
          <strong>Pixel-perfect components</strong> built for Systeme.io’s
          structure
        </li>
        <li>
          <strong>Copy & paste ready</strong>: just drop the HTML + CSS into
          your editor
        </li>
        <li>
          <strong>No JS required</strong>: all components are functional out of
          the box
        </li>
        <li>
          <strong>Customizable</strong>: tweak styles easily to match your brand
        </li>
        <li>
          <strong>Fast setup</strong>: avoid wasting time building from scratch
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">🚀 How it works</h2>
      <ol className="list-decimal list-inside space-y-2 mb-8">
        <li>
          Browse components: Buttons, hero sections, testimonials, pricing
          tables, and more
        </li>
        <li>Click to copy: Each component has clean, isolated HTML and CSS</li>
        <li>
          Paste in Systeme.io: Use the custom code block and paste the code
        </li>
        <li>Customize: Adjust styles, colors, and layout in your own way</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">💡 Who is this for?</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Creators & coaches building landing pages</li>
        <li>Marketers looking for faster funnel setup</li>
        <li>Agencies and freelancers using Systeme.io for clients</li>
      </ul>
    </section>
  );
}
