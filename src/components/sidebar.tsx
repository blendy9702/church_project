"use client";
import { useRouter } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function Sidebar() {
  const router = useRouter();
  const [isSampleTabOpen, setIsSampleTabOpen] = useState(false);

  return (
    <div>
      <div className="bg-gray-200 h-full w-[200px]">
        <div className="flex flex-col">
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer"
            onClick={() => router.push("/dashbaord")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              <div>대시보드</div>
            </div>
          </div>
          <div
            className="bg-red-400 flex justify-center items-center gap-2 p-3 cursor-pointer relative"
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
            <div className="p-2">
              <div
                className="flex justify-center items-center gap-2 p-3 cursor-pointer"
                onClick={() => router.push("/sampletab/sub1")}
              >
                <div className="text-[#1e1e1e] text-[16px] font-bold">
                  Sub Menu 1
                </div>
              </div>
              <div
                className="flex justify-center items-center gap-2 p-3 cursor-pointer"
                onClick={() => router.push("/sampletab/sub2")}
              >
                <div className="text-[#1e1e1e] text-[16px] font-bold">
                  Sub Menu 2
                </div>
              </div>
            </div>
          )}
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer"
            onClick={() => router.push("/sample")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              SAMPLE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
