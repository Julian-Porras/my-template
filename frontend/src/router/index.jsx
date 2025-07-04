import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";

const HomePage = lazy(() => import("../pages/home"));

const LazyWrapper = (Component) => (
  <Suspense fallback={null}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "home",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: LazyWrapper(HomePage),
          },
        ],
      },
    ],
  },
]);
export default router;
