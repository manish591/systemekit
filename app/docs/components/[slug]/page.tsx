import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getComponentData } from './actions';
import { notFound } from 'next/navigation';
import { Platform } from '@prisma/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Clipboard, CodeIcon, Eye } from 'lucide-react';

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
        <Tabs defaultValue="preview" className="flex flex-col">
          <div className="flex items-center pb-1">
            <div className="flex items-center justify-between w-full">
              <TabsList className="grid w-[200px] grid-cols-2">
                <TabsTrigger
                  value="preview"
                  className="flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-2">
                  <CodeIcon className="h-4 w-4" />
                  Code
                </TabsTrigger>
              </TabsList>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-accent">
                    html
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>HTML</DropdownMenuItem>
                    <DropdownMenuItem>CSS</DropdownMenuItem>
                    <DropdownMenuItem>JavaScript</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="border p-2 rounded-lg">
                  <Clipboard className="h-full w-4" />
                </div>
              </div>
            </div>
          </div>

          <TabsContent value="preview" className="w-full">
            <div className="rounded-lg border p-8">
              Preview content goes here
            </div>
          </TabsContent>
          <TabsContent value="code" className="w-full border rounded-lg">
            <div className="rounded-lg bg-muted/50 p-8">
              <pre className="text-sm">{`${componentData.data?.cssCode}`}</pre>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {componentData.data?.usageGuide && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold">Usage Guide</h2>
          <div className="mt-8">
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${
                componentData.data?.usageGuide.split('/').slice(-1)[0]
              }`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-[16px]"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
}
