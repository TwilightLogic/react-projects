import { Link, useLoaderData } from "react-router-dom";

const ViewPostPage = () => {
  const { posts } = useLoaderData();

  return (
    <div className="text-center">
      <h1 className="text-6xl text-center p-12 font-bold">(Post Title)</h1>

      <p>(Post Content)</p>
    </div>
  );
};

export default ViewPostPage;
