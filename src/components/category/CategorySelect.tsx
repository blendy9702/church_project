"use client";

import { useState, useEffect } from "react";
import { majorCategory, minorCategory, subCategory } from "@/data/dummyData";

interface CategorySelectProps {
  onCategoryChange: (majorId: number, minorId: number, subId: number) => void;
}

export default function CategorySelect({
  onCategoryChange,
}: CategorySelectProps) {
  const [selectedMajor, setSelectedMajor] = useState<number | null>(null);
  const [selectedMinor, setSelectedMinor] = useState<number | null>(null);
  const [selectedSub, setSelectedSub] = useState<number | null>(null);

  const filteredMinorCategories = minorCategory.filter(
    (category) => category.majorId === selectedMajor
  );

  const filteredSubCategories = subCategory.filter(
    (category) => category.minorId === selectedMinor
  );

  useEffect(() => {
    if (selectedMajor && selectedMinor && selectedSub) {
      onCategoryChange(selectedMajor, selectedMinor, selectedSub);
    }
  }, [selectedMajor, selectedMinor, selectedSub, onCategoryChange]);

  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow'>
      <div className='flex flex-col gap-2'>
        <label className='text-sm font-medium text-gray-700'>대분류</label>
        <select
          className='p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
          value={selectedMajor || ""}
          onChange={(e) => {
            setSelectedMajor(Number(e.target.value));
            setSelectedMinor(null);
            setSelectedSub(null);
          }}
        >
          <option value=''>대분류를 선택하세요</option>
          {majorCategory.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {selectedMajor && (
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium text-gray-700'>중분류</label>
          <select
            className='p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={selectedMinor || ""}
            onChange={(e) => {
              setSelectedMinor(Number(e.target.value));
              setSelectedSub(null);
            }}
          >
            <option value=''>중분류를 선택하세요</option>
            {filteredMinorCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
      )}

      {selectedMinor && (
        <div className='flex flex-col gap-2'>
          <label className='text-sm font-medium text-gray-700'>소분류</label>
          <select
            className='p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
            value={selectedSub || ""}
            onChange={(e) => setSelectedSub(Number(e.target.value))}
          >
            <option value=''>소분류를 선택하세요</option>
            {filteredSubCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
