import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewPostPage = () => {
  const { id, post } = useLoaderData();
  const [comment, setComment] = useState("");

  return (
    <div className="text-center">
      <h1 className="text-6xl text-center p-12 font-bold">{post.title}</h1>

      <p>{post.body}</p>

      <hr className="my-12" />

      <h2 className="text-2xl font-bold">Comments</h2>
      <span className="bg-yellow-500">{comment}</span>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full h-24 my-4 border border-slate-300 p-4 rounded"
        placeholder="Write a comment..."
      ></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
    </div>
  );
};

export default ViewPostPage;
