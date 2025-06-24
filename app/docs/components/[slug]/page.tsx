import { CodeIcon, Eye, Lock, Star, Code } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getComponentsData, isPremiumAccount } from './actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { isUserAdmin } from '@/app/admin/action';
import { AccessLevel } from '@prisma/client';

export default async function ComponentDetails({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const isProUser = await isPremiumAccount();
  const isAdmin = await isUserAdmin();
  const componentData = await getComponentsData(slug);

  function constructComponentCode() {
    let componentCode = '';

    if (componentData?.htmlCode) {
      componentCode += componentData.htmlCode;
    }

    if (componentData?.cssCode) {
      componentCode += `\n\n<style>\n${componentData.cssCode}\n</style>`;
    }

    if (componentData?.jsCode) {
      componentCode += `\n\n<script>\n${componentData.jsCode}\n</script>`;
    }

    return componentCode;
  }

  return (
    <main className="max-w-6xl">
      <div>
        <h1 className="text-3xl font-semibold capitalize">
          {componentData.name}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {componentData.description}
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
            </div>
          </div>

          <TabsContent value="preview" className="w-full">
            <div className="rounded-lg border p-4">
              <iframe
                src={componentData.previewIframe}
                width="100%"
                height="400"
                className="border-none rounded-lg"
                loading="lazy"
                title="Component Preview"
              ></iframe>
            </div>
          </TabsContent>
          <TabsContent value="code" className="w-full rounded-lg">
            {componentData.accessLevel === AccessLevel.FREE ? (
              <div className="rounded-lg">
                <CodeBlock code={constructComponentCode()} language="html" />
              </div>
            ) : (
              <>
                {isAdmin || isProUser ? (
                  <div className="rounded-lg">
                    <CodeBlock
                      code={constructComponentCode()}
                      language="html"
                    />
                  </div>
                ) : (
                  <div className="space-y-6">
                    <Card className="relative overflow-hidden">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          {componentData.name}
                          <Badge variant="secondary" className="ml-auto">
                            <Star className="h-3 w-3 mr-1" />
                            Premium
                          </Badge>
                        </CardTitle>
                        <CardDescription className="max-w-[500px] truncate">
                          {componentData.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="relative">
                          <div className="bg-muted p-4 rounded-lg blur-sm select-none">
                            <pre className="text-sm">
                              {`// Advanced React Hook Pattern
import { useState, useEffect, useCallback } from 'react';

const useAdvancedState = (initialValue) => {
  const [state, setState] = useState(initialValue);
  const [history, setHistory] = useState([initialValue]);
  
  const undo = useCallback(() => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setState(newHistory[newHistory.length - 1]);
    }
  }, [history]);
  
  return { state, updateState, undo, canUndo: history.length > 1 };
};

export default useAdvancedState;`}
                            </pre>
                          </div>
                          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                            <Card className="w-full max-w-md mx-4">
                              <CardHeader className="text-center">
                                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-2">
                                  <Lock className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Premium Content</CardTitle>
                                <CardDescription>
                                  Upgrade to Premium to access advanced code
                                  examples and tutorials
                                </CardDescription>
                              </CardHeader>
                              <CardFooter>
                                <Link href="/#pricing" className="mx-auto">
                                  <Button className="w-full">
                                    <Star className="h-4 w-4 mr-2" />
                                    Buy Premium
                                  </Button>
                                </Link>
                              </CardFooter>
                            </Card>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Usage Guide</h2>
        <div className="mt-8">
          <iframe
            width="100%"
            height="500"
            className="rounded-xl"
            src={componentData.usageGuide!}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
