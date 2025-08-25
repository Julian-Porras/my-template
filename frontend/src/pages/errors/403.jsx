import { NavLink } from "react-router-dom";

export default function NotPermitted() {
  return (
    <div className="h-[70vh] min-h-96 flex flex-col justify-center items-center">
      <h1 className="text-7xl font-bold text-gray-800">403</h1>
      <p className="text-2xl font-medium text-gray-800">
        YOU ARE NOT ALLOWED TO ENTER HERE
      </p>
      <NavLink className="mt-4 text-xl text-blue-600 hover:underline" to={"/"}>
        Go back to Homepage
      </NavLink>
    </div>
  );
}
