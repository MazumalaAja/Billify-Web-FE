// =====> MY-SETUP
const CustomSection = ({ children, customStyle, customTitle, Icon, title = "title" }) => {
  return (
    <section onClick={(e) => e.stopPropagation()} className={`${customStyle || ""} bg-gray-50 p-3 ring-2 ring-offset-3 ring-gray-300 ring-offset-gray-50 ring-inset rounded-lg shadow-lg`}>
      <div className={`${customTitle && customStyle} flex gap-2 mb-2 items-center py-1 rounded-full`}>
        {Icon && <Icon className={`text-lg md:text-xl`} />}
        <h1 className="text-[0.8rem] sm:text-base">{title}</h1>
      </div>
      {children}
    </section>
  )
}

// =====> EXPORTS
export default CustomSection;