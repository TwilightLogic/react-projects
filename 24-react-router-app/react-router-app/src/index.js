import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Root from "./pages/Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostPage from "./pages/PostPage";

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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
