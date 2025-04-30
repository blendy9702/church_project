import { useRef, useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import SlideCard from "./slide_card";

export function Section1() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const cardCount = 5;

  return (
    <div>
      {/* 첫번째 섹션 */}
      <div className="flex flex-col gap-4 justify-center items-center mt-[100px]">
        <span className="text-[48px] font-[700]">성경이야기 타임라인</span>
        {/* 커스텀 버튼 */}
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className={`w-[44px] h-[44px] rounded-full flex justify-center items-center transition
                ${
                  isBeginning
                    ? "bg-[#F3F3F3] opacity-30"
                    : "bg-[#F3F3F3] cursor-pointer"
                }`}
            disabled={isBeginning}
          >
            <HiArrowSmallRight className="text-[28px] rotate-180" />
          </button>
          <button
            ref={nextRef}
            className={`w-[44px] h-[44px] rounded-full flex justify-center items-center transition
                ${
                  isEnd
                    ? "bg-[#F3F3F3] opacity-30"
                    : "bg-[#F3F3F3] cursor-pointer"
                }`}
            disabled={isEnd}
          >
            <HiArrowSmallRight className="text-[28px]" />
          </button>
        </div>

        {/* 스와이퍼 */}
        <Swiper
          modules={[Navigation, Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          slidesPerView={4}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();

              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="max-w-[1000px]"
        >
          {[...Array(cardCount)].map((_, index) => (
            <SwiperSlide key={index}>
              <SlideCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export function Section2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const cardCount = 8;

  return (
    <div>
      {/* 두번째 섹션 */}
      <div className="flex flex-col gap-4 justify-center items-center mt-[100px]">
        <div className="flex">
          <span className="text-[48px] font-[700]">개혁주의 교리</span>
          <span className="text-[#5FB995] font-[700] mt-3">개혁주의란?</span>
        </div>
        {/* 커스텀 버튼 */}
        <div className="flex gap-2">
          <button
            ref={prevRef}
            className={`w-[44px] h-[44px] rounded-full flex justify-center items-center transition
                ${
                  isBeginning
                    ? "bg-[#F3F3F3] opacity-30"
                    : "bg-[#F3F3F3] cursor-pointer"
                }`}
            disabled={isBeginning}
          >
            <HiArrowSmallRight className="text-[28px] rotate-180" />
          </button>
          <button
            ref={nextRef}
            className={`w-[44px] h-[44px] rounded-full flex justify-center items-center transition
                ${
                  isEnd
                    ? "bg-[#F3F3F3] opacity-30"
                    : "bg-[#F3F3F3] cursor-pointer"
                }`}
            disabled={isEnd}
          >
            <HiArrowSmallRight className="text-[28px]" />
          </button>
        </div>

        {/* 스와이퍼 */}
        <Swiper
          modules={[Navigation, Scrollbar]}
          scrollbar={{ draggable: true }}
          spaceBetween={20}
          slidesPerView={4}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();

              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className="max-w-[1000px]"
        >
          {[...Array(cardCount)].map((_, index) => (
            <SwiperSlide key={index}>
              <SlideCard id={`slide-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
