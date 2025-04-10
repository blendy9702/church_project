import {
  ChartBarLabel,
  CustomLineChart,
  InteractiveChart,
  InteractiveChartSM,
  LineChartLabel,
  MultipleLineChart,
  RadialChart,
  ShadcnChart,
} from "@/components/chart/charts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Counting } from "@/components/anime/animes";

export const MainCounts = () => {
  const statusData = [1, 2, 3, 4];
  return (
    <div>
      <div className="flex justify-center items-center gap-5 mt-5">
        {/* 데스크탑 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 w-full">
          {statusData.map((item, index) => {
            const dashboardInfo = [
              { title: "대시보드 1" },
              { title: "대시보드 2" },
              { title: "대시보드 3" },
              { title: "대시보드 4" },
            ][index];

            return (
              <div
                key={index}
                className="bg-white/70 rounded-[12px] shadow-sm w-full"
              >
                <div className="p-2">
                  <div className="flex text-[#1e1e1e] text-[16px] font-bold">
                    <div>
                      <div>{dashboardInfo.title}</div>
                      <div className="flex justify-center items-center w-full">
                        <Counting dashboardId={index} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const MainCharts = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-lg:hidden lg:grid grid-cols-4 justify-center items-center gap-5">
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <CustomLineChart />
        </div>
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <MultipleLineChart />
        </div>
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <LineChartLabel />
        </div>
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <MultipleLineChart />
        </div>
      </div>

      <div className="max-md:hidden lg:hidden grid grid-cols-3 justify-center items-center gap-5">
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <CustomLineChart />
        </div>
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <MultipleLineChart />
        </div>
        <div className="bg-white/70 w-full rounded-[12px] shadow-sm">
          <CustomLineChart />
        </div>
      </div>

      {/* 모바일 스와이퍼 */}
      <div className="max-sm:hidden md:hidden w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          style={{ marginLeft: 0, paddingBottom: 5 }}
        >
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <CustomLineChart />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <MultipleLineChart />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <CustomLineChart />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 모바일 스와이퍼 2 */}
      <div className="sm:hidden w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-[768px]"
          modules={[Navigation, Pagination]}
          style={{ marginLeft: 0, paddingBottom: 5 }}
        >
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <CustomLineChart />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <MultipleLineChart />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <CustomLineChart />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export const MainBarLabel = () => {
  const chartData = [1, 2, 3, 4];
  return (
    <>
      <div className="max-lg:hidden flex justify-center items-center gap-5">
        {chartData.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 rounded-[12px] shadow-sm"
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
                  <RadialChart />
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="">
                <div className="flex justify-center items-center w-full">
                  <ChartBarLabel />
                </div>
              </div>
            )}
            {index === 3 && (
              <div className="">
                <div className="flex justify-center items-center w-full">
                  <ChartBarLabel />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* lg 파이차트 */}
      <div className="max-md:hidden lg:hidden grid grid-cols-3 justify-center items-center gap-5">
        {chartData.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 rounded-[12px] shadow-sm"
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
                  <ChartBarLabel />
                </div>
              </div>
            )}
            {index === 2 && (
              <div className="">
                <div className="flex justify-center items-center w-full">
                  <ChartBarLabel />
                </div>
              </div>
            )}
            {/* {index === 3 && (
              <div className="">
                <div className="flex justify-center items-center w-full">
                  <ChartBarLabel />
                </div>
              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* md 파이차트 */}
      {/* 모바일 스와이퍼 */}
      <div className="max-sm:hidden md:hidden w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          pagination={{ clickable: true }}
          className="max-w-[768px]"
          modules={[Navigation, Pagination]}
          style={{ marginLeft: 0, paddingBottom: 5 }}
        >
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ChartBarLabel />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ChartBarLabel />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ChartBarLabel />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* 모바일 스와이퍼 2 */}
      <div className="sm:hidden w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-[768px]"
          modules={[Navigation, Pagination]}
          style={{ marginLeft: 0, paddingBottom: 5 }}
        >
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ChartBarLabel />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ChartBarLabel />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ChartBarLabel />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export const MainShadcnChart = () => {
  return (
    <div className="flex justify-center items-center gap-5 mb-5">
      <div className="bg-white/70 w-full rounded-[12px] shadow-sm max-md:hidden">
        <ShadcnChart />
      </div>
      <div className="bg-white/70 w-full rounded-[12px] shadow-sm max-md:hidden">
        <ShadcnChart />
      </div>

      {/* 모바일 스와이퍼 */}
      <div className="md:hidden w-full">
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-[768px]"
          modules={[Navigation, Pagination]}
          style={{ marginLeft: 0, paddingBottom: 30 }}
        >
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ShadcnChart />
            </div>
          </SwiperSlide>
          <SwiperSlide style={{ maxWidth: "100%" }}>
            <div className="bg-white/70 rounded-[12px] shadow-sm">
              <ShadcnChart />
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <div className="bg-white/70 w-full h-[230px] rounded-[12px] shadow-sm md:hidden">
        <ShadcnChart />
      </div> */}
      </div>
    </div>
  );
};

export const MainInteractiveChart = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-sm:hidden bg-white/70 w-full rounded-[12px] shadow-sm">
        <InteractiveChart />
      </div>
      <div className="sm:hidden w-full">
        <InteractiveChartSM />
      </div>
    </div>
  );
};
