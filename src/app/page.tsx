"use client";

import { Section1, Section2 } from "@/components/slide/sections";
import "swiper/css";
import "swiper/css/scrollbar";

const Page = () => {
  return (
    <div className="w-[1200px] mx-auto">
      <div className="w-full flex flex-col justify-center items-center mb-[100px]">
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

export default Page;
