import { notFound } from 'next/navigation';
import { Clipboard, CodeIcon, Eye } from 'lucide-react';
import { Platform } from '@prisma/client';
import { getComponentData } from './actions';
import { CodeBlock } from '@/components/code-block';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
    return notFound();
  }

  if (componentData.status == 500) {
    return (
      <main className="max-w-5xl text-center mt-24">
        <h2 className="text-2xl">Data not found</h2>
        <p className="text-muted-foreground">Try again later</p>
      </main>
    );
  }

  function craftCompleteCode() {
    let completeCode = '';

    if (componentData.data?.htmlCode) {
      completeCode += `${componentData.data?.htmlCode}`;
    }

    if (componentData.data?.cssCode) {
      completeCode += `<style>\n${componentData.data?.cssCode}\n</style>`;
    }

    if (componentData.data?.jsCode) {
      completeCode += `<script>${componentData.data?.jsCode}</script>`;
    }

    return completeCode;
  }

  return (
    <main className="max-w-6xl">
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
                <Select defaultValue="ghl">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ghl">Go High Level</SelectItem>
                    <SelectItem value="systeme">Systeme.io</SelectItem>
                  </SelectContent>
                </Select>
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
          <TabsContent value="code" className="w-full rounded-lg">
            <div className="rounded-lg">
              <CodeBlock code={craftCompleteCode()} language="" />
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
