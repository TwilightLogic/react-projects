import { Link, useLoaderData } from "react-router-dom";

const PostPage = () => {
  const { posts } = useLoaderData();

  return (
    <div className="text-center">
      <h1 className="text-6xl text-center p-12 font-bold">Posts</h1>

      <ul className="list-disc text-left">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
