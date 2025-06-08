"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const authPaths = ["/login", "/signup", "/test"];

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = authPaths.some((path) => pathname.startsWith(path));
  const isMainPage = pathname === "/";

  if (isAuthPage) {
    return <div>{children}</div>;
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isMainPage ? "bg-[#ffffff]" : "bg-[#F5F5F5]"
      }`}
    >
      <header className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </header>
      <div className="max-w-[1440px] m-auto mt-[56px] flex-grow w-full">
        <div className="w-[1200px] mx-auto">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
