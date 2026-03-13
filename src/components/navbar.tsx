// IMPORTS
import type { ElementType } from "react";
import Logo from "../assets/logo/logo.png";
import {useUIStore} from "../stores/zustand";
import Modal from "./modal";
import NavbarLink from "./navbarLink";
import SwitchToggle from "./switchToggle";

//  TYPE
interface NavItems {
  path:string,
  label:string
  Icon?:ElementType
}

interface NavbarData {
  data?: NavItems[];
}

// MY-CODE
const Navbar = ({ data = [] }: NavbarData) => {
  const openToggle = useUIStore((state) => state.openToggle);
  const setOpenToggle = useUIStore((state) => state.setOpenToggle);

  return (
    <>
      <header className="fixed z-9999 top-0 left-0 right-0 p-6 bg-linear-to-r from-gray-900 to-indigo-300">
        <div className="flex justify-between gap-2 items-center overflow-hidden absolute right-[2%] left-[2%] md:right-[10%] md:left-[10%] px-4 py-2 rounded-lg bg-gray-50 shadow-md">
          <div className="w-20 md:w-24">
            <img src={Logo} alt="" />
          </div>

          <nav className="list-none gap-2">
            {data.map((value, index)  => (
              <li key={index} className="hidden sm:inline-flex">
                <NavbarLink mobile={false} to={value.path} label={value.label} />
              </li>
            ))}

            <li className="block sm:hidden">
              <SwitchToggle open={openToggle} onClick={()=> setOpenToggle(!openToggle)}/>
            </li>
          </nav>
        </div>
      </header>

      <Modal customStyle={`block sm:hidden`} open={openToggle} onClose={()=> setOpenToggle(false)}>
        <div onClick={(e)=> e.stopPropagation()} className={`${openToggle ? `h-max` : `h-0`} overflow-hidden duration-200 absolute bg-gray-50 bottom-0  left-0 right-0 rounded-t-4xl shadow-md border-gray-50 border-2`}>
          <ul className="flex flex-col">
            {data.map((value,index) => (
            <li key={index}>
                <NavbarLink Icon={value.Icon} mobile={true} to={value.path} label={value.label} />
            </li>
          ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

// EPORTS
export default Navbar;
