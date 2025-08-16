import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";

const LoginPage = lazy(() => import("../pages/auth/Login"));
const DashboardPage = lazy(() => import("../pages/Dashboard"));
const SettingsPage = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../util/404"));
const NotPermitted = lazy(() => import("../util/403"));

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
      { path: "login", element: LazyWrapper(LoginPage) },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: LazyWrapper(DashboardPage),
          },
        ],
      },
      {
        path: "settings",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: LazyWrapper(SettingsPage),
          },
        ],
      },
      {
        path: "*",
        name: "NotFound",
        element: LazyWrapper(NotFound),
      },
      {
        path: "accessdenied",
        name: "AccessDenied",
        element: LazyWrapper(NotPermitted),
      },
    ],
  },
]);
export default router;
