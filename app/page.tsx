"use client";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import axios from "axios";
import Swal from "sweetalert2";
import PostList from "./components/PostList";

export default function Home() {
  //post
  let [postList, setPostList] = useState([]);
  console.log("postList", postList);

  //On load, get post
  useEffect(() => {
    getPost();
  }, []);

  //GET request
  const getPost = () => {
    axios
      .get("/api/post")
      .then((response) => {
        setPostList(response.data);
      })
      .catch((error) => {
        console.log("Error Getting");
      });
  };

  //POST request
  const addPost = (text: string) => {
    axios
      .post("/api/post", {
        text: text,
      })
      .then((response) => {
        getPost();
      })
      .catch((error) => {
        Swal.fire({
          text: "There was an error adding post",
          icon: "error",
        });
      });
  };

  //PUT request
  const updatePost = (idToUpdate: number, isPinned: boolean) => {
    axios
      .put(`/api/post/${idToUpdate}`, {
        idToUpdate: idToUpdate,
        isPinned: isPinned,
      })
      .then((response) => {
        getPost();
      })
      .catch((error) => {
        Swal.fire({
          text: "There was an error pinning the post",
          icon: "error",
        });
      });
  };

  //DELETE request
  const deletePost = (idToDelete: number) => {
    axios
      .delete(`/api/post/${idToDelete}`)
      .then((response) => {
        getPost();
      })
      .catch((error) => {
        Swal.fire({
          text: "There was an error deleting post",
          icon: "error",
        });
      });
  };

  return (
    <div className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col px-8 sm:px-24">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Post It!
      </h1>
      <CreatePost addPost={addPost} />
      <div className="w-full sm:py-16 md:columns-2 xl:columns-3">
        <PostList
          postList={postList}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      </div>
    </div>
  );
}
