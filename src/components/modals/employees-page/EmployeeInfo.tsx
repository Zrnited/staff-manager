import { AiOutlineClose } from "react-icons/ai";
import { LuBriefcase, LuBuilding } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import type { Employee, EmployeePageModals } from "../../../types";

interface Props {
  viewEmployee: Employee | undefined;
  setViewEmployee: React.Dispatch<React.SetStateAction<Employee | undefined>>;
  setModals: React.Dispatch<React.SetStateAction<EmployeePageModals>>;
}

export default function EmployeeInfo({
  viewEmployee,
  setViewEmployee,
  setModals,
}: Props) {
  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="w-[90%] flex justify-end lg:max-w-160">
          <AiOutlineClose
            onClick={() => {
              setViewEmployee(undefined);
              setModals((prevState) => {
                return {
                  ...prevState,
                  viewEmployee: false,
                };
              });
            }}
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
              {viewEmployee?.name.slice(0, 1).toUpperCase()}
            </div>
            <div className="space-y-1">
              <h2 className="font-grotesk font-semibold capitalize text-xl lg:text-2xl">
                {viewEmployee?.name}
              </h2>
              <p className="text-[#8a7d8f] capitalize text-sm lg:text-base">
                {viewEmployee?.grade}
              </p>
            </div>
          </div>
          {/* other information */}
          <div className="space-y-3 lg:space-y-4">
            <div className="flex gap-x-3 items-start font-medium">
              <LuBriefcase className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">role</p>
                <h3>{viewEmployee?.role}</h3>
              </div>
            </div>
            <div className="flex gap-x-3 items-start font-medium">
              <LuBuilding className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">department</p>
                <h3>{viewEmployee?.department}</h3>
              </div>
            </div>
            <div className="flex gap-x-3 items-start font-medium">
              <GrLocation className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">location</p>
                <h3>{viewEmployee?.country}</h3>
              </div>
            </div>
            <div className="flex gap-x-3 items-start font-medium">
              <GrLocation className="text-[#8a7d8f] text-xl" />
              <div className="capitalize">
                <p className="text-[#8a7d8f]">address</p>
                <h3>{`${viewEmployee?.address}, ${viewEmployee?.state}, ${viewEmployee?.country}`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
