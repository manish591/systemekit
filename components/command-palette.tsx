'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Search, File, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DialogTitle } from '@radix-ui/react-dialog';
import { commandPaletteLinks } from '@/constants/command-palette-link';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = commandPaletteLinks.filter((link) =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-foreground/60 rounded-full text-sm"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4" />
      </Button>

      {/* Command palette dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle className="sr-only">commnad palette</DialogTitle>
        <DialogContent className="sm:max-w-[550px] p-0">
          <div className="flex items-center border-b px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <input
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Type a command or search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button onClick={() => setOpen(false)} className="p-1">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-3 py-2">
            <div className="text-sm font-medium text-muted-foreground py-1.5">
              Links
            </div>
            <div className="mt-2 max-h-[300px] overflow-y-auto">
              {filteredLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-3 text-sm hover:bg-accent',
                    'cursor-pointer',
                  )}
                  onClick={() => setOpen(false)}
                >
                  <File className="h-4 w-4" />
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
