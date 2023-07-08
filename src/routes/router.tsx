import { FC, PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../layout";

import { MainView, PodcastDetail, EpisodeDetail } from "../views";

const withLayout = (View: FC, Wrapper: FC<PropsWithChildren> = Layout) => (
  <Wrapper>
    <View />
  </Wrapper>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(MainView),
  },
  {
    path: "/podcast/:pid",
    element: withLayout(PodcastDetail),
  },
  {
    path: "/podcast/:pid/episode/:eid",
    element: withLayout(EpisodeDetail),
  },
]);

export const Router = () => <RouterProvider router={router} />;
