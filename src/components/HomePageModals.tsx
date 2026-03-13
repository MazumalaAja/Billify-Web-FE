// IMPOERT
import { FiBox, FiEdit, FiTrash2, FiUser } from "react-icons/fi";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import CustomSection from "./customSection";
import Modal from "./modal";
import { useInputStore } from "../stores/zustand";
import useHomePage from "../hooks/useHomePage";

// TYPE
interface ModalProps {
  open?:boolean
  onClose?:()=> void,
  onClick?:()=> void,
  action?:string,
}

// MODAL EDIT
function ModalEdit ({open , onClose,onClick,action}:ModalProps) {
  const {input,setInput} = useInputStore();
  const {handleChange} = useHomePage();

  return (
    <>
      <Modal customStyle="flex justify-center items-center p-2" onClose={onClose} open={open}>
        <CustomSection customStyle={`${open ? `scale-100` : `scale-20`} duration-200 w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw]`} title={action == "friends" ? `Edit Data.` : `Edit Data Product.`} Icon={action == "friends" ? FiUser : FiBox}>
          <form className={`flex flex-col gap-2`} onSubmit={(e)=> e.preventDefault()}>
            { action == "friends" && <CustomInput label="Friends Name..." onChange={(e)=> {
              handleChange("friendsName" , e.target.value );
            }} value={input.friendsName} />}

            {action == "products" &&
              <div className="flex flex-col gap-3 w-full">
                <CustomInput label="Products Name..." onChange={(e)=> {
                 handleChange("productsName" , e.target.value );
                }} value={input.productsName} />
                <CustomInput label="Products Price..." type="number" onChange={(e)=> {
                 handleChange("productsPrice" , e.target.value );
                }} value={input.productsPrice} />
              </div>
            }

            <CustomButton  onClick={() => {
                onClick && onClick()
              }} customStyle={`bg-green-500! w-full! justify-center md:w-max!`} label="Edit" Icon={FiEdit} />
          </form>
        </CustomSection>
      </Modal>
    </>
  )
}

const ModalDelete = ({open,onClose,onClick} :ModalProps) => {
  return (
    <>
      <Modal customStyle="flex justify-center items-center" onClose={onClose} open={open}>
        <CustomSection customStyle={`${open ? `scale-100` : `scale-10`} duration-200`} title="Form Delete." Icon={FiTrash2}>
            <div className="text-center mb-5 ">
              <h2 className="text-2xl font-medium">Are You Sure ?</h2>
              <small className="text-base text-gray-400">Please press the "confirmation" button if you are sure you want to delete the data.</small>
            </div>
            <div className="flex gap-1 justify-center">
              <CustomButton onClick={onClick} label="Confirmation" />
              <CustomButton onClick={onClose} label="Cancle" customStyle="bg-red-500!" />
            </div>
        </CustomSection>
      </Modal>
    </>
  )
}

// EXPORT
export {ModalEdit,ModalDelete};