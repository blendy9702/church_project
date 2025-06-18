import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { majorCategory, minorCategory, subCategory } from "@/data/dummyData";

export function Edit1() {
  const [selectedMajor, setSelectedMajor] = useState<number | null>(null);
  const [selectedMinor, setSelectedMinor] = useState<number | null>(null);
  const [selectedSub, setSelectedSub] = useState<number | null>(null);

  const filteredMinorCategories = minorCategory.filter(
    (category) => category.majorId === selectedMajor
  );

  const filteredSubCategories = subCategory.filter(
    (category) => category.minorId === selectedMinor
  );

  return (
    <>
      <div className='flex justify-between items-center mt-2'>
        <div className='text-[20px] font-[700] text-[#000000]'>
          성경 타임라인 카테고리 편집
        </div>
        <button className='bg-[#5FB995] text-white text-[16px] font-[700] px-5 py-1 rounded-full cursor-pointer'>
          확인
        </button>
      </div>
      <div className='border-1 w-full h-[584px] border-[#D6D6D6] rounded-[10px] mt-4 bg-[#ffffff]'>
        <div className='grid grid-cols-3 gap-4 p-4'>
          <div className=''>
            {/* 대분류 */}
            <div className='flex justify-between items-center'>
              <span className='text-[24px] font-[700] text-[#000000]'>
                대분류
              </span>
              <button className='w-[38px] h-[27px] bg-[#5FB995] rounded-full flex items-center justify-center cursor-pointer'>
                <FaPlus className='text-[#FFFFFF] text-[14px]' />
              </button>
            </div>
            <div className='border-1 w-full h-[488px] border-[#D6D6D6] rounded-[10px] mt-4 p-2 overflow-y-auto'>
              {majorCategory.map((category) => (
                <div
                  key={category.id}
                  className={`p-3 mb-2 rounded-[10px] bg-[#fafafa] cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis ${
                    selectedMajor === category.id
                      ? "!bg-[#5FB995] text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    setSelectedMajor(category.id);
                    setSelectedMinor(null);
                    setSelectedSub(null);
                  }}
                >
                  {category.title}
                </div>
              ))}
            </div>
          </div>
          <div className=''>
            {/* 중분류 */}
            <div className='flex justify-between items-center'>
              <span className='text-[24px] font-[700] text-[#000000]'>
                중분류
              </span>
              <button className='w-[38px] h-[27px] bg-[#5FB995] rounded-full flex items-center justify-center cursor-pointer'>
                <FaPlus className='text-[#FFFFFF] text-[14px]' />
              </button>
            </div>
            <div className='border-1 w-full h-[488px] border-[#D6D6D6] rounded-[10px] mt-4 p-2 overflow-y-auto'>
              {selectedMajor &&
                filteredMinorCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-3 mb-2 rounded-[10px] bg-[#fafafa] cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis ${
                      selectedMinor === category.id
                        ? "!bg-[#5FB995] text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      setSelectedMinor(category.id);
                      setSelectedSub(null);
                    }}
                  >
                    {category.title}
                  </div>
                ))}
            </div>
          </div>
          <div className=''>
            {/* 소분류 */}
            <div className='flex justify-between items-center'>
              <span className='text-[24px] font-[700] text-[#000000]'>
                소분류
              </span>
              <button className='w-[38px] h-[27px] bg-[#5FB995] rounded-full flex items-center justify-center cursor-pointer'>
                <FaPlus className='text-[#FFFFFF] text-[14px]' />
              </button>
            </div>
            <div className='border-1 w-full h-[488px] border-[#D6D6D6] rounded-[10px] mt-4 p-2 overflow-y-auto'>
              {selectedMinor &&
                filteredSubCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-3 mb-2 rounded-[10px] bg-[#fafafa] cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis ${
                      selectedSub === category.id
                        ? "!bg-[#5FB995] text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedSub(category.id)}
                  >
                    {category.title}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function Edit2() {
  return (
    <>
      <div className='flex justify-between items-center mt-4'>
        <div className='text-[20px] font-[700] text-[#000000]'>
          개혁주의 교리 카테고리 편집
        </div>
        {/* <button className="bg-[#5FB995] text-white text-[16px] font-[700] px-5 py-1 rounded-full cursor-pointer">
          확인
        </button> */}
      </div>
      <div className='border-1 w-full h-[584px] border-[#D6D6D6] rounded-[10px] mt-4 bg-[#ffffff]'>
        <div className='grid grid-cols-3 gap-4 p-4'>
          <div className=''>
            {/* 대분류 */}
            <div className='flex justify-between items-center'>
              <span className='text-[24px] font-[700] text-[#000000]'>
                대분류
              </span>
              <button className='w-[38px] h-[27px] bg-[#5FB995] rounded-full flex items-center justify-center cursor-pointer'>
                <FaPlus className='text-[#FFFFFF] text-[14px]' />
              </button>
            </div>
            <div className='border-1 w-full h-[488px] border-[#D6D6D6] rounded-[10px] mt-4'></div>
          </div>
          <div className=''>
            {/* 중분류 */}
            <div className='flex justify-between items-center'>
              <span className='text-[24px] font-[700] text-[#000000]'>
                중분류
              </span>
              <button className='w-[38px] h-[27px] bg-[#5FB995] rounded-full flex items-center justify-center cursor-pointer'>
                <FaPlus className='text-[#FFFFFF] text-[14px]' />
              </button>
            </div>
            <div className='border-1 w-full h-[488px] border-[#D6D6D6] rounded-[10px] mt-4'></div>
          </div>
          <div className=''>
            {/* 소분류 */}
            <div className='flex justify-between items-center'>
              <span className='text-[24px] font-[700] text-[#000000]'>
                소분류
              </span>
              <button className='w-[38px] h-[27px] bg-[#5FB995] rounded-full flex items-center justify-center cursor-pointer'>
                <FaPlus className='text-[#FFFFFF] text-[14px]' />
              </button>
            </div>
            <div className='border-1 w-full h-[488px] border-[#D6D6D6] rounded-[10px] mt-4'></div>
          </div>
        </div>
      </div>
    </>
  );
}
