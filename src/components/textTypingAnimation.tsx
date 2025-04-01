"use client";
import { TypeAnimation } from "react-type-animation";

export default function TextTypingAnimation() {
  return (
    <div
      className={
        "flex flex-col items-center justify-between p-4 text-[#046799]"
      }
    >
      <span className={"text-3xl sm:text-4xl md:text-5xl font-bold p-1"}>
        IEEE
      </span>
      <span
        className={
          "text-2xl sm:text-3xl md:text-4xl font-light italic tracking-tight p-1"
        }
      >
        collaborates
      </span>
      <TypeAnimation
        sequence={[
          "TECHNOLOGY",
          1000,
          "TECHNOLOGY INNOVATION",
          1000,
          "TECHNOLOGY INNOVATION HUMANITY",
          1000,
        ]}
        preRenderFirstString={false}
        wrapper="span"
        cursor={true}
        speed={25}
        deletionSpeed={50}
        className={"text-[12px] md:text-2xl lg:text-3xl font-extralight pt-1"}
      />
    </div>
  );
}
