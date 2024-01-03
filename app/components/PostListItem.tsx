"use client";

import { useState } from "react";

interface postListItemProps {
  id: number;
  text: string;
  isPinned: boolean;
}

export default function PostListItem({
  id,
  text,
  isPinned,
}: postListItemProps) {
  return (
    <div className="flex items-center gap-2 text-nowrap">
      <div className="h-full w-full relative aspect-square">
        <div className="absolute top-0 right-10">
          <span className="material-icons">push_pin</span>
        </div>
        <div className="absolute top-0 right-0">
          <span className="material-icons">close</span>
        </div>
        <div className="w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="md:text-sm text-xs break-all">{text}</p>
        </div>
      </div>
    </div>
  );
}
