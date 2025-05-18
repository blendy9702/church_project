import Image from "next/image";

export default function AnnotationPage() {
  return (
    <div className="w-full max-w-[1200px]">
      <div className="flex flex-col justify-center py-3">
        <div className="flex justify-between items-center">
          <div className="text-[20px] font-[700] text-[#000000]">주석 관리</div>
          <button className="bg-[#5FB995] text-white text-[16px] font-[700] px-5 py-1 rounded-full cursor-pointer">
            확인
          </button>
        </div>
        <div className="flex flex-col bg-[#F5F5F5] mt-8">
          <div className="mx-auto w-[1000px]">
            <div className="relative flex my-3">
              <input
                type="text"
                placeholder="주석 이름, 내용 검색"
                className="h-[34px] w-[350px] rounded-[10px] border-1 border-[#E5E5E5] pl-4 pr-[40px] placeholder:text-[#979797] hover:border-[#A0A0A0] focus:outline-none"
              />
              <div className="absolute p-1 left-[315px] top-[2px] cursor-pointer">
                <Image
                  src="/images/search.svg"
                  alt="search"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
