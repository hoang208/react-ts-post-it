"use client";

import { useState } from "react";
import PostListItem from "./PostListItem";

type Post = {
  id: number;
  text: string;
  isPinned: boolean;
};

interface postListProps {
  postList: Array<Post>;
  deletePost: Function;
  updatePost: Function;
}

export default function PostList({
  postList,
  deletePost,
  updatePost,
}: postListProps) {
  return (
    <>
      {postList.map((post) => (
        <div className="bg-yellow-100 mb-8 p-8 break-inside-avoid-column shadow-lg ">
          <PostListItem
            key={post.id}
            id={post.id}
            text={post.text}
            isPinned={post.isPinned}
            deletePost={deletePost}
            updatePost={updatePost}
          />
        </div>
      ))}
    </>
  );
}
