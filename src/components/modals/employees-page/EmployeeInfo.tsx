import { AiOutlineClose } from "react-icons/ai";
import { LuBriefcase, LuBuilding } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

// interface Props {
//   setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function EmployeeInfo() {
  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20 hidden">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="w-[90%] flex justify-end lg:max-w-160">
          <AiOutlineClose
            // onClick={() => setIsSuccess(false)}
            color="white"
            className="hover:bg-[#2A9290] rounded-full cursor-pointer transition ease-in-out p-3 text-xl w-10 h-10"
          />
        </div>
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-5 lg:max-w-145 lg:p-8">
          <h1 className="font-grotesk text-xl capitalize text-start font-semibold lg:text-2xl">
            employee profile
          </h1>
          {/* employee name */}
          <div className="flex items-center gap-x-4">
            <div className="h-20 w-20 rounded-full flex items-center justify-center text-2xl text-[#2A9290] bg-[#2A9290]/20 font-extrabold font-grotesk">
              K
            </div>
            <div className="space-y-1">
              <h2 className="font-grotesk font-semibold capitalize text-xl lg:text-2xl">
                kolawole mayhorz
              </h2>
              <p className="text-[#8a7d8f] capitalize text-sm lg:text-base">
                no grade assigned
              </p>
            </div>
          </div>
          {/* other information */}
          <div className="space-y-3 lg:space-y-4">
            <div className="flex gap-x-3 items-start font-medium">
              <LuBriefcase className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">role</p>
                <h3>skit maker</h3>
              </div>
            </div>
            <div className="flex gap-x-3 items-start font-medium">
              <LuBuilding className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">department</p>
                <h3>engineering</h3>
              </div>
            </div>
            <div className="flex gap-x-3 items-start font-medium">
              <GrLocation className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">location</p>
                <h3>abia, nigeria</h3>
              </div>
            </div>
            <div className="flex gap-x-3 items-start font-medium">
              <GrLocation className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">address</p>
                <h3>lagos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
