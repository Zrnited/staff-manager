import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppContext } from "../../context";
import type { Employee, EmployeeForm, EmployeePageModals } from "../../types";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePlus } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import EmployeesTable from "../../components/tables/EmployeesTable";
import AddNewEmployee from "../../components/modals/employees-page/AddNewEmployee";
import EmployeeInfo from "../../components/modals/employees-page/EmployeeInfo";
import DeleteConfirmation from "../../components/modals/employees-page/DeleteConfirmation";
import { toast } from "sonner";

export default function Employees() {
  const [modals, setModals] = useState<EmployeePageModals>({
    addEmployee: false,
    viewEmployee: false,
    deleteEmployee: false,
  });
  const { setEmployees } = useAppContext();

  const [employeeForm, setEmployeeForm] = useState<EmployeeForm>({
    name: "",
    role: "",
    department: "",
    country: "",
    state: "",
    address: "",
    grade: "no grade assigned",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setEmployeeForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    //assign id and date
    const userId = uuidv4();
    const whenCreated = new Date().toISOString();

    //construct new user data
    const newEmployee: Employee = {
      id: userId,
      name: employeeForm.name,
      role: employeeForm.role,
      department: employeeForm.department,
      country: employeeForm.country,
      state: employeeForm.state,
      address: employeeForm.address,
      grade: employeeForm.grade,
      createdAt: whenCreated,
    };

    //add to list
    setEmployees((prevState) => {
      return [...prevState, newEmployee];
    });

    //notify
    toast.success("Employee added to list");

    //close modal and reset form
    setModals((prevState) => {
      return {
        ...prevState,
        addEmployee: false,
      };
    });

    setEmployeeForm({
      name: "",
      role: "",
      department: "",
      country: "",
      state: "",
      address: "",
      grade: "no grade assigned",
    });
  };

  return (
    <section className="space-y-5 lg:space-y-7 lg:px-5 lg:py-4">
      {/* section heading */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
        <SectionHeader heading="employees" subHeading="0 total employees" />
        <Button
          onClickFunction={() =>
            setModals((prevState) => {
              return {
                ...prevState,
                addEmployee: true,
              };
            })
          }
          btnText="add employee"
          IconName={HiOutlinePlus}
        />
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
      {/* add new employee modal */}
      {modals.addEmployee && (
        <AddNewEmployee
          employeeForm={employeeForm}
          setModals={setModals}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <EmployeeInfo />
      <DeleteConfirmation
        title="Delete Employee"
        desc="Are you sure you want to delete Kolawole Mayhorz? This action cannot be undone."
      />
    </section>
  );
}
