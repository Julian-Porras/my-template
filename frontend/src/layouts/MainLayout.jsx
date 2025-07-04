import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div >
      <Header />
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div class=" mt-20">
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
