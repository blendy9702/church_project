import { FaChevronDown } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div>
      <div className="bg-gray-200 h-full w-[200px]">
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-2 p-3 cursor-pointer">
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              대시보드</div>
          </div>
          <div className="bg-red-400 flex justify-center items-center gap-2 p-3 cursor-pointer relative">
            <div className="text-[#1e1e1e] text-[16px] font-bold ">무슨무슨 탭</div>
            <div className="absolute right-0 mr-4"><FaChevronDown className="text-[#1e1e1e] text-[16px]" /></div>
          </div>
          <div className="flex justify-center items-center gap-2 p-3 cursor-pointer">
            <div className="text-[#1e1e1e] text-[16px] font-bold">
              대시보드</div>
          </div>
        </div>
      </div>
    </div>
  );
}