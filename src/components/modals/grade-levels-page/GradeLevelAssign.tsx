import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";

// interface Props {
//   setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function GradeLevelAssign() {
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
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-1 lg:max-w-145 lg:p-8 max-h-150 activity overflow-y-scroll">
          <h1 className="font-grotesk text-xl capitalize text-start font-semibold">
            Assign to LVL1
          </h1>
          <form className="space-y-2 mt-5 lg:space-y-4">
            {/* name & desc */}
            <div className="flex flex-col gap-y-1 relative">
              <label className="capitalize font-medium">select employee</label>
              <select className="h-12.5 rounded-xl border border-[#E2E8F0] px-4 focus:outline-[#2A9290] appearance-none cursor-pointer">
                <option value={""}>Choose an employee</option>
                <option>Kolawole Mayowa - Skit Maker</option>
              </select>
              <BsChevronDown className="absolute bottom-4 right-4" />
            </div>
            {/* submit & cancel btns */}
            <div className="flex items-center h-12.5 gap-x-2 mt-7 md:w-70 md:place-self-end">
              <div className="h-full w-full px-5 flex items-center justify-center border rounded-xl border-gray-200 capitalize hover:bg-[#2A9290]/10 transition ease-in-out delay-100 cursor-pointer font-medium md:w-1/2">
                cancel
              </div>
              <button className="w-full capitalize h-full rounded-xl bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed md:w-1/2">
                assign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
