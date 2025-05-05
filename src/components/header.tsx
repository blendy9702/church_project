"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-[#FBFBFC]">
      <div className="w-[1200px] mx-auto">
        <div className="flex items-center justify-between h-[56px]">
          <Link href="/" className="cursor-pointer">
            <Image src="/images/logo.svg" alt="logo" width={30} height={30} />
          </Link>
          <div className="relative flex justify-center items-center">
            <input
              type="text"
              placeholder="성경, 개혁주의 교리 관련 질문, 상담"
              className="h-[34px] w-[350px] rounded-[10px] border-1 border-[#E5E5E5] pl-4 pr-[40px] placeholder:text-[#979797] hover:border-[#A0A0A0] focus:outline-none"
            />
            <div className="absolute p-1 right-2 top-[2px] cursor-pointer">
              <Image
                src="/images/search.svg"
                alt="search"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div>
            <div className="cursor-pointer" ref={profileRef}>
              <Image
                src="/images/profile.svg"
                alt="profile"
                width={30}
                height={30}
                className="rounded-full object-cover"
                onClick={() => setModalOpen(!isModalOpen)}
              />
            </div>
            <div className="relative" ref={modalRef}>
              {isModalOpen && (
                <div className="absolute top-2 right-0 w-[135px] bg-white border-1 border-[#E5E5E5] rounded-[10px]">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-between my-2">
                      <button className="cursor-pointer">_id_</button>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <button className="cursor-pointer">아티클 관리</button>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <button className="cursor-pointer">주석 관리</button>
                    </div>
                    <div className="flex items-center justify-between my-2">
                      <button className="cursor-pointer">로그아웃</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
