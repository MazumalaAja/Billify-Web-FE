import { FiCheck } from "react-icons/fi";

// =====> MY-SETUP
const CustomCheckbox = ({ onClick, checked = false }) => {
  return (
    <div onClick={() => {
      onClick && onClick(checked)
    }} className={`w-5 h-5  p-1 duration-200 cursor-pointer rounded-md grid place-content-center border-2 hover:ring-2 hover:ring-indigo-400 hover:ring-offset-2 ${checked ? `bg-indigo-400 border-indigo-400` : `border-gray-400 `}`}>
      <FiCheck className="text-indigo-50" />
    </div>
  )
}

// =====> EXPORTS
export default CustomCheckbox;