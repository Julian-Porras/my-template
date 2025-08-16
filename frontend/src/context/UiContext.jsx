import { createContext, useContext, useEffect, useState } from "react";

const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSidebarSubmenuOpen, setSidebarSubmenuOpen] = useState(false);

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
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export const useUi = () => useContext(UiContext);
