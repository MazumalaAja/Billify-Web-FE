// IMPORTS
import Logo from "../assets/logo/logo.png";
import NavbarLink from "./navbarLink";

//  MY-CODE
interface NavItems {
  path:string,
  label:string
}

interface NavbarData {
  data?: NavItems[];
}

const Navbar = ({ data = [] }: NavbarData) => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 p-6 bg-linear-to-r from-gray-900 to-indigo-300">
        <div className="flex justify-between gap-2 items-center overflow-hidden absolute right-[10%] left-[10%] px-4 py-2 rounded-lg bg-gray-50 shadow-md">
          <div className="w-24">
            <img src={Logo} alt="" />
          </div>

          <nav className="flex list-none gap-2">
            {data.map((value, index)  => (
              <li key={index} className="">
                <NavbarLink path={value.path} label={value.label} />
              </li>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
};

// EPORTS
export default Navbar;
