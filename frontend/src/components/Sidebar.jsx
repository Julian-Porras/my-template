import { NavLink, useLocation } from "react-router-dom";
import { useUi } from "../context/UiContext";
import { useEffect, useRef } from "react";

const Sidebar = () => {
  const { isSidebarOpen, setSidebarOpen } = useUi();

  const location = useLocation();
  const sidebarRef = useRef(null);
  const base = location.pathname.split("/")[1];
  let sidebarHeader = "information system";
  let routes = [];

  const handleClickInside = (e) => {
    if (window.innerWidth >= 768) return; // only for small screens
    if (sidebarRef.current && sidebarRef.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickInside);
    return () => document.removeEventListener("mousedown", handleClickInside);
  }, []);
  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-60 h-screen border-r pt-20 border-gray-200 bg-white transition-transform duration-200 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="text-start my-2 mx-4 text-gray-400 uppercase text-xs">
          {sidebarHeader}
        </p>
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {routes
              .filter((route) => route.meta?.label)
              .map((route) => {
                const Icon = route.meta?.icon;
                const hasChildren = Array.isArray(route.children);
                return (
                  <div key={route.meta.label}>
                    <NavLink
                      to={`/${base}/${route.path}`}
                      className={({ isActive }) =>
                        `flex items-center p-2 text-gray-900 rounded-md ${
                          isActive
                            ? `bg-sky-950 text-white`
                            : `hover:bg-gray-200 `
                        }`
                      }
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          setSidebarOpen(() => false);
                        }
                      }}
                    >
                      {Icon && <Icon className="w-5 h-5 " />}
                      <span className="ms-3 ">{route.meta.label}</span>
                    </NavLink>
                  </div>
                );
              })}
          </ul>
        </div>
      </aside>
      <div
        ref={sidebarRef}
        className={`transition-opacity duration-100 backdrop-blur-[2px] bg-black/10 fixed inset-0 z-30 md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
