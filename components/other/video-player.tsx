'use client';

import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { DialogTitle } from '@radix-ui/react-dialog';

interface VideoPlayerProps {
  videoId: string;
  thumbnailUrl: string;
  title: string;
}

export function VideoPlayer({
  videoId,
  thumbnailUrl,
  title,
}: Readonly<VideoPlayerProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-full cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <div className="group border relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={thumbnailUrl}
            alt={title}
            width={400}
            height={500}
            className="w-full h-full object-cover duration-200 transtion-all group-hover:brightness-[0.7]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-red-500 p-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogContent className="sm:max-w-[800px] p-0">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 z-50 rounded-full bg-black/50 hover:bg-black/70"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4 text-white" />
            </Button>
            <div className="aspect-video w-full">
              <iframe
                title="video explainer"
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
