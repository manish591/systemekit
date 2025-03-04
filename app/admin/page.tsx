import { Plus } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Link from 'next/link';
import CreateComponentForm from './create-component-form';
import { getAllComponents } from './action';
import { BASE_URL } from '@/constants/app';

function getBadgeVariant(tier: string) {
  if (tier === 'PRO') return 'destructive';
  if (tier === 'FREE') return 'default';
  return 'secondary';
}

export default async function Admin() {
  const componentsData = await getAllComponents();

  return (
    <div>
      <header className="w-full py-4 px-8 bg-background border sticky top-0">
        <div className="flex max-w-7xl mx-auto justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div>
              <Image src="/logo.svg" alt="logo" width={30} height={30} />
            </div>
            <span className="text-xl font-semibold">ghlcn</span>
          </Link>
          <Dialog>
            <DialogTrigger className="bg-primary rounded-md py-3 px-6 text-white flex items-center gap-1">
              <Plus className="h-4 w-4" />
              <span>Add New Component</span>
            </DialogTrigger>
            <DialogContent className="p-0">
              <DialogHeader className="py-4 px-5">
                <DialogTitle>Create New Component</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new component.
                </DialogDescription>
              </DialogHeader>
              <CreateComponentForm />
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <div className="grid min-h-screen w-full lg:grid-cols-1 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 md:gap-8 py-12">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold md:text-2xl">Components</h1>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {componentsData.data ? (
                componentsData.data.map((component) => (
                  <Card key={component.id} className="overflow-hidden">
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <CardTitle>{component.name}</CardTitle>
                        <Badge variant={getBadgeVariant(component.accessLevel)}>
                          {component.accessLevel}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {component.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4">
                      <Link
                        href={`${BASE_URL}/docs/components/${component.slug}`}
                      >
                        <Button variant="outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div></div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
