"use client";

import { useState } from "react";

interface createPostProps{
    addPost: any
}

export default function CreatePost({addPost}:createPostProps) {

  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

   //Submit form
   const handleSubmit = (event:any) => {
    event.preventDefault();
    addPost(text);
    setText("");
  };

  return (
    <form className="bg-white my-8 p-8 rounded-md" onSubmit={handleSubmit}>
      <div className="flex flex-col my-2">
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
          name="title"
          placeholder="What do you need to write down?"
          className="p-4 text-lg rounded-md my-2  bg-gray-200"
        />
      </div>
      <div className=" flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            text.length > 300 ? "text-red-700" : "text-gray-700"
          } `}
        >{`${text.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-sm bg-blue-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create post
        </button>
      </div>
    </form>
  );
}
