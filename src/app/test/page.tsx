"use client";

import Image from "next/image";

export default function TestPage() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center gap-10">
        <span className="text-6xl font-extrabold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent animate-bounce">
          준영님, 안녕하세요! 🎉
        </span>
        <Image src="/google.svg" alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}
