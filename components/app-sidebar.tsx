'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { usePathname } from 'next/navigation';
import { NavUser } from './nav-user';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getUserData } from '@/app/actions';
import { Tier } from '@prisma/client';
import { sidebarData } from '@/constants/sidebar-data';

type UserData = {
  name: string;
  email: string;
  tier: keyof typeof Tier;
  image: string;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    (async function () {
      const userData = await getUserData();
      setIsLoggedIn(userData.isLoggedIn);
      setUserData(userData.data);
    })();
  }, []);

  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="#" className="mt-2 flex items-center gap-2 pl-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                <Image src="/logo.svg" alt="logo" width={30} height={30} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">ghlcn</span>
                {isLoggedIn && (
                  <span className="truncate text-xs capitalize">
                    {userData?.tier}
                  </span>
                )}
              </div>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
      {isLoggedIn && (
        <SidebarFooter>
          <NavUser
            name={userData?.name ?? ''}
            email={userData?.email ?? ''}
            avatar={userData?.image ?? ''}
          />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
