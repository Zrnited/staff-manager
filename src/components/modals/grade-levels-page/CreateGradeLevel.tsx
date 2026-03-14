import { AiOutlineClose } from "react-icons/ai";
import Input from "../../ui/Input";
import type { GradeLevelForm, GradeLevelsModals } from "../../../types";

interface Props {
  setModals: React.Dispatch<React.SetStateAction<GradeLevelsModals>>;
  gradeLevelForm: GradeLevelForm;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>,
  ) => void;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
}

export default function CreateGradeLevel({
  setModals,
  gradeLevelForm,
  handleChange,
  handleSubmit,
}: Props) {
  const closeModal = () => {
    setModals((prevState) => {
      return {
        ...prevState,
        createGradeLevel: false,
      };
    });
  };
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
            create grade level
          </h1>
          <form onSubmit={handleSubmit} className="space-y-2 mt-5 lg:space-y-4">
            {/* name & desc */}
            <div className="flex flex-col gap-y-5">
              <Input
                label="name"
                placeholder="e.g. LVL1"
                type="text"
                name="name"
                value={gradeLevelForm.name}
                handleChange={handleChange}
                required={true}
              />
              <Input
                placeholder="e.g. Entry Level"
                label="description (optional)"
                type="text"
                name="description"
                required={true}
                value={gradeLevelForm.description}
                handleChange={handleChange}
              />
            </div>
            {/* submit & cancel btns */}
            <div className="flex items-center h-12.5 gap-x-2 mt-7 md:w-70 md:place-self-end">
              <div
                onClick={closeModal}
                className="h-full w-full px-5 flex items-center justify-center border rounded-xl border-gray-200 capitalize hover:bg-[#2A9290]/10 transition ease-in-out delay-100 cursor-pointer font-medium md:w-1/2"
              >
                cancel
              </div>
              <button
                disabled={!gradeLevelForm.name || !gradeLevelForm.description}
                className="w-full capitalize h-full rounded-xl bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none cursor-pointer transition ease-in-out delay-100 disabled:bg-gray-300 disabled:cursor-not-allowed md:w-1/2"
              >
                create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
