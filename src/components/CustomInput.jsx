// =====> MY-SETUP
const CustomInput = ({ label, type = "text", onChange, Icon, customStyle, value }) => {
  return (
    <>
      <div className={`${customStyle || ""} relative border-2 w-full focus-within:border-indigo-500 border-gray-300 py-1.5 px-2 rounded-md`}>
        <div className="flex gap-2 items-center w-full">
          <input autoFocus value={value} id={label} type={type} onChange={onChange} className={`w-full text-gray-700 text-xs md:text-sm focus:outline-0 peer`} />
          {Icon && <Icon className={`text-xl text-gray-300 peer-focus:text-indigo-500`} />}
          <label className={`absolute left-2 duration-200  peer-focus:top-0 bg-gray-50 peer-focus:text-xs px-2 text-gray-300 text-sm top-[50%] translate-y-[-50%] peer-focus:text-indigo-500`} htmlFor={label}>{label}</label>
        </div>
      </div>
    </>
  )
}

// =====> EXPORTS
export default CustomInput;