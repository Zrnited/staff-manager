import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import EmployeesTable from "../../components/tables/EmployeesTable";

export default function Employees() {
  return (
    <section className="space-y-5 lg:space-y-7 lg:px-5 lg:py-4">
      {/* section heading */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <SectionHeader heading="employees" subHeading="0 total employees" />
        <Button btnText="add employee" IconName={HiOutlinePlus} />
      </div>
      {/* search functionality */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center xl:max-w-175">
        <div className="relative md:w-full xl:w-[60%]">
          <input
            className="border border-[#E0E5EB] w-full h-12.5 rounded-md pl-10 pr-3 focus:outline-[#2A9290] xl:pl-12"
            placeholder="Search by name..."
          />
          <CiSearch className="absolute left-3 top-3 text-2xl text-gray-500 xl:left-4" />
        </div>
        <div className="relative md:w-full xl:w-[40%]">
          <select className="border border-[#E0E5EB] w-full h-12.5 rounded-md cursor-pointer px-5 appearance-none focus:outline-[#2A9290]">
            <option value={"all"}>All Grades</option>
            <option value="none">Unassigned</option>
          </select>
          <BsChevronDown className="absolute right-4 top-4 text-xl text-gray-500" />
        </div>
      </div>
      {/* list of employees */}
      <section className="bg-white mt-10 relative">
        <EmployeesTable />
      </section>
    </section>
  );
}
