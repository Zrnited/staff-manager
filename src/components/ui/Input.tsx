interface Props {
  type: string;
  required: boolean;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  handleChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement, Element>,
  ) => void;
}

export default function Input({
  type,
  name,
  required,
  label,
  placeholder,
  handleChange,
  value,
}: Props) {
  return (
    <div className="flex flex-col gap-y-1.5 w-full">
      <label className="font-medium capitalize">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="h-12.5 rounded-xl border border-[#E2E8F0] px-3 focus:outline-[#2A9290]"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
