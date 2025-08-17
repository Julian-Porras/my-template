import { NavLink, useLocation } from "react-router-dom";
import { useUi } from "../context/UiContext";
import { useEffect, useRef, useState } from "react";
import { MainRouter } from "../router/MainRouter";
import { ChevronDown } from "lucide-react";

const Sidebar = () => {
  const {
    isSidebarOpen,
    setSidebarOpen,
    isSidebarSubmenuOpen,
    toggleSubmenu,
    resetSubmenus,
  } = useUi();

  const location = useLocation();
  const sidebarRef = useRef(null);
  const base = location.pathname.split("/")[1];
  let sidebarHeader = "information system";
  let routes = [];
  routes = MainRouter;

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
                const isOpen = isSidebarSubmenuOpen[route.meta.label];

                return (
                  <div key={route.meta.label}>
                    {hasChildren ? (
                      <>
                        {/* Parent Menu Item */}
                        <div
                          className="flex justify-between items-center p-2 text-gray-700 rounded-md cursor-pointer hover:bg-gray-100 transition-colors mb-2"
                          onClick={() => toggleSubmenu(route.meta.label)}
                        >
                          <div className="flex items-center gap-2">
                            {Icon && (
                              <Icon size={19} className="text-gray-600" />
                            )}
                            <span className=" font-medium">
                              {route.meta.label}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Submenu Items */}
                        <Submenu isOpen={isOpen}>
                          {route.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={`/${child.path}`}
                              className={({ isActive }) =>
                                `block py-2 px-3 rounded-md transition-colors ${
                                  isActive
                                    ? "bg-[var(--secondary-color)] text-white"
                                    : "text-gray-600 hover:bg-gray-200"
                                }`
                              }
                              onClick={() => {
                                if (window.innerWidth < 768) {
                                  setSidebarOpen(false);
                                }
                              }}
                            >
                              {child.meta?.label}
                            </NavLink>
                          ))}
                        </Submenu>
                      </>
                    ) : (
                      /* Single NavLink stays same */
                      <NavLink
                        to={`/${route.path}`}
                        className={({ isActive }) =>
                          `flex items-center p-2 rounded-md ${
                            isActive
                              ? `bg-[var(--secondary-color)] text-white`
                              : `hover:bg-gray-100`
                          }`
                        }
                        onClick={() => {
                          resetSubmenus(); // Close all submenus
                          if (window.innerWidth < 768) {
                            setSidebarOpen(false);
                          }
                        }}
                      >
                        {Icon && <Icon className="w-5 h-5" />}
                        <span className="ms-3 font-medium">
                          {route.meta.label}
                        </span>
                      </NavLink>
                    )}
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

const Submenu = ({ isOpen, children }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState("0px");
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const contentHeight = ref.current.scrollHeight;
      const maxHeight = 300; // ~10 items, adjust as needed

      if (isOpen) {
        // If content is taller than maxHeight, limit and enable scroll
        if (contentHeight > maxHeight) {
          setHeight(`${maxHeight}px`);
          setIsScrollable(true);
        } else {
          setHeight(`${contentHeight}px`);
          setIsScrollable(false);
        }
      } else {
        setHeight("0px");
      }
    }
  }, [isOpen, children]);

  return (
    <div
      ref={ref}
      style={{ height }}
      className={`ml-4 flex flex-col gap-2 rounded-md bg-gray-100 transition-all duration-200 ease-in-out overflow-hidden ${
        isScrollable ? "overflow-y-auto pr-1" : ""
      }`}
    >
      {children}
    </div>
  );
};

export default Sidebar;
