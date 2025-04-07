"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const MdSidebar = ({ onClose }: { onClose: () => void }) => {
  const router = useRouter();
  const [isSampleTabOpen, setIsSampleTabOpen] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    const sidebar = document.getElementById("md-sidebar");
    if (sidebar && !sidebar.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full z-30" id="md-sidebar">
      <div className="bg-white/95 h-full w-[250px] shadow-md">
        <div className="flex flex-col relative">
          <div
            className="absolute right-0 top-0 p-4 cursor-pointer"
            onClick={onClose}
          >
            <IoCloseOutline className="text-[#1e1e1e] text-[36px]" />
          </div>
          <div className="text-[#1e1e1e] text-[28px] font-bold py-10 mt-5 flex justify-center items-center">
            <Link href="/">DASHBOARD</Link>
          </div>
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer hover:bg-black/20"
            onClick={() => router.push("/")}
          >
            <div className="text-[#1e1e1e] text-[16px] font-medium">
              <div>대시보드</div>
            </div>
          </div>
          <div
            className="flex justify-center items-center gap-2 p-3 cursor-pointer relative hover:bg-black/20"
            onClick={() => setIsSampleTabOpen(!isSampleTabOpen)}
          >
            <div className="text-[#1e1e1e] text-[16px] font-medium ">
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
                  <div className="text-[#1e1e1e] text-[16px] font-medium">
                    Sub Menu 1
                  </div>
                </div>
              </div>
              <div
                className="flex justify-center items-center cursor-pointer hover:bg-black/20"
                onClick={() => router.push("/sampletab/sub2")}
              >
                <div className="flex justify-center items-center gap-2 my-4">
                  <div className="text-[#1e1e1e] text-[16px] font-medium">
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
            <div className="text-[#1e1e1e] text-[16px] font-medium">
              SAMPLE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdSidebar;
