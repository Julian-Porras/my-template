import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";
import { useUi } from "../context/UiContext";
import { MenuButton } from "./Buttons";

const Header = () => {
  const dropdownRef = useRef(null);
  const { setSidebarOpen } = useUi();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const base = location.pathname.split("/")[1];

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 ">
      <div className="px-3 py-3  lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <div className="md:hidden">
              <MenuButton method={setSidebarOpen} />
            </div>
            <a href="#" className="flex mx-2">
              <span className="self-center italic font-semibold whitespace-nowrap md:min-w-52">
                Template v2.0
              </span>
            </a>
            <div className="hidden md:block">
              <MenuButton method={setSidebarOpen} />
            </div>
          </div>
          <div className="relative" ref={dropdownRef}>
            <div
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center ms-3 cursor-pointer hover:underline gap-3"
            >
              <div className="rounded-full w-7 h-7 md:w-8 md:h-8 border bg-gray-200"></div>{" "}
              <p className="text-sm md:text-base">Lastname, Firstname I.</p>
            </div>
            {dropdownOpen && (
              <div className=" absolute right-2 w-56 bg-white rounded-md z-50 shadow-lg border">
                <div className="px-4 py-2 flex flex-col gap-1">
                  <span className="text-gray-800 text-base overflow-hidden text-center">
                    Firstname Lastname
                  </span>
                  <span className="text-gray-600 text-xs overflow-hidden text-center">
                    sample.email@email.com
                  </span>
                </div>
                <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex flex-col gap-1 border-t-1 border-t-gray-200">
                  <NavLink
                    className={"flex flex-row items-center gap-2"}
                    to={`/settings`}
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Settings size={16} />
                    <span>Settings</span>
                  </NavLink>
                </div>
                <div
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex flex-col gap-1 border-t-1 border-t-gray-200"
                  // onClick={handleLogout}
                >
                  <div className="flex flex-row items-center gap-2">
                    <LogOut size={15} />
                    <span>Sign out</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
