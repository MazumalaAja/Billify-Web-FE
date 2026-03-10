// IMPPORT
import { FiBook, FiBox, FiInbox, FiPlus, FiUserPlus, FiUsers } from "react-icons/fi";
import CustomInput from "../components/CustomInput";
import CustomSection from "../components/customSection";
import { BsPencil } from "react-icons/bs";
import CustomButton from "../components/CustomButton";
import { RiAddBoxLine, RiCalculatorLine, RiEqualLine } from "react-icons/ri";

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

      <CustomSection Icon={FiUsers} title="Friends List.">
      </CustomSection>

      <CustomSection Icon={RiAddBoxLine} title="Add Products.">
      </CustomSection>

      <CustomSection Icon={FiBox} title="Products List.">
      </CustomSection>

      <CustomSection Icon={RiCalculatorLine} title="Divide Evenly Per Person.">
      </CustomSection>

      <CustomSection Icon={RiEqualLine} title="Result.">
      </CustomSection>
    </>
  )
}

// EXPORTS
export default HomePage;