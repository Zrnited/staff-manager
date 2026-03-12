import { fakeEmployees } from "../../constants";
import { FiEye, FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

export default function EmployeesTable() {
  const headings = [
    {
      name: "Name",
      classname: "pl-5 lg:pl-0 xl:pl-5",
    },
    {
      name: "Role",
      classname: "hidden lg:table-cell",
    },
    {
      name: "Department",
      classname: "hidden lg:table-cell",
    },
    {
      name: "Location",
      classname: "hidden lg:table-cell",
    },
    {
      name: "Grade",
      classname: "hidden sm:table-cell",
    },
    {
      name: "Actions",
      classname: "text-center",
    },
  ];

  return (
    <table className="w-full border-collapse border-spacing-x-2 border-spacing-y-2 text-left align-middle border border-[#E6E6E6] lg:rounded-xl">
      <thead>
        <tr>
          {headings.map((item, index) => {
            return (
              <th
                className={`${item?.classname} text-[#8a7d8f] border-b-[#D9D9D9] border-b h-16 lg:h-16 font-medium`}
                key={index}
                // style={{ fontWeight: "bold" }}
              >
                {item.name}
              </th>
            );
          })}
        </tr>
      </thead>
      {fakeEmployees.length !== 0 ? (
        <div className="h-30 flex items-center justify-center text-center w-full align-middle text-[#8a7d8f] text-sm md:text-base">
          <p className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-8">
            No employees yet. Click 'Add Employee' to get started
          </p>
        </div>
      ) : (
        <tbody className="rounded-b-lg py-2">
          {fakeEmployees.map((staff, index) => {
            return (
              <tr
                className="font-normal h-16 lg:h-20 border-b border-b-[#D9D9D9] text-[#232323] hover:bg-gray-50"
                key={index}
              >
                <td className="pl-5 xl:pl-5 lg:pl-0 lowercase">
                  <div className="flex items-center gap-x-2">
                    <div className="bg-[#E8F4E9] w-9.5 h-9.5 flex items-center justify-center text-[#166B1D] rounded-full font-bold uppercase text-sm">
                      K
                    </div>
                    <h3 className="capitalize text-[#0F172A]">{staff.name}</h3>
                  </div>
                </td>
                <td className="hidden lg:table-cell">{staff.role}</td>
                <td className="hidden lg:table-cell">{staff.department}</td>
                <td className="hidden lg:table-cell">{staff.location}</td>
                <td className="hidden sm:table-cell">{staff.grade}</td>
                <td className="w-auto">
                  <div className="flex w-fit items-center gap-2">
                    <button className="bg-inherit hover:bg-[#2A9290]/20 hover:text-[#2A9290] cursor-pointer p-2 rounded-sm transition ease-in-out delay-100 w-fit lg:p-3">
                      <FiEye />
                    </button>
                    <button className="bg-inherit hover:bg-[#2A9290]/20 hover:text-[#2A9290] cursor-pointer p-2 rounded-sm transition ease-in-out delay-100 w-fit lg:p-3">
                      <FiEdit2 />
                    </button>
                    <button className="bg-inherit hover:bg-[#2A9290]/20 text-[#DC2828] cursor-pointer p-2 rounded-sm transition ease-in-out delay-100 w-fit lg:p-3">
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}
