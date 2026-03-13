import { HiOutlinePlus } from "react-icons/hi";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { LuUsers, LuUserRoundPlus } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import EmptySet from "../../components/ui/EmptySet";
import CreateGradeLevel from "../../components/modals/grade-levels-page/CreateGradeLevel";
import DeleteConfirmation from "../../components/modals/employees-page/DeleteConfirmation";
import GradeLevelAssign from "../../components/modals/grade-levels-page/GradeLevelAssign";

export default function GradeLevels() {
  return (
    <section className="space-y-5 lg:space-y-7 lg:px-5 lg:py-4">
      {/* section heading */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <SectionHeader
          heading="grade levels"
          subHeading="Mid-role assessment grade levels for employees."
        />
        <Button btnText="create grade level" IconName={HiOutlinePlus} />
      </div>{" "}
      {/* grade level cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="border border-[#E0E5EB] bg-white rounded-lg p-5 w-full flex justify-between text-[#8a7d8f] lg:p-6">
          <div className="space-y-1">
            <h1 className="font-grotesk text-black text-xl font-semibold">
              LVL1
            </h1>
            <p>Entry Level</p>
            <div className="flex items-center gap-x-2 mt-2">
              <LuUsers />
              <p>0 employees</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <button className="bg-inherit hover:bg-[#2A9290]/20 hover:text-[#2A9290] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
              <LuUserRoundPlus />
            </button>
            <button className="bg-inherit hover:bg-[#2A9290]/20 text-[#DC2828] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
        <div className="border border-[#E0E5EB] bg-white rounded-lg p-5 w-full flex justify-between text-[#8a7d8f] lg:p-6">
          <div className="space-y-1">
            <h1 className="font-grotesk text-black text-xl font-semibold">
              LVL2
            </h1>
            <p>Senior Staff</p>
            <div className="flex items-center gap-x-2 mt-2">
              <LuUsers />
              <p>0 employees</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <button className="bg-inherit hover:bg-[#2A9290]/20 hover:text-[#2A9290] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
              <LuUserRoundPlus />
            </button>
            <button className="bg-inherit hover:bg-[#2A9290]/20 text-[#DC2828] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
        <div className="border border-[#E0E5EB] bg-white rounded-lg p-5 w-full flex justify-between text-[#8a7d8f] lg:p-6">
          <div className="space-y-1">
            <h1 className="font-grotesk text-black text-xl font-semibold">
              LVL3
            </h1>
            <p>Admin Block</p>
            <div className="flex items-center gap-x-2 mt-2">
              <LuUsers />
              <p>0 employees</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-lg">
            <button className="bg-inherit hover:bg-[#2A9290]/20 hover:text-[#2A9290] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
              <LuUserRoundPlus />
            </button>
            <button className="bg-inherit hover:bg-[#2A9290]/20 text-[#DC2828] cursor-pointer p-4 rounded-sm transition ease-in-out delay-100 w-fit">
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      </div>
      {/* notifications */}
      <EmptySet text="No grade levels yet. Create one to start categorizing employees." />
      <CreateGradeLevel />
      <DeleteConfirmation
        title="Delete Grade Level"
        desc={`"Delete "LVL1"? Employees in this grade will become unassigned.`}
      />
      <GradeLevelAssign />
    </section>
  );
}
