// IMPPORT
import { FiBook, FiBox, FiEdit2, FiPlus, FiTrash2, FiUserPlus, FiUsers } from "react-icons/fi";
import CustomInput from "../components/CustomInput";
import CustomSection from "../components/customSection";
import {BsCoin, BsList, BsPencil} from "react-icons/bs";
import CustomButton from "../components/CustomButton";
import { RiAddBoxLine, RiCalculatorLine, RiEqualLine } from "react-icons/ri";
import friendsphoto from "../assets/images/group.png"
import productAdd from "../assets/images/add-product.png"
import devide from "../assets/images/calculator.png"
import equal from "../assets/images/equal.png"
import useHomePage from "../hooks/useHomePage";
import { useEffect } from "react";
import CustomList from "../components/CustomList";
import Rupiah from "../functions/rupiah";

// MY-CODE
const HomePage = () => {
  // FUNCTIONS
  const {input,products,friends,handleChange,handleClick} = useHomePage();

  useEffect(()=> {
    console.log(friends)
    console.log(products)
    localStorage.setItem("friends" , JSON.stringify(friends));
    localStorage.setItem("products" , JSON.stringify(products));
    localStorage.setItem("event" , JSON.stringify(input.event));
    localStorage.setItem("tax" , JSON.stringify(input.tax));
    // localStorage.clear();
  } ,[friends,input.event,input.tax,products])
  return (
    <>
      <CustomSection Icon={FiUserPlus} title="Add Friend.">
        <form onSubmit={(e)=> e.preventDefault()} className="flex gap-2 flex-col sm:flex-row">
          <CustomInput onChange={(e) => {
              handleChange("friendsName",e.target.value);
          }} value={input.friendsName} label="Friend's Name..." Icon={BsPencil} />
          <CustomButton onClick={()=> {
            handleClick("friends");
          }} label="Add Friend" Icon={FiPlus} customStyle={`text-xs! sm:text-sm! md:text-base justify-center w-full  sm:w-max!`} />
        </form>
      </CustomSection>

      <CustomSection Icon={FiBook} title="Add Title.">
        <form onSubmit={(e)=> e.preventDefault()}>
          <CustomInput value={input.event} onChange={(e)=> {
            handleChange("event",e.target.value);
          }} label="Event Title..." Icon={BsPencil} />
        </form>
      </CustomSection>

      <CustomSection customStyle={`p-4`} Icon={FiUsers} title="Friends List.">
        {friends.length < 1 && <div className="flex items-center flex-col">
          {/* ===== WHEN FRIENDS EMPTY */}
          <div>
            <img className="w-40 mb-3" src={friendsphoto} alt="" />
          </div>

          <div className="text-center">
            <h2 className="text-base md:text-xl font-medium">Friends list is still empty</h2>
            <p className="text-xs lg:text-base text-gray-400">Please add friends in the add friends form to start sharing.</p>
          </div>
        </div>}
        
        {/* ===== WHEN FRIENDS EXIST OR FRIENDS LENGTH > 0 */}
        {friends.length > 0 && <CustomList customStyle="shadow-sm" data={friends}>
          {(value)=> (
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col">
                <h2 className="capitalize text-sm md:text-base text-indigo-500">{value.name}.</h2>
                <small className="text-[0.6rem] md:text-xs text-gray-400">Date : {value.createdAt}</small>
              </div>

              <div className="flex gap-1 items-center">
                <CustomButton customStyle="gap-0! p-1! md:p-1.5! bg-green-500!" Icon={FiEdit2} />
                <CustomButton customStyle="gap-0! p-1! md:p-1.5! bg-red-500!" Icon={FiTrash2} />
              </div>
            </div>
          )}
        </CustomList>}
      </CustomSection>

      <CustomSection  Icon={RiAddBoxLine} title="Add Products.">
        <div className="space-y-3 p-3 border-2 mb-3 rounded-md border-dashed border-gray-300">
          <CustomInput value={input.productsName} onChange={(e)=>{
            handleChange("productsName",e.target.value);
          }} label="Product Name..." Icon={BsPencil} />
          <CustomInput value={input.productsPrice} onChange={(e)=> {
            handleChange("productsPrice",e.target.value);
          }} type="number" label="Product Price..." Icon={BsCoin} />
           <CustomButton onClick={()=> handleClick("products")} label="Add Product" Icon={FiPlus} customStyle={`text-xs! sm:text-sm! md:text-base justify-center w-full  sm:w-max!`} />
        </div>

        <div className="space-y-3 p-3 border-2 rounded-md border-dashed border-gray-300">
          <CustomInput value={input.tax} onChange={(e)=> {
            handleChange("tax" , e.target.value);
          }} type="number" label="Purchasen Tax..." Icon={BsList} />
        </div>
      </CustomSection>

      <CustomSection Icon={FiBox} title="Products List.">
        {/* ===== WHEN PRODUCTS EMPTY */}
         {products.length < 1 && <div className="flex items-center flex-col">
          <div>
            <img className="w-32 mb-3" src={productAdd} alt="" />
          </div>

          <div className="text-center">
            <h2 className="text-base md:text-xl font-medium">Products list is still empty</h2>
            <p className="text-xs lg:text-base text-gray-400">Please add product in the add product form to start sharing.</p>
          </div>
        </div>}

        {/* ===== WHEN PRODUCTS EXIST */}
        {products.length > 0 && <CustomList customStyle="shadow-sm" data={products}>
          {(value)=> (
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col">
                <h2 className="capitalize text-sm md:text-base text-indigo-500">{value.name}.</h2>
                <small className="text-[0.6rem] md:text-xs text-gray-400">Price : {Rupiah(value.price)}</small>
              </div>

              <div className="flex gap-1 items-center">
                <CustomButton customStyle="gap-0! p-1! md:p-1.5! bg-green-500!" Icon={FiEdit2} />
                <CustomButton customStyle="gap-0! p-1! md:p-1.5! bg-red-500!" Icon={FiTrash2} />
              </div>
            </div>
          )}
        </CustomList>}
      </CustomSection>

      <CustomSection Icon={RiCalculatorLine} title="Divide Evenly Per Person.">
          <div className="flex items-center flex-col">
          <div>
            <img className="w-18 sm:w-25 mb-3 mt-3" src={devide} alt="" />
          </div>

          <div className="text-center">
            <h2 className="text-base md:text-xl font-medium">Data is not complete</h2>
            <p className="text-xs lg:text-base text-gray-400">Please fill in your friends list or product list to share.</p>
          </div>
        </div>
      </CustomSection>

      <CustomSection Icon={RiEqualLine} title="Result.">
        <div className="flex items-center flex-col">
          <div>
            <img className="w-20 sm:w-25 mb-3" src={equal} alt="" />
          </div>

          <div className="text-center">
            <h2 className="text-base md:text-xl font-medium">Results are still empty</h2>
            <p className="text-xs lg:text-base text-gray-400">Please do the calculations to complete the division process.</p>
          </div>
        </div>
      </CustomSection>
    </>
  )
}

// EXPORTS
export default HomePage;