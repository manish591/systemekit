import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getComponentData } from './actions';
import { notFound } from 'next/navigation';
import { Platform } from '@prisma/client';

export default async function ComponentDetails({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const componentData = await getComponentData(
    (
      await params
    ).slug,
    Platform.systeme_io,
  );

  if (componentData.status == 404) {
    notFound();
    return;
  }

  if (componentData.status == 500) {
    return (
      <main className="max-w-5xl text-center mt-24">
        <h2 className="text-2xl">Data not found</h2>
        <p className="text-muted-foreground">Try again later</p>
      </main>
    );
  }

  console.log('component data', componentData);

  return (
    <main className="max-w-5xl">
      <div>
        <h1 className="text-3xl font-semibold capitalize">
          {componentData.data?.name}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {componentData.data?.description}
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
        <div className="mt-8">
          <iframe
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/CpBXikakzks?si=MXUJy96-znPoT0-v"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-[16px]"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
