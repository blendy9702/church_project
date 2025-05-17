"use client";

import Image from "next/image";

export default function TestPage() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
        <span className="text-[20px] font-bold">안녕하세요</span>
        <Image src="/google.svg" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}
