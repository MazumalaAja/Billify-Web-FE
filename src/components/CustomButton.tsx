// IMPORT
import type { ElementType } from "react"

// TYPE
interface ButtonProps {
  label?:string,
  onClick?:() => void,
  customStyle?:string,
  Icon?:ElementType,
  disabled?:boolean,
}

// MY-CODE
const CustomButton = ({label = "label",onClick,customStyle,Icon,disabled} : ButtonProps) => {
  return (
    <>
      <button disabled={disabled} onClick={onClick} className={`${customStyle && customStyle} bg-indigo-500 px-3 p-1.5 text-indigo-50 flex items-center text-nowrap duration-200 rounded-md capitalize gap-2 hover:opacity-80 cursor-pointer active:scale-98`}>
        <span>{label}</span>
        {Icon && <Icon />}
       </button>
    </>
  )
}

// EXPORT
export default CustomButton;