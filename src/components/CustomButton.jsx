// =====> IMPORTS
const CustomButton = ({ text, Icon, onClick, disabled, customStyle }) => {
  return (
    <div>
      <button onClick={onClick} disabled={disabled} className={`${customStyle && customStyle} w-full bg-indigo-500 text-indigo-50 rounded-lg hover:opacity-70 flex gap-2 items-center py-1.5 px-3 cursor-pointer active:scale-95 duration-200`}>
        {text && <span>{text}</span>}
        {Icon && <Icon />}
      </button>
    </div >
  )
}

// =====> EXPORTS
export default CustomButton;