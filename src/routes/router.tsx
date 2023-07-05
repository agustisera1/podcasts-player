import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Root view</div>,
  },
  {
    path: "/podcast/:pid",
    element: <div>Podcast detail view</div>,
  },
  {
    path: "/podcast/:pid/episode/:eid",
    element: <div>Episode detail view</div>,
  },
]);

export const Router = () => <RouterProvider router={router} />;
