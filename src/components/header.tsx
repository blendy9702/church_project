"use client";
import { testuser } from "@/data/testuser";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const userId = testuser.id;

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
                    <div className="flex items-center justify-between py-2 w-full hover:bg-[#F5F5F5]">
                      <button className="cursor-pointer w-full">_id_</button>
                    </div>
                    <Link
                      href={`/users/${userId}/article`}
                      className="flex items-center justify-between py-2 w-full hover:bg-[#F5F5F5]"
                    >
                      <button className="cursor-pointer w-full">
                        아티클 관리
                      </button>
                    </Link>
                    <Link
                      href={`/users/${userId}/annotation`}
                      className="flex items-center justify-between py-2 w-full hover:bg-[#F5F5F5]"
                    >
                      <button className="cursor-pointer w-full">
                        주석 관리
                      </button>
                    </Link>
                    <div className="flex items-center justify-between py-2 w-full hover:bg-[#F5F5F5]">
                      <button className="cursor-pointer w-full">
                        로그아웃
                      </button>
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
