import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-[70vh] min-h-96 flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-gray-800">404</h1>
      <p className="text-2xl font-medium text-gray-800">Page Not Found</p>
      <NavLink className="mt-4 text-xl text-blue-600 hover:underline" to={"/"}>
        Go back to Homepage
      </NavLink>
    </div>
  );
}
