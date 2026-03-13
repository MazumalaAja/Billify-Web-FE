// IMPORTS
import {type ReactNode } from "react";

// TYPE
interface Props {
  open?:boolean,
  customStyle?:string,
  onClose? : () => void,
  children?:ReactNode
}

// MY-CODE
const Modal = ({open , children , customStyle = `` , onClose } : Props) => {
  return (
    <>
      <div onClick={onClose} className={`${customStyle} ${open ? `z-999 opacity-100` : `-z-1 opacity-0`} duration-200 fixed inset-0 bg-black/50`}>
        {children}
      </div>
    </>
  )
}

// EXPORT
export default Modal;