"use client";
import { useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import axios from "axios";
import Swal from "sweetalert2";

export default function Home() {
  //post
  let [postList, setPostList] = useState([]);
  console.log("postList",postList)

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
  const addPost = (text:string) => {
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
          icon: "error"
        });
      });
  };

  return (
    <main>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
        Post It!
      </h1>
      <CreatePost addPost={addPost}/>
    </main>
  );
}
