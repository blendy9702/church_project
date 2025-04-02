"use client";

import { Input } from "@/components/ui/input";
import {
  BellIcon,
  GearIcon,
  ProfileIcon,
} from "./icons/dialog-triggers";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { useRef } from "react";

export default function Header() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <header className="bg-gray-100/25">
      <div className="flex justify-between items-center h-[80px] mx-4">
        <div className="text-[#1e1e1e] text-[32px] font-bold">
          <Link href="/">DASHBOARD</Link>
        </div>
        <div className="flex relative justify-center items-center">
          <Input
            className="w-[300px] h-[36px] placeholder:text-[#1e1e1e] text-[#1e1e1e] border-3 border-[#1e1e1e] rounded-full pr-10"
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
          <BellIcon />
          <GearIcon />
          <ProfileIcon />
        </div>
      </div>
    </header>
  );
}
