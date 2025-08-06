"use client";

import { Edit1, Edit2 } from "@/components/edit/edit";
import { WriteEdit } from "./writeEdit";
import { useState } from "react";
import { majorCategory, minorCategory } from "@/data/dummyData";

export default function ArticlePage() {
  const [showWriteEdit, setShowWriteEdit] = useState(false);
  const [selectedMainCategory, setSelectedMainCategory] = useState<number | "">(
    ""
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | "">(
    ""
  );

  const getFilteredMinorCategories = () => {
    if (!selectedMainCategory) return [];
    return minorCategory.filter(
      (minor) => minor.majorId === selectedMainCategory
    );
  };

  const handleMainCategoryChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setSelectedMainCategory(value);
    setSelectedSubCategory(""); // 대분류 변경시 중분류 초기화
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setSelectedSubCategory(value);
  };

  const handleSubCategoryAdd = () => {
    setShowWriteEdit(true);
  };

  const handleCloseWriteEdit = () => {
    setShowWriteEdit(false);
  };

  if (showWriteEdit) {
    return (
      <div className="w-full max-w-[1200px]">
        <div className="flex flex-col justify-center py-3">
          <div className="flex justify-between items-center mb-4">
            {/* 대분류, 중분류 셀렉트 박스 */}
            <div className="flex gap-4 mb-6">
              <div className="flex flex-col relative">
                <select
                  value={selectedMainCategory}
                  onChange={handleMainCategoryChange}
                  className="w-[300px] h-[40px] pl-4 pr-3 py-2 border border-[#D6D6D6] rounded-[10px] text-[14px] focus:outline-none focus:border-[#5FB995] appearance-none bg-white cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 8l4 4 4-4' stroke='%23666' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                    backgroundSize: "16px 16px",
                  }}
                >
                  <option value="">대분류를 선택하세요</option>
                  {majorCategory.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col relative">
                <select
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  disabled={!selectedMainCategory}
                  className="w-[300px] h-[40px] pl-4 pr-3 py-2 border border-[#D6D6D6] rounded-[10px] text-[14px] focus:outline-none focus:border-[#5FB995] appearance-none bg-white cursor-pointer disabled:bg-[#F5F5F5] disabled:cursor-not-allowed"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M6 8l4 4 4-4' stroke='%23666' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 10px center",
                    backgroundSize: "16px 16px",
                  }}
                >
                  <option value="">중분류를 선택하세요</option>
                  {getFilteredMinorCategories().map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex gap-10">
              <button className="text-[16px] font-[700] text-[#000000] cursor-pointer">
                임시저장
              </button>
              <button className="text-[16px] font-[700] text-[#000000] cursor-pointer">
                미리보기
              </button>
              <button
                onClick={handleCloseWriteEdit}
                className="bg-[#5FB995] text-white text-[16px] font-[700] px-5 py-1 rounded-full cursor-pointer"
              >
                적용
              </button>
            </div>
          </div>

          <WriteEdit />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[1200px]">
      <div className="flex flex-col justify-center py-3">
        <Edit1 onSubCategoryAdd={handleSubCategoryAdd} />
        <Edit2 />
      </div>
    </div>
  );
}
