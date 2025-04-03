"use client";

import Counting from "@/components/anime/animes";
import {
  ChartBarLabel,
  PieChartDonut,
  ShadcnChart,
} from "@/components/chart/charts";

const page = () => {
  const statusData = [1, 2, 3, 4];
  const chartData = [1, 2, 3, 4];

  return (
    <div className="m-auto">
      <div className="bg-gray-100/15 m-auto px-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-5 mt-5">
            {statusData.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 w-[230px] h-[70px] rounded-[12px]"
              >
                <div className="p-2">
                  <div className="flex text-[#1e1e1e] text-[16px] font-bold">
                    {index === 0 && (
                      <div className="">
                        <div className="text-[16px]">대시보드 1</div>
                        <div className="flex justify-center items-center w-full">
                          <Counting targetDelay={200} />
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div>
                        <div>대시보드 2</div>
                        <div className="flex justify-center items-center w-full">
                          <Counting targetDelay={300} />
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div>
                        <div>대시보드 3</div>
                        <div className="flex justify-center items-center w-full">
                          <Counting targetDelay={500} />
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div>
                        <div>대시보드 4</div>
                        <div className="flex justify-center items-center w-full">
                          <Counting targetDelay={600} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="bg-white/70 w-[480px] h-[160px] rounded-[12px]"></div>
            <div className="bg-white/70 w-[480px] h-[160px] rounded-[12px]"></div>
          </div>
          <div className="flex justify-center items-center gap-5">
            {chartData.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 w-[230px] h-[230px] rounded-[12px]"
              >
                {index === 0 && (
                  <div className="">
                    <div className="flex justify-center items-center w-full">
                      <ChartBarLabel />
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="">
                    <div className="flex justify-center items-center w-full">
                      <PieChartDonut />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-5 mb-5">
            <div className="bg-white/70 w-[480px] h-[230px] rounded-[12px]">
              <ShadcnChart />
            </div>
            <div className="bg-white/70 w-[480px] h-[230px] rounded-[12px]">
              {/* <CustomPieChart /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
