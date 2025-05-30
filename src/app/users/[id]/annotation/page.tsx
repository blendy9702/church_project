import { Switch } from "@/components/ui/switch";
import { annotationDummyData } from "@/data/dummyData";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import { SlNote } from "react-icons/sl";

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
            <div className="relative flex flex-col gap-5 my-3">
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
              <div
                className="grid gap-2 text-[14px] font-bold grid-cols-[120px_120px_1fr_1fr_120px_120px] items-center"
              >
                <span>주석 이름</span>
                <span>주석 위치</span>
                <span>최종 수정일</span>
                <span>주석 내용</span>
                <span>공개 여부</span>
                <span>추가 동작</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#F5F5F5] mt-[2px] px-[100px]">
          <div className="flex flex-col justify-between my-5">
            {annotationDummyData.map((item) => (
              <div key={item.id} className="grid grid-cols-[70px_80px_1fr_1fr_100px_80px] gap-10 text-[14px] mx-5">
                <span>{item.name}</span>
                <span className="text-[#5FB995]">{item.location}</span>
                <span>{item.correction}</span>
                <span className="w-[300px] truncate">{item.content}</span>
                <div>
                  <Switch />
                </div>
                <div className="flex justify-center">
                  <div className="flex gap-2">
                  <button className="text-[#8D8D8D] text-[14px]">
                    <SlNote />
                  </button>
                  <button className="text-[#A30D11] text-[14px]">
                    <LuTrash2 />
                  </button>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
