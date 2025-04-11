"use client";

import MdSidebar from "@/components/md-sidebar";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { IoIosMenu, IoMdSearch } from "react-icons/io";
import {
  BellIcon,
  GearIcon,
  ProfileIcon,
} from "@/components/icons/dialog-triggers";
import { FontAnime, TestBall } from "@/components/anime/animes";

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-gray-100/25 max-lg:bg-gray-100 max-lg:fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center h-[80px] mx-4">
        <div
          className="lg:hidden text-[36px] cursor-pointer p-4"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <IoIosMenu />
        </div>
        {isSidebarOpen && (
          <MdSidebar onClose={() => setSidebarOpen(false)} />
        )}
        <div className="flex justify-center items-center max-lg:hidden">
          <FontAnime />
        </div>

        <div className="max-sm:hidden flex relative justify-center items-center">
          <Input
            className="w-[300px] h-[40px] placeholder:text-[#1e1e1e] text-[#1e1e1e] border-2 border-[#1e1e1e] rounded-full pr-10"
            placeholder="검색"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.currentTarget.value = "";
              }
            }}
            ref={inputRef}
          />
          <IoMdSearch
            className="text-[#1e1e1e] text-[24px] absolute right-0 mr-3 cursor-pointer"
            onClick={() => {
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          />
        </div>
        <div className="flex gap-5">
          <TestBall />
          <BellIcon />
          <GearIcon />
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
}
