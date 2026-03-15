import { AiOutlineClose } from "react-icons/ai";
import Input from "../../ui/Input";
import { BsChevronDown } from "react-icons/bs";
import { useAppContext } from "../../../context";
import type {
  Employee,
  EmployeeForm,
  EmployeePageModals,
} from "../../../types";

interface Props {
  setModals: React.Dispatch<React.SetStateAction<EmployeePageModals>>;
  employeeForm: EmployeeForm;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>,
  ) => void;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  employee: Employee | undefined;
  setEmployee: React.Dispatch<React.SetStateAction<Employee | undefined>>;
  resetEmployeeForm: () => void;
  countries: string[];
}

export default function AddNewEmployee({
  employeeForm,
  setModals,
  handleChange,
  handleSubmit,
  setEmployee,
  employee,
  resetEmployeeForm,
  countries,
}: Props) {
  const closeModal = () => {
    setModals((prevState) => {
      return {
        ...prevState,
        addEmployee: false,
      };
    });
    if (employee) {
      setEmployee(undefined);
      resetEmployeeForm();
    }
  };
  const { gradeLevels } = useAppContext();
  return (
    <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 z-20">
      <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center right-0 bg-[#000000]/70 backdrop-blur-md">
        <div className="w-[90%] flex justify-end lg:max-w-160">
          <AiOutlineClose
            onClick={closeModal}
            color="white"
            className="hover:bg-[#2A9290] rounded-full cursor-pointer transition ease-in-out p-3 text-xl w-10 h-10"
          />
        </div>
        <div className="bg-white py-6 px-5 rounded-lg w-[90%] space-y-1 lg:max-w-145 lg:p-8 max-h-150 activity overflow-y-scroll">
          <h1 className="font-grotesk text-xl capitalize text-start font-semibold">
            add new employee
          </h1>
          <form onSubmit={handleSubmit} className="space-y-2 mt-5 lg:space-y-4">
            {/* full name & role/position */}
            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center">
              <Input
                value={employeeForm.name}
                handleChange={handleChange}
                required={true}
                label="Full Name"
                type="text"
                name="name"
              />
              <Input
                value={employeeForm.role}
                handleChange={handleChange}
                required={true}
                label="Role / Position"
                type="text"
                name="role"
              />
            </div>
            {/* dept & country */}
            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center">
              <Input
                value={employeeForm.department}
                handleChange={handleChange}
                required={true}
                label="department"
                type="text"
                name="department"
              />
              <div className="flex flex-col gap-y-1.5">
                <label className="font-medium capitalize">country</label>
                <div className="relative">
                  <select
                    name="country"
                    value={employeeForm.country}
                    onChange={handleChange}
                    required
                    className="h-12.5 rounded-xl border w-full border-[#E2E8F0] px-3 appearance-none cursor-pointer focus:outline-[#2A9290]"
                  >
                    <option value={""}>-- Select --</option>
                    {countries.map((country, index) => {
                      return <option key={index}>{country}</option>;
                    })}
                  </select>
                  <BsChevronDown className="absolute right-4 top-4 text-xl text-gray-500" />
                </div>
              </div>
            </div>
            {/* state / province & address */}
            <div className="flex w-full flex-col gap-3 md:flex-row md:items-center">
              <Input
                value={employeeForm.state}
                handleChange={handleChange}
                required={true}
                label="state / province"
                type="text"
                name="state"
              />
              <Input
                value={employeeForm.address}
                handleChange={handleChange}
                required={true}
                label="address"
                type="text"
                name="address"
              />
            </div>
            {/* Grade level */}
            <div className="flex flex-col gap-y-1.5">
              <label className="font-medium capitalize">
                Grade Level (optional)
              </label>
              <div className="relative">
                <select
                  name="grade"
                  value={employeeForm.grade}
                  required
                  onChange={handleChange}
                  className="h-12.5 rounded-xl border w-full border-[#E2E8F0] px-3 appearance-none cursor-pointer focus:outline-[#2A9290]"
                >
                  <option value={"no grade assigned"}>Assign later</option>
                  {gradeLevels.map((level, index) => {
                    return (
                      <option key={index} value={level.name}>
                        {level.name}
                      </option>
                    );
                  })}
                </select>
                <BsChevronDown className="absolute right-4 top-4 text-xl text-gray-500" />
              </div>
            </div>
            {/* submit & cancel btns */}
            <div className="flex items-center h-12.5 gap-x-2 mt-7 md:w-100 md:place-self-end">
              <div
                onClick={closeModal}
                className="h-full w-full px-5 flex items-center justify-center border rounded-xl border-gray-200 capitalize hover:bg-[#2A9290]/10 transition ease-in-out delay-100 cursor-pointer font-medium md:w-[40%]"
              >
                cancel
              </div>
              <button
                disabled={
                  !employeeForm.role ||
                  !employeeForm.address ||
                  !employeeForm.country ||
                  !employeeForm.department ||
                  !employeeForm.name ||
                  !employeeForm.state
                }
                className="w-full capitalize h-full rounded-xl bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed md:w-[60%]"
              >
                add employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
