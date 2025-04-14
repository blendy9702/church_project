"use client";

import {
  animate,
  createDraggable,
  createScope,
  createSpring,
  createTimer,
  utils,
  type Scope,
} from "animejs";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

export const TestTimer1 = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    createTimer({
      delay: 1000,
      onUpdate: (self) => {
        setTime(self.currentTime);
      },
    });
  }, []);
  return (
    <div className="">
      <div className="time text-[20px]">
        현재 수익 : {time.toLocaleString()}$
      </div>
    </div>
  );
};

export const TestTimer2 = () => {
  const [time, setTime] = useState(0);
  const [loops, setLoops] = useState(0);

  useEffect(() => {
    createTimer({
      loop: true,
      duration: 1000,
      alternate: true,
      onUpdate: (self) => {
        setTime(self.iterationCurrentTime);
      },
      onLoop: () => {
        setLoops((prevLoops) => prevLoops + 1);
      },
    });
  }, []);

  return (
    <div className="time text-[20px]">
      주가 변동 : {time.toLocaleString()}$
      <br />
      나의 배당금 : {loops.toLocaleString()}$
    </div>
  );
};

export const TestTimer3 = () => {
  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(0);

  const timer = createTimer({
    onPause: () => setPaused((prevPaused) => prevPaused + 1),
    onUpdate: (self) => setTime(self.currentTime),
  });

  const pauseTimer = () => timer.pause();
  const resumeTimer = () => timer.resume();

  const $resumeButton = document.getElementById("resumeButton");
  const $pauseButton = document.getElementById("pauseButton");

  $resumeButton?.addEventListener("click", resumeTimer);
  $pauseButton?.addEventListener("click", pauseTimer);

  return (
    <div className="time text-[20px]">
      현재 주가 : {time.toLocaleString()}$
      <br />
      주가 조작 : {paused.toLocaleString()}$
      <button id="resumeButton">재개</button>
      <button id="pauseButton">일시정지</button>
    </div>
  );
};

export const TestImg = () => {
  const root = useRef(null);
  const scope = useRef<Scope | null>(null);
  const [rotations, setRotations] = useState(0);

  useEffect(() => {
    scope.current = createScope({ root }).add((scope) => {
      animate(".nicely", {
        scale: [
          { to: 1.2, ease: "inOut(3)", duration: 200 },
          { to: 1, ease: createSpring({ stiffness: 300 }) },
        ],
        loop: true,
        loopDelay: 250,
      });

      createDraggable(".nicely", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      scope.add("rotateLogo", (i) => {
        animate(".nicely", {
          rotate: i * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    return () => {
      if (scope.current) {
        scope.current.revert();
      }
    };
  }, []);

  const handleClick = () => {
    const i = rotations + 1;
    setRotations(i);
    if (scope.current) {
      scope.current.methods.rotateLogo(i);
    }
  };

  return (
    <div
      ref={root}
      className="flex flex-col items-center justify-center"
    >
      <div className="large centered row">
        <Image
          src={"/nicely.png"}
          className="nicely"
          alt="nicely"
          width={200}
          height={200}
        />
      </div>
      <div className="medium row my-8">
        <fieldset className="controls">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-[12px] cursor-pointer"
            onClick={handleClick}
          >
            돌려볼까? : {rotations} 번 공중제비!
          </button>
        </fieldset>
      </div>
    </div>
  );
};
