import { useLoaderData, Form, useActionData } from "react-router-dom";

const ViewPostPage = () => {
  const { id, post } = useLoaderData();
  const actionData = useActionData();

  return (
    <div className="text-center">
      <h1 className="text-6xl text-center p-12 font-bold">{post.title}</h1>

      <p>{post.body}</p>

      <hr className="my-12" />

      <h2 className="text-2xl font-bold">Comments</h2>

      <Form method="post" action={`/posts/${id}`}>
        <textarea
          name="comment"
          className="w-full h-24 my-4 border border-slate-300 p-4 rounded"
          placeholder="Write a comment..."
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </Form>

      <hr className="my-12" />

      {actionData?.id && (
        <>
          <h2 className="text-2xl font-bold">Comment #{actionData.id}</h2>
          <p>{actionData.body}</p>
        </>
      )}
    </div>
  );
};

export default ViewPostPage;
