// IMPORTS
import type { ElementType } from "react";
import { NavLink, type To } from "react-router";

// MY-CODE
interface NavLinkProps {
  label: string;
  to: To;
  mobile: boolean;
  Icon?:ElementType,
}

const NavbarLink = ({ Icon, to, label, mobile = false }: NavLinkProps) => {
  return (
    <>
      {mobile ? (
        <NavLink className={({isActive}) => `${isActive ? `text-indigo-50 bg-indigo-400` : `text-gray-400`} w-full text-center h-full p-4 flex justify-center gap-2 items-center text-base`} to={to}>
          {Icon && <Icon className={`text-lg`} />}
          <span className="text-center">{label}</span>
        </NavLink>
      ) : (
        <NavLink className={({ isActive }) => `${isActive ? `text-gray-700 after:scale-90` : `text-gray-400 after:scale-0`} hover:text-gray-700 relative after:absolute after:border-b-3 after:w-full after:left-0 after:-bottom-2 after:text-indigo-500 hover:after:scale-90 after:duration-200 rounded-lg hover:bg-gray-200/30 after:rounded-full duration-200 p-1.5`} to={to}>
          <span className="text-base">{label}</span>
        </NavLink>
      )}
    </>
  );
};

// EXPORT
export default NavbarLink;
