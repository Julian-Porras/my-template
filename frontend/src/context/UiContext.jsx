import { createContext, useContext, useEffect, useState } from "react";

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSidebarSubmenuOpen, setSidebarSubmenuOpen] = useState({});

  const toggleSubmenu = (key) => {
    setSidebarSubmenuOpen((prev) => {
      const isCurrentlyOpen = !!prev[key];
      return isCurrentlyOpen ? {} : { [key]: true }; // close all others
    });
  };
  const resetSubmenus = () => setSidebarSubmenuOpen({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(() => false);
      } else {
        setSidebarOpen(() => true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // run on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UiContext.Provider
      value={{
        isSidebarOpen,
        setSidebarOpen,
        isSidebarSubmenuOpen,
        setSidebarSubmenuOpen,
        toggleSubmenu,
        resetSubmenus,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUi = () => useContext(UiContext);
