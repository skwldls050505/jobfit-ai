type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#8B5CF6] text-white px-4 py-2 rounded-xl transition hover:bg-[#7C3AED] hover:scale-105"
    >
      {text}
    </button>
  );
}