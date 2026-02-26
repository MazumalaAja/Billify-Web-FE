// =====> MY-SETUP
const CustomList = ({ data = [], children }) => {
  return (
    <ul className="space-y-1">
      {data?.map((item, index) => (
        <li key={index} className="flex justify-between items-center shadow-sm p-2 rounded-md bg-white border border-gray-300">
          <div className="flex flex-col">
            <h3 className="text-sm md:text-base capitalize text-gray-700">{item?.namaItem ?? item?.namaTeman}</h3>
            <small className="text-[0.7rem] text-gray-400">{item?.hargaItem ?? `${item?.createdAt}`}</small>
          </div>

          {/* =====> Buttons */}
          <div className="flex items-center gap-1">
            {typeof children == "function" ? children(item, index) : children}
          </div>
        </li>
      ))}
    </ul>
  )
}

// =====> EXPORTS
export default CustomList;