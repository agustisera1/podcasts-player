import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainView, PodcastDetail, EpisodeDetail } from "../views";

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
    element: <EpisodeDetail />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
