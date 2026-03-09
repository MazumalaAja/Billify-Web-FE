// IMPORTS
import { Outlet } from "react-router";
import Navbar from "./navbar";
import { FiClock, FiHome } from "react-icons/fi";

// MY-CODE
const Layout = () => {
  const navbarData = [
    { path: "/", label: "Home" , Icon:FiHome },
    { path: "/history", label: "History" , Icon:FiClock },
  ];

  return (
    <>
      <Navbar data={navbarData} />
      
      <main className="min-h-screen w-full bg-gray-300">
        <Outlet />
      </main>
    </>
  );
};

// EXPORTS
export default Layout;
