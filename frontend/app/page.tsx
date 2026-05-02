import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F3FF] text-[#111827]">
      
      {/* 네비게이션 */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm z-50">
        <h1 className="text-xl font-bold text-[#8B5CF6]">JobFit AI</h1>
        <Link href="/login">
          <button className="bg-[#8B5CF6] text-white px-4 py-2 rounded-xl transition hover:bg-[#7C3AED] hover:scale-105">
            로그인
          </button>
        </Link>
      </header>
      
     {/* 메인 */}
<section className="flex flex-col items-center justify-center text-center pt-32 pb-24 px-4">
  <h2 className="text-4xl font-bold mb-4 animate-fadeIn">
    취업 준비를 더 스마트하게
  </h2>
  <p className="text-gray-600 mb-6">
    자소서 첨삭부터 면접 준비까지 한 번에 해결하세요
  </p>
  <button className="bg-[#8B5CF6] text-white px-6 py-3 rounded-2xl text-lg transition hover:bg-[#7C3AED] hover:scale-105">
    시작하기
  </button>
</section>

      {/* 기능 카드 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 pb-20">
        
        <div className="bg-white p-6 rounded-2xl shadow transition hover:shadow-lg hover:-translate-y-1">
          <h3 className="font-semibold text-lg mb-2">AI 자소서 첨삭</h3>
          <p className="text-gray-500">
            자연스럽고 완성도 높은 자소서를 만들어줍니다
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow transition hover:shadow-lg hover:-translate-y-1">
          <h3 className="font-semibold text-lg mb-2">면접 질문 생성</h3>
          <p className="text-gray-500">
            자소서를 기반으로 예상 질문을 제공합니다
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow transition hover:shadow-lg hover:-translate-y-1">
          <h3 className="font-semibold text-lg mb-2">지원 일정 관리</h3>
          <p className="text-gray-500">
            지원 현황과 면접 일정을 한눈에 관리하세요
          </p>
        </div>

      </section>

    </main>
  );
}