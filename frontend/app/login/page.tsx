export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F3FF]">
      
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-[#8B5CF6]">
          로그인
        </h2>

        <form className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="이메일"
            className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          />

          <input
            type="password"
            placeholder="비밀번호"
            className="border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
          />

          <button
            type="submit"
            className="bg-[#8B5CF6] text-white py-2 rounded-xl transition hover:bg-[#7C3AED]"
          >
            로그인
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          계정이 없으신가요?
        </p>

      </div>

    </main>
  );
}