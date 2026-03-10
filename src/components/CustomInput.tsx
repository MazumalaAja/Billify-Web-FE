// IMPORT
import type { ElementType} from "react";

// TYPE
interface InputProps {
  label?:string,
  type?:string,
  onChange?:() => void,
  value?:string,
  Icon?:ElementType,
}

// MY-CODE
const CustomInput = ({label = "label",type = "text",onChange ,value,Icon} : InputProps) => {
  return (
    <>
      <div className={`w-full`}>
        <div className={`relative flex justify-between items-center  gap-2 duration-200 w-full border-2 focus-within:border-indigo-500 rounded-md px-2 p-1.5 border-gray-300`}>
          <input className="w-full text-xs sm:text-sm capitalize duration-200 focus:outline-0 peer z-20" value={value} type={type} onChange={onChange} placeholder={""} />
          <label className="absolute text-gray-400 capitalize text-sm peer-focus:text-indigo-500 duration-200 peer-focus:text-xs top-[50%] left-1  z-1 peer-focus:-translate-y-7 px-2  bg-gray-50 translate-y-[-50%] peer-[:not(:placeholder-shown)]:-translate-y-7 peer-[:not(:placeholder-shown)]:text-xs" htmlFor={label}>{label}</label>
          {Icon && <Icon className={`text-gray-400 peer-focus-within:text-indigo-500`} />}
        </div>
      </div>
    </>
  )
}

// EXPORT
export default CustomInput;