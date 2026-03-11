// IMPORT
import type { ElementType, ReactNode } from "react";

// TYPE 
interface SectionProps {
  title?:string,
  Icon?: ElementType,
  children?:ReactNode,
  customStyle?:string
}

// MY-CODE 
const CustomSection = ({title,Icon,children,customStyle} : SectionProps) => {
  return (
    <>
      <section className={`${customStyle } bg-gray-50 p-4  lg:p-5 shadow-md rounded-lg ring-2 ring-gray-300 ring-offset-4 ring-offset-gray-50 ring-inset`}>
        <div className={`flex items-center gap-2 text-base md:text-lg font-semibold mb-2`}>
          {Icon && <Icon className="text-lg md:text-xl" />}
          <h1>{title}</h1>
        </div>

        {children}
      </section>
    </>
  )
}

// EXPORT
export default CustomSection;