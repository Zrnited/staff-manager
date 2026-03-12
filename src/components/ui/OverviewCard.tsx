import type { IconType } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

interface Props {
  cardTitle: string;
  count: number;
  IconName: IconType;
  cardColor: string;
  path?: string;
}

export default function OverviewCard({
  cardTitle,
  count,
  IconName,
  cardColor,
  path,
}: Props) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        if (path) {
          navigate(path);
        }
      }}
      className={`border border-[#E0E5EB] bg-white rounded-lg p-5 w-full flex justify-between ${path && "hover:-translate-y-1.5 cursor-pointer hover:shadow-sm transition ease-in-out delay-100"}`}
    >
      <div>
        <h3 className="text-[#8a7d8f] capitalize">{cardTitle}</h3>
        <p className="font-grotesk font-bold text-3xl">{count}</p>
      </div>
      <IconName color={cardColor} className="text-2xl" />
    </div>
  );
}
