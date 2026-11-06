interface Props {
  text: string;
}

export default function LoadingWrapper({ text }: Props) {
  return (
    <div className="w-full h-30 flex justify-center items-center text-center capitalize text-[#8a7d8f]">
      {text}
    </div>
  );
}
