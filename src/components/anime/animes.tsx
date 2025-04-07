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
      update: (anim) => {
        const formattedValue =
          anim.animations[0].currentValue.toLocaleString();
        const inputElement = document.querySelector(
          `.dom-attribute-demo-input-${targetDelay}`
        ) as HTMLInputElement;
        if (inputElement) {
          inputElement.value = formattedValue;
        }
      },
    });
  }, [targetDelay]);

  return (
    <div className="flex justify-center items-center text-[20px] font-medium">
      <input
        className={`flex justify-center items-center w-full dom-attribute-demo-input-${targetDelay}`}
        defaultValue="0"
        disabled
      />
    </div>
  );
}
