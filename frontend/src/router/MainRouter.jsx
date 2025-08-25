import { lazy } from "react";
import {
  ClipboardPen,
  MapMinus,
  PanelsLeftBottom,
  Folders,
  Database,
  LayoutDashboard,
} from "lucide-react";
import { LazyWrapper } from "../components/LazyWrapper";

const DashboardPage = lazy(() => import("../pages/Dashboard"));
const SamplePage = lazy(() => import("../pages/Sample"));
const ButtonsPage = lazy(() => import("../pages/Buttons"));
const CardsPage = lazy(() => import("../pages/Cards"));
const SettingsPage = lazy(() => import("../pages/Settings"));
const NotFound = lazy(() => import("../pages/errors/404"));
const NotPermitted = lazy(() => import("../pages/errors/403"));

export const MainRouter = [
  {
    path: "dashboard",
    element: LazyWrapper(DashboardPage),
    meta: { label: "Dashboard", icon: LayoutDashboard },
  },
  {
    path: "buttons",
    element: LazyWrapper(ButtonsPage),
    meta: { label: "Buttons", icon: Folders },
  },
  {
    path: "cards",
    element: LazyWrapper(CardsPage),
    meta: { label: "Cards", icon: PanelsLeftBottom },
  },
  {
    path: "settings",
    element: LazyWrapper(SettingsPage),
  },
  {
    meta: { label: "Dropdown", icon: MapMinus },
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
      {
        path: "submenu4",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 4" },
      },
    ],
  },
  {
    meta: { label: "Dropdown 2", icon: MapMinus },
    children: [
      {
        path: "submenu5",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 5" },
      },
      {
        path: "submenu6",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 6" },
      },
      {
        path: "submenu7",
        element: LazyWrapper(SamplePage),
        meta: { label: "Submenu 7" },
      },
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
