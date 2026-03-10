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
      
      <main className="min-h-screen w-full py-20 md:py-24 px-1 md:px-3 bg-gray-300">
       <div className="w-full max-w-7xl mx-auto grid grid-col-1 md:grid-cols-2 gap-2">
         <Outlet />
       </div>
      </main>
    </>
  );
};

// EXPORTS
export default Layout;
