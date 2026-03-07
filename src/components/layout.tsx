// IMPORTS
import { Outlet } from "react-router";
import Navbar from "./navbar";

// MY-CODE
const Layout = () => {
  const navbarData = [
    { path: "/", label: "Home" },
    { path: "/history", label: "History" },
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
