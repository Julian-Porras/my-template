import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

export default function AppLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}
