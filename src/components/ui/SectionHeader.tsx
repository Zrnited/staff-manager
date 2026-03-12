interface Props {
  heading: string;
  subHeading: string;
}

export default function SectionHeader({ heading, subHeading }: Props) {
  return (
    <div className="flex flex-col lg:gap-y-2">
      <h1 className="font-grotesk font-semibold text-2xl capitalize lg:text-3xl">
        {heading}
      </h1>
      <p className="text-[#8a7d8f] lg:text-lg">{subHeading}</p>
    </div>
  );
}
