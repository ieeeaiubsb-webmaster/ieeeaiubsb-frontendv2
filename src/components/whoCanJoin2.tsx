"use client";
import { VelocityScroll } from "./magicui/scroll-based-velocity";
import { LineShadowText } from "./magicui/line-shadow-text";

export default function WhoCanJoin2() {
  return (
    <div className={`grid grid-cols-2`}>
      <div className={`grid col-span-1`}>
        <p
          className={`text-5xl md:text-6xl lg:text-7xl font-extrabold text-sky-700`}
        >
          <LineShadowText className="" shadowColor={"black"}>
            WHO CAN JOIN IEEE?
          </LineShadowText>
        </p>
      </div>
      {/*<div className={``}>WHO CAN JOIN?</div>*/}
      <div className="grid row-span-2 relative flex w-full flex-col items-center justify-center overflow-hidden">
        <VelocityScroll
          defaultVelocity={2}
          numRows={1}
          className={`text-orange-600`}
        >
          FE EEE IPE COE
        </VelocityScroll>
        <VelocityScroll
          defaultVelocity={2}
          numRows={1}
          className={`text-sky-700`}
        >
          FST CSE CS
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </div>
  );
}
