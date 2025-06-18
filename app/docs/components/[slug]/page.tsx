import { CodeIcon, Eye } from 'lucide-react';
import { CodeBlock } from '@/components/code-block';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default async function ComponentDetails({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  console.log('Component Details Page', params);
  // const componentData = await getComponentData(
  //   (
  //     await params
  //   ).slug,
  //   Platform.systeme_io,
  // );

  // if (componentData.status == 404) {
  //   return notFound();
  // }

  // if (componentData.status == 500) {
  //   return (
  //     <main className="max-w-5xl text-center mt-24">
  //       <h2 className="text-2xl">Data not found</h2>
  //       <p className="text-muted-foreground">Try again later</p>
  //     </main>
  //   );
  // }

  const htmlCode = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Button</title>
  <style>
    body {
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f0f0;
    }

    #myButton {
      padding: 15px 30px;
      font-size: 18px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    #myButton.clicked {
      background-color: #28a745;
    }
  </style>
</head>
<body>
  <button id="myButton">Click Me</button>

  <script>
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
      button.classList.toggle('clicked');
      if (button.classList.contains('clicked')) {
        button.textContent = 'Clicked!';
      } else {
        button.textContent = 'Click Me';
      }
    });
  </script>
</body>
</html>
`;

  return (
    <main className="max-w-6xl">
      <div>
        <h1 className="text-3xl font-semibold capitalize">Button</h1>
        <p className="mt-4 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad eveniet,
          dolore provident vero cumque atque nesciunt ut, alias temporibus rem
          eligendi nemo porro assumenda optio voluptatem itaque et dolor.
          Obcaecati! Nemo possimus sequi libero tempore! Saepe nisi culpa
          consequatur, ex architecto libero doloribus assumenda impedit aliquid
          rerum odio tempore nam, voluptatibus obcaecati. Suscipit quo
          dignissimos expedita repellendus quae illo? Sint!
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
                src="https://manishdevrani777.systeme.io/72d16711"
                width="100%"
                height="500"
                className="border-none rounded-lg"
                loading="lazy"
                title="Component Preview"
              ></iframe>
            </div>
          </TabsContent>
          <TabsContent value="code" className="w-full rounded-lg">
            <div className="rounded-lg">
              <CodeBlock code={htmlCode} language="html" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Usage Guide</h2>
        <div className="mt-8">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/mn0Rs4ABFBg?si=gyPn0woxdZ4Wp6lo"
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
