// TYPE
interface Props {
  open:boolean,
  onClick : () => void,
}

// MY-CODE
const SwitchToggle = ({onClick , open} : Props) => {
  return (
    <div onClick={onClick} className={`flex flex-col gap-1 cursor-pointer`}>
      <span className={` ${open ? `rotate-45 translate-y-1.5` : ` `} w-6 h-[0.2rem] bg-gray-700 rounded-full duration-200`}></span>
      <span className={` ${open ? `w-0` : ` w-6`} h-[0.2rem] bg-gray-700 rounded-full duration-200`}></span>
      <span className={`${open ? `-rotate-45 -translate-y-2` : ``} w-6 h-[0.2rem] bg-gray-700 rounded-full duration-200`}></span>
    </div>
  )
}

// EXPORT
export default SwitchToggle;