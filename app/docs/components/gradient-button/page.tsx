import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GradientButton() {
  return (
    <main className="max-w-5xl">
      <div>
        <h1 className="text-3xl font-semibold">Gradient Button</h1>
        <p className="mt-4 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          earum laboriosam, ipsa impedit vel non animi, expedita illo maxime
          quasi praesentium quisquam enim illum. Impedit expedita quibusdam
          exercitationem dolorum veniam? Ab rem quo voluptatum quibusdam, dolor
          repudiandae unde amet vero optio recusandae voluptas hic ea sint illo
          eos! Sed aspernatur ex velit tempore. Hic consectetur qui nobis, eius
          officiis exercitationem?
        </p>
      </div>
      <div className="mt-10">
        <Tabs defaultValue="preview" className="max-w-5xl">
          <TabsList className="p-0 rounded-none flex justify-start items-end border-b bg-transparent">
            <TabsTrigger
              value="preview"
              className="border-b-2 border-transparent p-3 rounded-none data-[state=active]:shadow-none data-[state=active]:border-foreground"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="border-b-2 border-transparent p-3 rounded-none data-[state=active]:shadow-none data-[state=active]:border-foreground"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="mt-4">
            <div className="p-10 border rounded-md"></div>
          </TabsContent>
          <TabsContent value="code" className="mt-4">
            <div className="p-10 border rounded-md"></div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Usage Guide</h2>
      </div>
    </main>
  );
}
