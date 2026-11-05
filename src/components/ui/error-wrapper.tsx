import { MdErrorOutline } from "react-icons/md";
interface Props {
  text: string;
}

export default function ErrorWrapper({ text }: Props) {
  return (
    <div className="w-full px-5 flex text-center items-center flex-col gap-y-3 text-[#8a7d8f] my-14">
      <MdErrorOutline className="text-4xl" />
      <p>{text}</p>
    </div>
  );
}
