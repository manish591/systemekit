import { Separator } from '@/components/ui/separator';
import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { NavUser } from '@/components/nav-user';
import { DocsBreadcrumb } from '@/components/docs-breadcrumb';

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <DocsBreadcrumb />
            </div>
            <div className="w-max lg:w-[--sidebar-width]">
              <NavUser
                name="shadcn"
                email="m@example.com"
                avatar="/avatars/shadcn.jpg"
              />
            </div>
          </header>
          <div className="py-6 px-12">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
