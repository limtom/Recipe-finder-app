import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-3">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
