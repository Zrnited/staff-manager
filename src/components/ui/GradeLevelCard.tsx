import { LuUsers, LuUserRoundPlus } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
// import type { GradeLevel } from "../../types";

interface Props {
  name: string;
  description: string;
  //   handleClick: (e: GradeLevel) => void;
}

export default function GradeLevelCard({
  name,
  description,
  //   handleClick,
}: Props) {
  return (
    <div className="border border-[#E0E5EB] bg-white rounded-lg p-5 w-full flex justify-between text-[#8a7d8f] lg:p-6">
      <div className="space-y-1">
        <h1 className="font-grotesk text-black text-xl font-semibold">
          {name}
        </h1>
        <p>{description}</p>
        <div className="flex items-center gap-x-2 mt-2">
          <LuUsers />
          <p>0 employees</p>
        </div>
      </div>
      <div className="flex items-center h-fit gap-x-2 text-lg">
        <button className="bg-inherit hover:bg-[#2A9290]/20 hover:text-[#2A9290] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
          <LuUserRoundPlus />
        </button>
        <button className="bg-inherit hover:bg-[#2A9290]/20 text-[#DC2828] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
          <RiDeleteBinLine />
        </button>
      </div>
    </div>
  );
}
