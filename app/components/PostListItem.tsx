"use client";

import { useState } from "react";
import Swal from "sweetalert2";

interface postListItemProps {
  id: number;
  text: string;
  isPinned: boolean;
  deletePost: Function;
  updatePost: Function;
}

export default function PostListItem({
  id,
  text,
  isPinned,
  deletePost,
  updatePost,
}: postListItemProps) {
  const [pinned, setPinned] = useState(isPinned);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once post is deleted, the action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result: any) => {
      if (result.isConfirmed) {
        deletePost(id);
      }
    });
  };

  const handleUpdate = () => {
    updatePost(id, !pinned);
    setPinned(!pinned);
  };

  return (
    <div className="h-full w-full relative aspect-square ">
      {isPinned ? (
        <div className="absolute top-0 left-0" onClick={handleUpdate}>
          <span className="material-icons cursor-pointer icon-blue ">
            push_pin
          </span>
        </div>
      ) : (
        <div className="absolute top-0 left-0" onClick={handleUpdate}>
          <span className="material-icons cursor-pointer">push_pin</span>
        </div>
      )}

      <div className="absolute top-0 right-0" onClick={handleDelete}>
        <span className="material-icons cursor-pointer">close</span>
      </div>
      <div className="w-full h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="md:text-sm text-xs break-words text-center text-nowrap">
          {text}
        </p>
      </div>
    </div>
  );
}
