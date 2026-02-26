// =====> IMPORTS
import { FiBook, FiBox, FiEdit, FiEdit2, FiInfo, FiPlus, FiTrash2, FiUser, FiUsers } from "react-icons/fi";
import CustomSection from "@/components/CustomSection";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { RiCalculatorLine, RiEqualLine } from "react-icons/ri";
import { hasil, pembagian, struk, temanPhoto } from "../assets/images";
import useHomePage from "../hooks/useHomePage";
import { useEffect, useState } from "react";
import CustomList from "../components/CustomList";
import CustomModal from "../components/CustomModal";


// =====> MY-SETUP
const HomePage = () => {
  // =====> USEHOMEPAGE
  const { handleClickTeman, handleChange, input, setInput, listTeman } = useHomePage();

  // STATES
  const [open, setOpen] = useState({
    modalEdit: false,
    modalDelete: false,
  })

  // =====> USEEFFECT
  useEffect(() => {
    console.log(listTeman);
    localStorage.setItem("listTeman", JSON.stringify(listTeman))
    // localStorage.clear();
  }, [listTeman])
  return (
    <>
      {/* =====> MODAL EDIT */}
      {open.modalEdit && <CustomModal onClose={() => {
        setOpen(prev => ({ ...prev, modalEdit: false }))
        setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }))
      }} customStyle={`flex justify-center items-center`}>
        <CustomSection customStyle={`w-full max-w-[95%] md:max-w-[60%]`} Icon={FiUser} title={"Edit Data."}>
          <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(prev => ({ ...prev, modalEdit: false }))
          }} className="flex flex-col md:flex-row gap-2">
            <CustomInput onChange={(e) => handleChange("namaTeman", e.target.value)} value={input.namaTeman} Icon={FiEdit2} label={"Nama Teman"} />
            <CustomButton onClick={() => {
              handleClickTeman("edit", input.idTeman)
            }} customStyle={`w-max! bg-green-500! text-xs sm:text-sm md:text-base`} Icon={FiEdit} text={"Edit"} />
          </form>
        </CustomSection>
      </CustomModal>}

      {/* =====> MODAL DELETE */}
      {open.modalDelete && <CustomModal onClose={() => {
        setOpen(prev => ({ ...prev, modalDelete: false }))
        setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }))
      }} customStyle={`flex justify-center items-center p-2`}>
        <div className="bg-gray-50 p-5 rounded-lg shadow-md">
          <div>
            <FiInfo className="text-indigo-500 mb-3 text-5xl md:text-6xl mx-auto" />

            <div className="text-center flex flex-col gap-1 mb-3">
              <h2 className="text-basemd:text-lg text-gray-700">Yakin ingin menghapus!</h2>
              <small className="text-xs md:text-base text-gray-400">Mohon diperhatikan karena data akan dihapus secara permanen</small>
            </div>
          </div>

          <div className="flex justify-center gap-1 items-center">
            <CustomButton onClick={() => handleClickTeman("delete", input.idTeman)} customStyle={`bg-gray-400! text-gray-50! text-xs sm:text-sm md:text-base`} text={"Saya yakin"} />
            <CustomButton onClick={() => {
              setOpen(prev => ({ ...prev, modalDelete: false }))
              setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }))
            }} customStyle={`bg-red-500! text-red-50! text-xs sm:text-sm md:text-base`} text={"Kembali"} />
          </div>
        </div>
      </CustomModal>}

      {/* =====> MAIN PAGE */}
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-2">
        {/* =====> INPUT TEMAN */}
        <CustomSection Icon={FiUser} title={"Tambahkan teman."}>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row gap-2">
            <CustomInput value={input.namaTeman} onChange={(e) => handleChange("namaTeman", e.target.value)} Icon={FiEdit2} label={"Nama Teman"} />
            <CustomButton onClick={() => handleClickTeman("add")} customStyle={`w-max! text-xs sm:text-sm md:text-base`} Icon={FiPlus} text={"Tambahkan"} />
          </form>
        </CustomSection>

        {/* =====> JUDUL PATUNGAN / SPLIT BILL */}
        <CustomSection title="Tambahkan judul patungan." Icon={FiBook} >
          <CustomInput value={input.title} onChange={(e) => handleChange("title", e.target.value)} Icon={FiEdit2} label={"Judul Patungan"} />
        </CustomSection>

        {/* =====> DAFTAR TEMAN */}
        <CustomSection title="Daftar Teman.." Icon={FiUsers}>
          {listTeman?.length < 1 && <div className=" w-full max-w-80 mx-auto">
            <img src={temanPhoto} alt="daftar-teman-picture" />
          </div>}

          {listTeman?.length < 1 && <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Daftar teman masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan tambahkan teman untuk memulai pembagian!</p>
          </div>}

          {/* =====> LIST TEMAN */}
          <CustomList data={listTeman}>
            {(item, index) => (
              <>
                <CustomButton onClick={() => {
                  setOpen(prev => ({ ...prev, modalEdit: true }))
                  setInput(prev => ({ ...prev, idTeman: item.id, namaTeman: item.namaTeman }))
                }}
                  customStyle={`bg-green-500! p-2! w-max! text-xs sm:text-sm md:text-base`} Icon={FiEdit2} />
                <CustomButton onClick={() => {
                  setOpen(prev => ({ ...prev, modalDelete: true }))
                  setInput(prev => ({ ...prev, idTeman: item.id, namaTeman: item.namaTeman }))
                }} customStyle={`bg-red-500! p-2! w-max! text-xs sm:text-sm md:text-base`} Icon={FiTrash2} />
              </>
            )}
          </CustomList>
        </CustomSection>

        {/* =====> DAFTAR PRODUK ATAU ITEM */}
        <CustomSection title="Tambahkan produk atau item." Icon={FiBox}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={struk} alt="daftar-produk-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Daftar Produk atau item kososng!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan tambahkan produk atau item untuk memulai pembagian!</p>
          </div>
        </CustomSection>

        {/* =====> PEMBAGIAN PRODUK */}
        <CustomSection title="Pembagian." Icon={RiCalculatorLine}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={pembagian} alt="pembagian-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Data masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan lengkapi semua data untuk memulai pembagian!</p>
          </div>
        </CustomSection>

        {/* =====> HASIL AKHIR */}
        <CustomSection title="Hasil akhir." Icon={RiEqualLine}>
          <div className=" w-full max-w-80 mx-auto">
            <img src={hasil} alt="hasil-picture" />
          </div>

          <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Data masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan lengkapi semua data untuk memulai pembagian!</p>
          </div>
        </CustomSection>
      </div>
    </>
  )
}

// =====> EXPORTS
export default HomePage;