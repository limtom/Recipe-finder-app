import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-3">
      <Navbar />
      <Outlet />
      {/*footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;
