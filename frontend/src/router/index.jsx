import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import { MainRouter } from "./MainRouter";
import { LazyWrapper } from "../components/LazyWrapper";

const LoginPage = lazy(() => import("../pages/auth/Login"));
const ForgotPasswordPage = lazy(() => import("../pages/auth/ForgotPassword"));
const NotFound = lazy(() => import("../pages/errors/404"));
const NotPermitted = lazy(() => import("../pages/errors/403"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: LazyWrapper(LoginPage) },
      { path: "login", element: LazyWrapper(LoginPage) },
      { path: "forgot", element: LazyWrapper(ForgotPasswordPage) },
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
