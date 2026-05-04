import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm z-50">
      
      <Link href="/">
        <h1 className="text-xl font-bold text-[#8B5CF6] cursor-pointer">
          JobFit AI
        </h1>
      </Link>

      <Link href="/login">
        <button className="bg-[#8B5CF6] text-white px-4 py-2 rounded-xl transition hover:bg-[#7C3AED] hover:scale-105">
          로그인
        </button>
      </Link>

    </header>
  );
}