import { LuUsers } from "react-icons/lu";

interface Props {
  text: string;
}

export default function EmptySet({ text }: Props) {
  return (
    <div className="w-full px-5 flex text-center items-center flex-col gap-y-4 text-[#8a7d8f] my-14">
      <LuUsers className="text-4xl" />
      <p>{text}</p>
    </div>
  );
}
