"use client";

import { Edit1, Edit2 } from "@/components/edit/edit";
import { WriteEdit } from "./writeEdit";
import { useState } from "react";

export default function ArticlePage() {
  const [showWriteEdit, setShowWriteEdit] = useState(false);

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
            <h2 className="text-[20px] font-[700] text-[#000000]">글 작성</h2>
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
