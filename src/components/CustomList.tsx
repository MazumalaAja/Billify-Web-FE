// IMPORT
import type { ReactNode } from "react";

// TYPE
interface PropsList {
  data?:any[],
  children?:(value:any,index:number) => ReactNode,
  customStyle?:string
}



// MY-CODE
const CustomList = ({data ,children , customStyle} : PropsList) => {
  return (
    <>
      <ul className="flex flex-col gap-2">
        {data?.map((value,index)=> (
          <li className={`${customStyle && customStyle} bg-gray-50 border border-gray-300 rounded-md p-1.5 px-2`} key={index}>
            {children?.(value,index)}
          </li>
        ))}
      </ul>
    </>
  )
}

// EXPORT
export default CustomList;