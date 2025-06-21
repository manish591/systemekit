import { Trash2, Eye, Calendar, Crown, Edit } from 'lucide-react';
import { AccessLevel, Component } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface ComponentCardProps {
  component: Component;
}

export function ComponentCard({ component }: Readonly<ComponentCardProps>) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  function constructCode() {
    let code = '';

    if (component.htmlCode) {
      code += `${component.htmlCode}\n\n`;
    }

    if (component.cssCode) {
      code += `<style>${component.cssCode}</style>\n\n`;
    }

    if (component.jsCode) {
      code += `<script>${component.jsCode}</script>\n\n`;
    }

    return code;
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold">
              {component.name}
            </CardTitle>
          </div>
          <div className="flex gap-2 ml-2">
            <Badge
              variant={
                component.accessLevel === AccessLevel.PRO
                  ? 'default'
                  : 'outline'
              }
              className={
                component.accessLevel === AccessLevel.PRO
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0'
                  : 'text-green-700 border-green-200 bg-green-50'
              }
            >
              {component.accessLevel === AccessLevel.PRO ? (
                <>
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </>
              ) : (
                'Free'
              )}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-sm text-foreground/60 mt-1">
          {component.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Code Preview */}
        <div className="bg-accent/40 rounded-lg p-3 border">
          <code className="text-sm text-foreground/80 font-mono line-clamp-2">
            {constructCode()}
          </code>
        </div>

        {/* Created Date */}
        <div className="flex items-center text-sm text-foreground/60">
          <Calendar className="h-4 w-4 mr-2" />
          Created {formatDate(component.createdAt)}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="h-4 w-4" />
            Preview
          </Button>

          <Button variant="outline" size="sm" className="flex-1">
            <Edit className="h-4 w-4" />
            Edit
          </Button>

          <Button variant="outline" size="sm">
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
