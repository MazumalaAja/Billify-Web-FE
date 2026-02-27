// =====> IMPORTS
import { FiBook, FiBox, FiEdit, FiEdit2, FiInfo, FiPlus, FiTrash2, FiUser, FiUsers } from "react-icons/fi";
import CustomSection from "@/components/CustomSection";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { RiAddBoxLine, RiBox3Line, RiCalculatorLine, RiEqualLine, RiListCheck, RiListCheck3, RiPriceTag2Line } from "react-icons/ri";
import { hasil, pembagian, struk, temanPhoto } from "@/assets/images";
import useHomePage from "@/hooks/useHomePage";
import { useEffect, useState } from "react";
import CustomList from "@/components/CustomList";
import CustomModal from "@/components/CustomModal";
import Rupiah from "../utils/rupiah";
import CustomCheckbox from "../components/CustomCheckBox";


// =====> MY-SETUP
const HomePage = () => {
  // =====> USEHOMEPAGE
  const { handleClickTeman, handleChange, handleClickItem, input, setInput, listTeman, listItem, total, handleCheckbox } = useHomePage();

  // STATES
  const [open, setOpen] = useState({
    modalEdit: false,
    modalDelete: false,
    modalItems: false
  })

  // =====> USEEFFECT
  useEffect(() => {
    console.log(input)
    console.log(listTeman);
    localStorage.setItem("listTeman", JSON.stringify(listTeman))
    localStorage.setItem("listItem", JSON.stringify(listItem))
    localStorage.setItem("pajak", JSON.stringify(input.pajak))
    localStorage.setItem("title", JSON.stringify(input.title))
    // localStorage.removeItem("listTeman");
  }, [listTeman, listItem, input])
  return (
    <>
      {/* =====> MODAL EDIT */}
      {open.modalEdit && <CustomModal onClose={() => {
        setOpen(prev => ({ ...prev, modalEdit: false }));
        if (input.idTeman != null) {
          setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }));
        } else {
          setInput(prev => ({ ...prev, idItem: null, namaItem: "", hargaItem: "", jumlahItem: "" }));
        }
      }} customStyle={`flex justify-center items-center`}>
        <CustomSection customStyle={`w-full max-w-[95%] md:max-w-[60%]`} Icon={input.idTeman != null ? FiUser : RiBox3Line} title={`${input.idTeman ? `Edit Teman` : `Edit Produk`}`}>
          {input.idTeman != null && <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(prev => ({ ...prev, modalEdit: false }))
          }} className="flex flex-col md:flex-row gap-2">
            <CustomInput onChange={(e) => handleChange("namaTeman", e.target.value)} value={input.namaTeman} Icon={FiEdit2} label={"Nama Teman"} />
            <CustomButton onClick={() => {
              handleClickTeman("edit", input.idTeman)
              setOpen(prev => ({ ...prev, modalEdit: false }))
            }} customStyle={`w-max! bg-green-500! text-xs sm:text-sm md:text-base`} Icon={FiEdit} text={"Edit"} />
          </form>}
          {input.idItem !== null && <form onSubmit={(e) => {
            e.preventDefault()
            setOpen(prev => ({ ...prev, modalEdit: false }))
          }} className="flex flex-col gap-2">
            <CustomInput onChange={(e) => handleChange("namaItem", e.target.value)} value={input.namaItem} Icon={FiEdit2} label={"Nama Produk"} />
            <CustomInput type={`number`} min={0} onChange={(e) => handleChange("hargaItem", e.target.value)} value={input.hargaItem} Icon={FiEdit2} label={"Harga Produk"} />
            <CustomInput type={`number`} onChange={(e) => handleChange("jumlahItem", e.target.value)} value={input.jumlahItem} Icon={FiEdit2} min={0} label={"Jumlah Produk"} />
            <CustomButton onClick={() => {
              handleClickItem("edit", input.idItem)
              setOpen(prev => ({ ...prev, modalEdit: false }))
            }} customStyle={`w-max! bg-green-500! text-xs sm:text-sm md:text-base`} Icon={FiEdit} text={"Edit"} />
          </form>}
        </CustomSection>
      </CustomModal>}

      {/* =====> MODAL DELETE */}
      {open.modalDelete && <CustomModal onClose={() => {
        setOpen(prev => ({ ...prev, modalDelete: false }));
        if (input.idTeman != null) {
          setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }));
        } else {
          setInput(prev => ({ ...prev, idItem: null }));
        }
      }} customStyle={`flex justify-center items-center p-2`}>
        <div className="bg-gray-50 p-5 rounded-lg shadow-md">
          <div>
            <FiInfo className="text-indigo-500 mb-3 text-5xl md:text-6xl mx-auto" />

            <div className="text-center flex flex-col gap-1 mb-3">
              <h2 className="text-base md:text-lg text-gray-700">Yakin ingin menghapus!</h2>
              <small className="text-xs md:text-base text-gray-400">Mohon diperhatikan karena data akan dihapus secara permanen</small>
            </div>
          </div>

          <div className="flex justify-center gap-1 items-center">
            <CustomButton onClick={() => input.idTeman != null ? handleClickTeman("delete", input.idTeman) : handleClickItem("delete", input.idItem)} customStyle={`bg-gray-400! text-gray-50! text-xs sm:text-sm md:text-base`} text={"Saya yakin"} />
            <CustomButton onClick={() => {
              setOpen(prev => ({ ...prev, modalDelete: false }))
              if (input.idItem) {
                setInput(prev => ({ ...prev, idItem: null }))
              } else {
                setInput(prev => ({ ...prev, idTeman: null, namaTeman: "" }))
              }
            }} customStyle={`bg-red-500! text-red-50! text-xs sm:text-sm md:text-base`} text={"Kembali"} />
          </div>
        </div>
      </CustomModal>}

      {/* =====> MODAL PICK ITEMS */}
      {open.modalItems && <CustomModal customStyle={`flex justify-center items-center p-2`} onClose={() => {
        setInput(prev => ({ ...prev, idTeman: null }))
        setOpen(prev => ({ ...prev, modalItems: false }))
      }}>
        <CustomSection Icon={RiListCheck} title={`List Produk.`} customStyle={`w-full overflow-auto max-h-[60dvh] md:w-[85vw] lg:w-[60vw] space-y-1`}>
          {listItem?.map((item, index) => (
            <div key={index} className="bg-white flex shadow-sm border border-gray-300 rounded-md p-2">
              <div className="flex gap-2 items-center">
                <CustomCheckbox checked={listTeman.find(data => data.id == input.idTeman)?.items.find(data => data.idItem == item.id) ?? false} onClick={(checked) => handleCheckbox(input.idTeman, item.id, checked)} />

                <div className="flex flex-col">
                  <span>{item.namaItem}</span>
                  <small className="text-gray-400 text-xs">{Rupiah(item.hargaItem)}</small>
                </div>
              </div>
            </div>
          ))}
        </CustomSection>
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
          {listTeman?.length < 1 && <div className=" w-full max-w-80 mx-auto">
            <img src={struk} alt="daftar-produk-picture" />
          </div>}

          {listTeman?.length < 1 && <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Daftar Produk atau item kososng!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan tambahkan produk atau item untuk memulai pembagian!</p>
          </div>}

          {listTeman?.length > 0 &&
            <>
              <form onSubmit={(e) => {
                e.preventDefault();
              }} className="bg-white shadow-sm p-3 space-y-2 rounded-md mb-3 border border-gray-300">
                <h4 className="text-sm text-gray-600">Data Produk</h4>
                <CustomInput value={input.namaItem} onChange={(e) => handleChange("namaItem", e.target.value)} label={"Nama Produk"} Icon={FiEdit2} />
                <CustomInput min={0} type={`number`} value={input.hargaItem} onChange={(e) => handleChange("hargaItem", e.target.value)} label={"Harga Produk"} Icon={RiPriceTag2Line} />
                <CustomInput min={0} type={`number`} value={input.jumlahItem} onChange={(e) => handleChange("jumlahItem", e.target.value)} label={"Jumlah Produk"} Icon={RiAddBoxLine} />
                <CustomButton onClick={() => {
                  handleClickItem("add");
                }} customStyle={`w-max!`} text={"Tambahkan"} Icon={FiPlus} />
              </form>

              <form className="bg-white shadow-sm p-3 space-y-2 mb-3 rounded-md border border-gray-300">
                <h4 className="text-sm text-gray-600">Nominal Pajak (opsional)</h4>
                <CustomInput onChange={(e) => handleChange("pajak", e.target.value)} value={input.pajak} min={0} type={`number`} label={"Pajak"} Icon={RiPriceTag2Line} />
              </form>

              {listItem && <div className="p-2 mb-3">
                <h3 className="mb-2">List item atau produk.</h3>
                <CustomList data={listItem}>
                  {(item, index) => (
                    <>
                      <CustomButton onClick={() => {
                        setOpen(prev => ({ ...prev, modalEdit: true }))
                        setInput(prev => ({ ...prev, idItem: item.id, namaItem: item.namaItem, hargaItem: item.hargaItem, jumlahItem: item.jumlahItem }))
                      }} customStyle={`bg-green-500! p-2! w-max! text-xs sm:text-sm md:text-base`} Icon={FiEdit2} />
                      <CustomButton onClick={() => {
                        setOpen(prev => ({ ...prev, modalDelete: true }))
                        setInput(prev => ({ ...prev, idItem: item.id }))
                      }} customStyle={`bg-red-500! p-2! w-max! text-xs sm:text-sm md:text-base`} Icon={FiTrash2} />
                    </>
                  )}
                </CustomList>
              </div>}

              <div className="bg-linear-to-r from-indigo-700 to-indigo-200 p-2 px-3 rounded-md text-indigo-50">
                <h2>Total produk : {Rupiah(total)}</h2>
              </div>
            </>
          }
        </CustomSection>

        {/* =====> PEMBAGIAN PRODUK */}
        <CustomSection title="Pembagian." Icon={RiCalculatorLine}>
          {listItem.length < 1 || listTeman.length < 1 && <div className=" w-full max-w-80 mx-auto">
            <img src={pembagian} alt="pembagian-picture" />
          </div>}

          {listItem.length < 1 || listTeman.length < 1 && <div className="text-center">
            <h2 className="text-sm md:text-base text-gray-700 mb-2">Data masih kosong!</h2>
            <p className="text-xs md:text-sm text-gray-400 mb-2">Silahkan lengkapi semua data untuk memulai pembagian!</p>
          </div>}

          <CustomList data={listTeman}>
            {(item, index) => (
              <>
                <CustomButton onClick={() => {
                  setInput(prev => ({ ...prev, idTeman: item.id }))
                  setOpen(prev => ({ ...prev, modalItems: true }))
                }} customStyle={`w-max! p-2! bg-amber-400!`} Icon={RiListCheck3} />
              </>
            )}
          </CustomList>
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