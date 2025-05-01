"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Globe, GraduationCap, Newspaper } from "lucide-react";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-embs";

const benefits = [
  {
    name: "Technical Community",
    description:
      "IEEE Engineering in Medicine and Biology Society (EMBS) provides a vibrant technical community where professionals in the field of biomedical engineering connect, collaborate, and share knowledge. Through conferences, workshops, and online forums, members stay updated on the latest advancements, exchange ideas, and contribute to the growth of this interdisciplinary field.",
    icon: Globe,
  },
  {
    name: "Career Development",
    description:
      "EMBS offers valuable resources for career development, including job boards, mentoring programs, and professional networking opportunities. Members can access career guidance, find job openings, and connect with experienced mentors to enhance their skills and advance in their biomedical engineering careers.",
    icon: GraduationCap,
  },
  {
    name: "Research and Publications",
    description:
      "EMBS supports and promotes research in biomedical engineering through its publications, such as journals, magazines, and conference proceedings. Researchers can disseminate their work to a wide audience, gain recognition for their contributions, and stay informed about the latest research trends and findings in the field.",
    icon: Newspaper,
  },
];

function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20" data-aos="fade-up">
      <div>
        <h1 className="text-center mt-1 text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-5xl">
          What is IEEE EMBS?
        </h1>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          The IEEE Engineering in Medicine and Biology Society (EMBS) is a global leader in advancing the application of engineering to medicine and biology. EMBS unites researchers, professionals, and students to innovate at the intersection of technology and healthcare, driving breakthroughs in biomedical engineering. From developing cutting-edge medical devices to advancing health informatics, EMBS provides a platform for collaboration and knowledge sharing to improve global healthcare outcomes.
        </p>
      </div>
      <div className="p-8 flex flex-col items-center justify-center text-center" data-aos="zoom-in">
        <Image src="/images/EMBS-logo.png" alt="IEEE EMBS Logo" width={300} height={200} className="w-auto h-auto max-w-full" />
        
        <div className="flex gap-10">
          <Link href={"/membership"}>
            <Button className="mt-4 w-28 bg-purple-700 text-white hover:bg-purple-900 cursor-pointer">Join Us</Button>
          </Link>
          <a href="https://embs.org" className="text-base font-semibold mt-4 leading-7 text-purple-700">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1200 878" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#blue-purple-gradient)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="blue-purple-gradient" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563eb" />
              <stop offset={1} stopColor="#7c3aed" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Conference() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up">
      <div className="relative group w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-blue-400 via-blue-100 to-purple-900 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image src="/images/conference-embs.jpg" alt="Conferences" fill className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Conferences & Events</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
        The IEEE EMBS organizes a wide range of conferences and events that play a crucial role in advancing the field of biomedical engineering. These gatherings provide a platform for researchers, practitioners, and industry experts to exchange knowledge, present their latest findings, and foster collaborations. EMBC, the annual conference of the Society is designed as a general topic conference with multiple technical themes. We have a vibrant student and young professional (post grad) participation in the General Conference. Attendees range from high school students to senior industry and academic researchers. EMB Special Topic Conferences are designed to create a high quality, technological event with leading technology experts. Attendees range from graduate students to senior industry and academic researchers. All EMBS Conference Proceedings are published in IEEE Xplore, a digital library of the IEEE. EMBS also co-sponsors events with other IEEE Societies. Additionally, several Conference Proceedings of EMBS Conferences are indexed in Medline/PUBmed, Elsevier (Compendex, ScienceDirect and Scopus), Google Scholar, INSPEC, CiteSeerX and Web of Science.
        </p>
        <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-900">Learn More</Button>
      </div>
    </div>
  );
}

function Publication() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up">
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Publications</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
        IEEE EMBS offers a range of prestigious publications that cover diverse areas of biomedical engineering and healthcare technology and is regarded as the leading publisher of original research in biomedical engineering. We have 11 technical journals and transactions, including the award-winning IEEE PULSE Magazine, which attracts a broad readership, with its general and technical articles.
        </p>
        <Button className="mt-4 bg-purple-600 text-white hover:bg-purple-700">Learn More</Button>
      </div>
      <div className="relative group w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-blue-400 via-blue-100 to-purple-900 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image src="/images/publications-embs.jpg" alt="Publications" fill className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-purple-800">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-black">Embark on a journey of limitless possibilities.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-blue-100">
          Explore the frontiers of biomedical engineering, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a href="/membership" className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-50 py-3 px-5 text-base font-medium text-blue-700 hover:bg-blue-100 sm:w-auto">
          Join Us
        </a>
      </div>
    </div>
  );
}

function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={benefits} />
    </div>
  );
}

function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="zoom-out-left">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-blue-700">Benefits</h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-700 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Engineering in Medicine and Biology Society?
          </h1>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Joining IEEE EMBS opens doors to a world of opportunities in biomedical engineering. As a member, you gain access to a vibrant global community of researchers, professionals, and students, fostering collaboration and idea exchange. Stay updated with cutting-edge innovations, advance your career, and contribute to shaping the future of healthcare technology.
          </p>
        </div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default function EmbsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 sm:px-10 md:px-16 lg:px-32">
      <Description />
      <Conference />
      <Publication />
      <Benefits />
      <JoinUs />
    </div>
  );
}