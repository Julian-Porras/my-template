import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { UiProvider } from "../context/UiContext";

export default function AppLayout() {
  return (
    <AuthProvider>
      <UiProvider>
        <Outlet />
      </UiProvider>
    </AuthProvider>
  );
}
