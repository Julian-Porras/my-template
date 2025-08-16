import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import { MainRouter } from "./MainRouter";
import { LazyWrapper } from "../components/LazyWrapper";

const LoginPage = lazy(() => import("../pages/auth/Login"));
const NotFound = lazy(() => import("../util/404"));
const NotPermitted = lazy(() => import("../util/403"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "login", element: LazyWrapper(LoginPage) },
      { element: <MainLayout />, children: MainRouter },
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
