'use client';

import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { usePathname } from 'next/navigation';

export function DocsBreadcrumb() {
  const pathname = usePathname().slice(1);
  const pathanmeComponents = pathname.split('/');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathanmeComponents.map((path, index) => {
          return (
            <React.Fragment key={path}>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">{path}</BreadcrumbLink>
              </BreadcrumbItem>
              {index < pathanmeComponents.length - 1 && (
                <BreadcrumbSeparator className="hidden md:block" />
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
