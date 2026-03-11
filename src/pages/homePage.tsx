// IMPPORT
import { FiBook, FiBox, FiPlus, FiUserPlus, FiUsers } from "react-icons/fi";
import CustomInput from "../components/CustomInput";
import CustomSection from "../components/customSection";
import {BsCoin, BsList, BsPencil} from "react-icons/bs";
import CustomButton from "../components/CustomButton";
import { RiAddBoxLine, RiCalculatorLine, RiEqualLine } from "react-icons/ri";
import friends from "../assets/images/group.png"
import productAdd from "../assets/images/add-product.png"
import devide from "../assets/images/calculator.png"
import equal from "../assets/images/equal.png"

// MY-CODE
const HomePage = () => {
  return (
    <>
      <CustomSection Icon={FiUserPlus} title="Add Friend.">
        <div className="flex gap-2 flex-col sm:flex-row">
          <CustomInput label="Friend's Name..." Icon={BsPencil} />
          <CustomButton label="Add Friend" Icon={FiPlus} customStyle={`text-xs! sm:text-sm! md:text-base justify-center w-full  sm:w-max!`} />
        </div>
      </CustomSection>

      <CustomSection Icon={FiBook} title="Add Title.">
        <div>
          <CustomInput label="Event Title..." Icon={BsPencil} />
        </div>
      </CustomSection>

      <CustomSection customStyle={`p-4`} Icon={FiUsers} title="Friends List.">
        <div className="flex items-center flex-col">
          <div>
            <img className="w-40 mb-3" src={friends} alt="" />
          </div>

          <div className="text-center">
            <h2 className="text-base md:text-xl font-medium">Friends list is still empty</h2>
            <p className="text-xs lg:text-base text-gray-400">Please add friends in the add friends form to start sharing.</p>
          </div>
        </div>
      </CustomSection>

      <CustomSection  Icon={RiAddBoxLine} title="Add Products.">
        <div className="space-y-3 p-3 border-2 mb-3 rounded-md border-dashed border-gray-300">
          <CustomInput label="Product Name..." Icon={BsPencil} />
          <CustomInput type="number" label="Product Price..." Icon={BsCoin} />
           <CustomButton label="Add Product" Icon={FiPlus} customStyle={`text-xs! sm:text-sm! md:text-base justify-center w-full  sm:w-max!`} />
        </div>

        <div className="space-y-3 p-3 border-2 rounded-md border-dashed border-gray-300">
          <CustomInput type="number" label="Purchasen Tax..." Icon={BsList} />
        </div>
      </CustomSection>

      <CustomSection Icon={FiBox} title="Products List.">
         <div className="flex items-center flex-col">
          <div>
            <img className="w-32 mb-3" src={productAdd} alt="" />
          </div>

          <div className="text-center">
            <h2 className="text-base md:text-xl font-medium">Products list is still empty</h2>
            <p className="text-xs lg:text-base text-gray-400">Please add product in the add product form to start sharing.</p>
          </div>
        </div>
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