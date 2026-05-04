type InputProps = {
  type: string;
  placeholder: string;
};

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
    />
  );
}