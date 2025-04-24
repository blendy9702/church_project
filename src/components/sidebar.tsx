"use client";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();
  const [isSampleTabOpen, setIsSampleTabOpen] = useState(false);

  return (
    <div className="fixed h-screen">
      <div className="bg-gray-200/70 h-full w-[200px] max-lg:hidden">
        <div className="flex flex-col">
          <div className="flex justify-center items-center text-[#1e1e1e] text-[28px] font-bold max-lg:hidden my-10">
            <Link href="/">배고프다</Link>
          </div>
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer hover:bg-black/20"
            onClick={() => router.push("/")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              <div>대시보드</div>
            </div>
          </div>
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer relative hover:bg-black/20"
            onClick={() => setIsSampleTabOpen(!isSampleTabOpen)}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold ">
              SAMPLE TAB
            </div>
            <div className="absolute right-0 mr-4">
              <FaChevronDown className="text-[#1e1e1e] text-[16px]" />
            </div>
          </div>
          {isSampleTabOpen && (
            <div className="bg-black/5">
              <div
                className="flex justify-center items-center cursor-pointer hover:bg-black/20"
                onClick={() => router.push("/sampletab/sub1")}
              >
                <div className="flex justify-center items-center gap-2 my-4">
                  <div className="text-[#1e1e1e] text-[16px] font-bold">
                    Sub Menu 1
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer hover:bg-black/20"
                onClick={() => router.push("/sampletab/sub2")}
              >
                <div className="flex justify-center items-center gap-2 my-4">
                  <div className="text-[#1e1e1e] text-[16px] font-bold">
                    Sub Menu 2
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer hover:bg-black/20"
            onClick={() => router.push("/sample")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              SAMPLE
            </div>
          </div>
          {/* 로그인 */}
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer hover:bg-black/20"
            onClick={() => router.push("/auth")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              LOGIN
            </div>
          </div>
          {/* 심심해서 만든 애플 */}
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer hover:bg-black/20"
            onClick={() => router.push("/apple")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              APPLE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
