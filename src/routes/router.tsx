import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainView, PodcastDetail } from "../views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainView />,
  },
  {
    path: "/podcast/:pid",
    element: <PodcastDetail />,
  },
  {
    path: "/podcast/:pid/episode/:eid",
    element: <div>Episode detail view</div>,
  },
]);

export const Router = () => <RouterProvider router={router} />;
