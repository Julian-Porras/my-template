import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useUi } from "../context/UiContext";

const MainLayout = () => {
  const { isSidebarOpen } = useUi();
  return (
    <div className="flex min-h-screen ">
      <Header />
      <Sidebar />
      <main
        className={`flex flex-1 flex-col w-full p-4 pt-16 mt-2 md:mt-1 md:p-8 md:pt-20 scroll-smooth overflow-auto ${
          isSidebarOpen ? "md:ml-60" : ""
        }`}
      >
        <Outlet />
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default MainLayout;
