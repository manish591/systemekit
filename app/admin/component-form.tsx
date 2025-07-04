'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createNewComponent } from './action';
import { useRouter } from 'next/navigation';
import { AccessLevel, ComponentStatus } from '@prisma/client';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  slug: z
    .string()
    .min(2, {
      message: 'Slug must be at least 2 characters.',
    })
    .regex(/^[a-z0-9-]+$/, {
      message: 'Slug can only contain lowercase letters, numbers, and hyphens.',
    }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  previewIframe: z.string().url({
    message: 'Please enter a valid URL.',
  }),
  previewImage: z.string().url({
    message: 'Please enter a valid URL.',
  }),
  accessLevel: z.nativeEnum(AccessLevel, {
    required_error: 'Please select an access level.',
  }),
  status: z.nativeEnum(ComponentStatus, {
    required_error: 'Please select component status.',
  }),
  cssCode: z.string().optional(),
  htmlCode: z.string().optional(),
  jsCode: z.string().optional(),
  usageGuide: z.string().url({
    message: 'Please enter a valid youtube video URL.',
  }),
});

export type FormValues = z.infer<typeof formSchema>;

export function ComponentForm({
  setCloseFormDialog,
}: Readonly<{ setCloseFormDialog: (value: boolean) => void }>) {
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      slug: '',
      description: '',
      previewIframe: '',
      previewImage: '',
      cssCode: '',
      htmlCode: '',
      jsCode: '',
      usageGuide: '',
      accessLevel: undefined,
      status: undefined,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      await createNewComponent(data);
      router.refresh();
      setCloseFormDialog(false);
    } catch (err) {
      console.log('Error creating component:', err);
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto border-0 shadow-none">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="h-[400px] overflow-hidden overflow-y-scroll">
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Component name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input placeholder="component-slug" {...field} />
                      </FormControl>
                      <FormDescription>
                        Used in URLs. Use lowercase letters, numbers, and
                        hyphens only.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter a description of the component"
                        rows={3}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select component status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={ComponentStatus.DRAFT}>
                            Draft
                          </SelectItem>
                          <SelectItem value={ComponentStatus.PUBLISHED}>
                            Published
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="accessLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Access Level</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select access level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value={AccessLevel.FREE}>Free</SelectItem>
                          <SelectItem value={AccessLevel.PRO}>Pro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="htmlCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>HTML Code</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter HTML code"
                        className="font-mono min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cssCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CSS Code</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter CSS code"
                        className="font-mono min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jsCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>JavaScript Code</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter JavaScript code"
                        className="font-mono min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previewIframe"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preview iFrame</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter preview iframe URL"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="previewImage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preview Image</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter component preview image"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="usageGuide"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usage Guide</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter youtube video URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </div>
          <CardFooter className="flex items-center justify-between py-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setCloseFormDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Create Component</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
