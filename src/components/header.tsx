import Image from "next/image";
import Link from "next/link";

export default function Header() {
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
          <button className="cursor-pointer">
            <Image
              src="/images/profile.svg"
              alt="profile"
              width={30}
              height={30}
              className="rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
