import Input from "@/components/Input";
import Button from "@/components/Button";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5F3FF]">
      
      <div className="bg-white p-8 rounded-2xl shadow w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-[#8B5CF6]">
          회원가입
        </h2>

        <form className="flex flex-col gap-4">
          
          <Input type="text" placeholder="이름" />
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />

          <Button text="회원가입" />
        </form>

      </div>

    </main>
  );
}