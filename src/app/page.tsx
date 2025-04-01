import IeeeAiubSbTextArt from "@/components/IeeeAiubSbTextArt";
import { ImageSlideshow } from "@/components/image-slideshow";
import TextTypingAnimation from "@/components/textTypingAnimation";
import TriangleArt from "@/components/triangleArt";
import LogoCloud from "@/components/logoClouds";
import Feature from "@/components/feature";
import WhoCanJoin2 from "@/components/whoCanJoin2";
import UpcomingEvents from "@/components/upcomingEvent";

export default function Home() {
  const images = ["./images/spave6.0.jpg", "./images/ieeeday2023.jpg"];
  return (
    <>
      <div className={"container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"}>
        {/*svg*/}
        <div
          className={"absolute -inset-x-9 w-full h-full -z-10 md:-inset-18 "}
        >
          <TriangleArt />
        </div>
        {/*type animation*/}
        <div className={`relative`}>
          <TextTypingAnimation />
          <ImageSlideshow
            images={images}
            interval={5000}
            className="mx-auto max-w-6xl shadow-xl"
          />
          {/*Mission vision section*/}
          {/*<MissionVision />*/}

          {/*IEEE AIUB Student Branch*/}
          <Feature />

          <LogoCloud />

          {/*Who can Join section*/}
          <WhoCanJoin2 />
          {/*<WhoCanJoin />*/}
          {/*Events*/}
          <UpcomingEvents />
          <div className={"p-4 flex flex-col items-center justify-center"}>
            {/*<span*/}
            {/*  className={*/}
            {/*    "text-4xl sm:text-4xl md:text-5xl text-sky-800 font-bold p-4"*/}
            {/*  }*/}
            {/*>*/}
            {/*  Infographics*/}
            {/*</span>*/}
            {/*<MyTabGroup />*/}
            <IeeeAiubSbTextArt />
          </div>
        </div>
      </div>
    </>
  );
}
