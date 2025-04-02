"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

interface Slide {
  imageSrc: string;
  imageAlt: string;
  text: string;
  name: string;
  title: string;
}

const slides: Slide[] = [
  {
    imageSrc: "/images/abdullahsaki.jpg",
    imageAlt: "image",
    text: "Always hang-out with people smarter than you” – AIUB SB is a pack of smart volunteers with myriad of expertise. Unwavering dedication, engaging activities and persistent drive for excellence set them apart. They are an exemplary student branch not only in Bangladesh but also in the Region 10. Wish they will evolve continually into new heights.",
    name: "Abdullah A.S.H. Saki, Ph.D; ",
    title:
      "Researcher @ IBM Quantum. Former Student Activities Coordinator, IEEE Bangladesh Section",
  },
  {
    imageSrc: "/images/farahnazifa.jpg",
    imageAlt: "Farah Nazifa",
    text: "I really appreciate the efforts coming from the enthusiastic IEEE AIUB Student Branch volunteers who worked together to make the event of Women Techmakers a successful one. In the near future, we are looking forward to organize more events at your wonderful campus! Best wishes!",
    name: "Farah Nazifa",
    title: "Lead, Google Women Techmakers Bangladesh",
  },
  {
    imageSrc: "/images/justinespack.jpg",
    imageAlt: "image",
    text: "Congratulations to all of the members of the IEEE AIUB Student Branch! I love reading about all of your achievements in Abozzo. I enjoy reading about the awards you’ve won and the activities you hold like industrial tours, the FREEDM Concept seminar, and STEM events for children. I wish you the best of luck and continued success in your efforts!",
    name: "Justine Spack",
    title:
      "Online Community Specialist, IEEE Member and Geographic Activities (MGA), Big Media Co",
  },
  {
    imageSrc: "/images/mahvishzahoor.jpg",
    imageAlt: "image",
    text: "It’s an honour to write for AIUB.It was great visiting biggest student branch of Bangladesh section in 2015. I believe the AIUB Student Branch is setting an exemplary role in R10 in terms of teamwork, motivation, volunteering, commitment and innovation.I look forward to the branch team to continue their devotion in raising the bar everyday.",
    name: "Mehvish Zahoor",
    title:
      "Former Regional Student Representative(RSR), IEEE Region 10(Asia- Pacific)",
  },
  {
    imageSrc: "/images/sarangshaikh.jpg",
    imageAlt: "image",
    text: "I have known IEEE people from AIUB SB since 2013. I have always seen this branch creating not just amazing IEEE volunteer/leaders but also great human beings. AIUB is not just a SB, its a process that takes an average student and shape them into a responsible citizen by creating interest for both engineering and community development. I have always been a fan, follower and a supporter to AIUB and I feel really honored when I happen to get chance to assist or guide them with any IEEE related decision. Wish AIUB and its amazing people all the very best for their personal and mutual endeavors.",
    name: "Sarang Shaikh",
    title: "Founder, Humans of IEEE (HOIEEE)",
  },
];

export default function Testimonials() {
  return (
    <>
      <h1 className="mt-1 text-3xl font-extrabold text-sky-800 md:text-3xl lg:text-4xl sm:tracking-tight text-center">
        What They Say
      </h1>
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        className="mySwiper h-auto"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="!h-auto grid place-items-center">
            <div className="overflow-hidden bg-white h-full">
              <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-8 lg:py-20 h-full">
                <div className="relative lg:flex lg:items-center">
                  <div className="hidden lg:block lg:flex-shrink-0">
                    <img
                      className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                    />
                  </div>

                  <div className="relative h-full lg:ml-10">
                    <blockquote className="h-full">
                      <div className="text-justify lg:text-base font-medium leading-9 text-gray-500 h-full">
                        <p>{slide.text}</p>
                      </div>
                      <footer className="mt-8">
                        <div className="flex">
                          <div className="flex-shrink-0 lg:hidden">
                            <img
                              className="h-12 w-12 rounded-full"
                              src={slide.imageSrc}
                              alt={slide.imageAlt}
                            />
                          </div>
                          <div className="ml-4 lg:ml-0">
                            <div className="text-xl font-bold text-gray-800">
                              {slide.name}
                            </div>
                            <div className="text-base font-medium text-amber-600">
                              {slide.title}
                            </div>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
