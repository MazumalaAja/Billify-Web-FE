// IMPORTS
import { NavLink, type To } from "react-router";

// MY-CODE
interface NavLinkProps {
  label: string;
  path: To;
}

const NavbarLink = ({ path, label }: NavLinkProps) => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? `text-gray-700 after:scale-90` : `text-gray-400 after:scale-0`} hover:text-gray-700 relative after:absolute after:border-b-3 after:w-full after:left-0 after:-bottom-3.5 after:text-indigo-500 hover:after:scale-90 after:duration-200 after:rounded-full duration-200`
        }
        to={path}
      >
        {label}
      </NavLink>
    </>
  );
};

// EXPORT
export default NavbarLink;
