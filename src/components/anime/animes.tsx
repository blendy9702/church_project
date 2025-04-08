"use client";

import {
  animate,
  createDraggable,
  createScope,
  createTimer,
  utils,
} from "animejs";
import { useEffect } from "react";

interface CountingProps {
  dashboardId: number;
}

export const Counting = ({ dashboardId }: CountingProps) => {
  useEffect(() => {
    const $time = document.querySelector(
      `.time-${dashboardId}`
    ) as HTMLElement;

    createTimer({
      duration: 1000,
      delay: 500,
      onUpdate: (move) => {
        if ($time) {
          $time.innerHTML = move.currentTime.toLocaleString();
        }
      },
    });
  }, [dashboardId]);

  return (
    <div className="time-container">
      <span className={`time-${dashboardId}`}>0</span>
    </div>
  );
};

export const FontAnime = () => {
  useEffect(() => {
    animate(".animated-text", {
      y: [
        { to: "-20px", ease: "outExpo", duration: 600 },
        { to: 0, ease: "outBounce", duration: 800, delay: 100 },
      ],
      rotate: {
        from: "-1turn",
        delay: 0,
      },
      delay: (_, i) => i * 50,
      ease: "inOutCirc",
      loopDelay: 2000,
      loop: true,
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <span className="animated-text ml-[20px] text-[20px] text-[#e95757]">
        이곳은
      </span>
      <span className="animated-text ml-[5px] text-[20px] text-[#40d1d6]">
        무슨
      </span>
      <span className="animated-text ml-[5px] text-[20px] text-[#7233d8]">
        자리일까?
      </span>
    </div>
  );
};

export const TestBall = () => {
  useEffect(() => {
    createScope({
      mediaQueries: { isSmall: "(max-width: 200px)" },
      defaults: { ease: "linear" },
    }).add((self) => {
      const { isSmall } = self.matches;
      const [$square] = utils.$(".square");

      if (self.matches.isSmall) {
        animate($square, {
          rotate: 360,
          loop: true,
        });
      } else {
        $square.classList.add("draggable");
        createDraggable($square, {
          container: document.body,
        });
      }

      return () => {
        $square.classList.remove("draggable");
      };
    });
  }, []);
  return (
    <div className="square max-md:hidden">
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-[50%]  bg-gradient-to-tr from-[#bee8fa] via-[#4f86da] to-[#62d4f7] shadow-md">
        <span className=" text-[#1e1e1e] text-[16px] font-bold">
          잡기
        </span>
      </div>
    </div>
  );
};
