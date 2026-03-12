import type { IconType } from "react-icons/lib";

interface Props {
  btnText: string;
  IconName: IconType;
}

export default function Button({ btnText, IconName }: Props) {
  return (
    <button className="w-full h-13 rounded-lg bg-[#2A9290] hover:bg-[#242d3b] text-white focus:outline-none cursor-pointer transition ease-in-out delay-100 flex items-center justify-center capitalize gap-x-2 disabled:bg-gray-300 disabled:cursor-not-allowed md:w-fit md:px-7">
      <IconName />
      <p>{btnText}</p>
    </button>
  );
}
