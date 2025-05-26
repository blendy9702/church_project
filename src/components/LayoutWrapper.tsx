'use client';
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const authPaths = ["/login", "/signup"];

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = authPaths.some((path) => pathname.startsWith(path));

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Header />
      </header>
      <div className="max-w-[1440px] m-auto mt-[56px] flex-grow">
        <div className="w-[1200px] mx-auto">{children}</div>
      </div>
      <Footer />
    </>
  );
} 