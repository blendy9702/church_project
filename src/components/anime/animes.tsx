"use client";

import anime from "animejs";
import { useEffect } from "react";

interface CountingProps {
  targetDelay: number;
}

export default function Counting({ targetDelay }: CountingProps) {
  useEffect(() => {
    anime({
      targets: `.dom-attribute-demo-input-${targetDelay}`,
      value: [0, 1000],
      round: 1,
      easing: "easeInOutSine",
      duration: 1500,
      delay: targetDelay,
    });
  }, [targetDelay]);

  return (
    <div className="flex justify-center items-center text-[20px] font-bold">
      <input
        className={`flex justify-center items-center w-full dom-attribute-demo-input-${targetDelay}`}
        defaultValue="0"
      />
    </div>
  );
}
