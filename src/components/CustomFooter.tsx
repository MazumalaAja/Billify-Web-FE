// IMPORT
import logo from "../assets/logo/logo.png"

// MY-CODE
const CustomFooter = () => {
  return (
    <footer className="flex items-center justify-center sm:justify-between p-3 gap-2 bg-gray-50 shadow-md">
      <div className="hidden sm:block">
        <img src={logo} alt="logo" className="w-24" />
      </div>

      <span className="text-xs text-center sm:text-sm md:text-base">
        © {new Date().getFullYear()} MazumalaAja. All rights reserved.
      </span>
    </footer>
  )
}

// EXPORT
export default CustomFooter;