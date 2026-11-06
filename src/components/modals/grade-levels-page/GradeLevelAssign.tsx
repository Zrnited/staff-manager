import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import type { Employee, GradeLevel, GradeLevelsModals } from "../../../types";
import { useEffect, useState } from "react";

interface Props {
  setModals: React.Dispatch<React.SetStateAction<GradeLevelsModals>>;
  setGradeLevel: React.Dispatch<React.SetStateAction<GradeLevel | null>>;
  gradeLevel: GradeLevel | null;
  setSelEmployeeId: React.Dispatch<React.SetStateAction<string | null>>;
  selEmployeeId: string;
  assignGradeLevel: (e: React.SubmitEvent<HTMLFormElement>) => void;
  employees: Employee[];
  isLoading: boolean;
}

export default function GradeLevelAssign({
  setModals,
  setGradeLevel,
  gradeLevel,
  setSelEmployeeId,
  selEmployeeId,
  assignGradeLevel,
  employees,
  isLoading,
}: Props) {
  const [employee, setEmployee] = useState<Employee | null>(null);

  const onClose = () => {
    setModals((prevState) => {
      return {
        ...prevState,
        assignEmployee: false,
      };
    });
    setGradeLevel(null);
    setSelEmployeeId(null);
    setEmployee(null);
  };

  useEffect(() => {
    if (!selEmployeeId) return;
    const employee = employees.find((staff) => staff.id === selEmployeeId);
    if (!employee) return;
    setEmployee(employee);
  }, [selEmployeeId]);

  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="w-[90%] flex justify-end lg:max-w-160">
          <AiOutlineClose
            onClick={onClose}
            color="white"
            className="hover:bg-[#2A9290] rounded-full cursor-pointer transition ease-in-out p-3 text-xl w-10 h-10"
          />
        </div>
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-1 lg:max-w-145 lg:p-8 max-h-150 activity overflow-y-scroll">
          <h1 className="font-grotesk text-xl capitalize text-start font-semibold">
            {`Assign to ${gradeLevel?.name}`}
          </h1>
          <form
            onSubmit={assignGradeLevel}
            className="space-y-2 mt-5 lg:space-y-4"
          >
            {/* name & desc */}
            <div className="flex flex-col gap-y-1 relative">
              <label className="capitalize font-medium">select employee</label>
              <select
                onChange={(e) => setSelEmployeeId(e.target.value)}
                required
                className="h-12.5 rounded-xl border border-[#E2E8F0] px-4 focus:outline-[#2A9290] appearance-none cursor-pointer"
              >
                <option value={""}>Choose an employee</option>
                {employees
                  .filter(
                    (staff) => staff.gradeLevel?.name !== gradeLevel?.name,
                  )
                  .map((staff, index) => {
                    return (
                      <option
                        key={index}
                        value={staff.id}
                      >{`${staff.name} - ${staff.position}`}</option>
                    );
                  })}
              </select>
              <BsChevronDown className="absolute bottom-4 right-4" />
            </div>
            {employee?.gradeLevel && (
              <div className="flex items-center gap-x-1 text-xs text-yellow-600 px-1">
                <BiErrorCircle size={15} />
                <p>
                  You will be moving this employee from{" "}
                  {employee.gradeLevel.name} grade
                </p>
              </div>
            )}
            {/* submit & cancel btns */}
            <div className="flex items-center h-12.5 gap-x-2 mt-7 md:w-70 md:place-self-end">
              <div
                onClick={onClose}
                className="h-full w-full px-5 flex items-center justify-center border rounded-xl border-gray-200 capitalize hover:bg-[#2A9290]/10 transition ease-in-out delay-100 cursor-pointer font-medium md:w-1/2"
              >
                cancel
              </div>
              <button
                disabled={!selEmployeeId.trim() || isLoading}
                className="w-full capitalize h-full rounded-xl bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed md:w-1/2"
              >
                {isLoading ? "assigning..." : "assign"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
