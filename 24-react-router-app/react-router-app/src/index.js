import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Root from "./pages/Root";
import PostPage from "./pages/PostPage";
import ViewPostPage from "./pages/ViewPostPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/posts",
        element: <PostPage />,
        loader: async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
          );
          const posts = await response.json();
          return { posts };
        },
      },
      // `/posts/:id`表示`id`是个动态的值，下面的loader会拿到
      {
        path: "/posts/:id",
        element: <ViewPostPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          const post = await response.json();
          return {
            id: params.id,
            post,
          };
        },
        // 这个时候用`action`来接收ViewPostPage页面submit的info
        action: async ({ request }) => {
          const form = await request.formData();

          return {
            id: 1000,
            body: form.get("comment"),
          };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
