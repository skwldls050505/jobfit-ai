import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#F5F3FF] text-[#111827]">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}