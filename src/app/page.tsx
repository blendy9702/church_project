"use client";

import {
  MainBarLabel,
  MainCharts,
  MainCounts,
  MainInteractiveChart,
  MainShadcnChart,
} from "@/components/main_page/main_components";

const page = () => {
  return (
    <div className="m-auto max-w-[1320px]">
      <div className="bg-gray-100/15 m-auto px-5">
        <div className="grid grid-cols-1 gap-5">
          <MainCounts />
          <MainCharts />
          <MainBarLabel />
          <MainShadcnChart />
          <MainInteractiveChart />
        </div>
      </div>
    </div>
  );
};

export default page;
