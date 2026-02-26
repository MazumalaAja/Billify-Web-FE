// =====> MY-SETUP
const CustomModal = ({ customStyle, children, onClose }) => {
  return (
    <div onClick={onClose} className={`${customStyle || ""} fixed z-997 inset-0 bg-black/50`}>
      {children}
    </div>
  )
}

// =====> EXPORTS
export default CustomModal;