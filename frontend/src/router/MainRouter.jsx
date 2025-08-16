import { lazy } from "react";
import { ClipboardPen, Database, LayoutDashboard } from "lucide-react";
import { LazyWrapper } from "../components/LazyWrapper";

const DashboardPage = lazy(() => import("../pages/Dashboard"));
const SamplePage = lazy(() => import("../pages/Sample"));
const SettingsPage = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../util/404"));
const NotPermitted = lazy(() => import("../util/403"));

export const MainRouter = [
  {
    path: "dashboard",
    element: LazyWrapper(DashboardPage),
    meta: { label: "Dashboard", icon: LayoutDashboard },
  },
  {
    path: "settings",
    element: LazyWrapper(SettingsPage),
  },
  {
    path: "sample",
    element: LazyWrapper(SamplePage),
    meta: { label: "Sample Page", icon: Database },
  },
  {
    meta: { label: "Dropdown", icon: Database },
    children: [
      {
        path: "submenu1",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 1" },
      },
      {
        path: "submenu2",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 2" },
      },
      {
        path: "submenu3",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 3" },
      },
      // {
      //   path: "submenu4",
      //   element: LazyWrapper(SamplePage),
      //   meta: { label: "Submenu 4" },
      // },
      // {
      //   path: "submenu5",
      //   element: LazyWrapper(SamplePage),
      //   meta: { label: "Submenu 5" },
      // },
      // {
      //   path: "submenu6",
      //   element: LazyWrapper(SamplePage),
      //   meta: { label: "Submenu 6" },
      // },
    ],
  },
  {
    path: "*",
    name: "NotFound",
    element: <NotFound />,
  },
  {
    path: "accessdenied",
    name: "AccessDenied",
    element: <NotPermitted />,
  },
];
