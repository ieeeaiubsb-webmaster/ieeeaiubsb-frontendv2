"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import {Users,Book,FileText,Globe,Newspaper,BarChart} from "lucide-react";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-ias";

const benefits = [
  {
    name: "Informative Meetings, Seminars and Conferences",
    description:
      "By personally attending chapter meetings, seminars, and regional, national, and international conferences—all of which can be found on the Events and Conferences page—you will have the chance to converse with the leading industry experts.",
    icon: Globe,
  },
  {
    name: "Valuable Professional Publications",
    description:
      "By supporting a variety of publications and journals within its technical specialty, IEEE IAS fosters the link between professional knowledge and practice. Working Groups are active throughout the Society, and the IAS is one of the major contributors to IEEE Standards.",
    icon: Newspaper,
  },
  {
    name: "Advance Your Industry",
    description:
      "An important benefit for IAS members is the chance to individually improve your industry. More than 25% of all IEEE technical standards are developed by committees within IAS. Four technical departments, each servicing a different industry sector, bring experts together to further the field’s objectives.",
    icon: BarChart,
  },
  {
    name: "Community of Professionals",
    description:
      "The benefits of being an IAS member go beyond what is discussed in technical journals or during conference sessions. It results from actively participating in a community of young and experienced engineers who are connected by a shared passion. It results from a network of business contacts and keeping abreast of developments in the industry.",
    icon: Users,
  },
];
function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20" data-aos="fade-up">
      <div>
        <h1 className="text-center mt-1 text-3xl font-extrabold bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-5xl">
          What is IEEE IAS?
        </h1>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          The IEEE Industry Applications Society (IAS) is a globally recognized community dedicated to advancing the application of electrical and electronic engineering in industry. IAS brings together professionals, researchers, and students to innovate and collaborate on technologies that power industrial systems, from automation to energy management. Through its events, publications, and resources, IAS fosters a culture of excellence and drives the development of sustainable industrial solutions for a better future.
        </p>
      </div>
      <div className="p-8 flex flex-col items-center justify-center text-center" data-aos="zoom-in">
        <img src="images/IAS-logo.png" alt="IEEE IAS Logo" className="w-auto h-auto max-w-full mb-9" />
        <div className="flex gap-10">
          <Link href={"/membership"}>
            <Button className="mt-4 w-28 bg-green-600 text-white hover:bg-green-900 cursor-pointer">Join Us</Button>
          </Link>
          <a href="https://ias.ieee.org" className="text-base font-semibold mt-4 leading-7 text-green-700">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1200 878" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#green-gradient)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="green-gradient" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stopColor="#16a34a" />
              <stop offset={1} stopColor="#22c55e" />
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
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-green-400 via-green-100 to-green-900 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image src="/images/conference-ias.jpg" alt="Conferences" fill className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Conferences & Events</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          IEEE IAS organizes impactful conferences and events that bring together experts in industrial applications to share knowledge and innovate. The IEEE IAS Annual Meeting is a flagship event, attracting professionals worldwide to discuss advancements in automation, energy systems, and industrial technologies.
        </p>
        <Button className="mt-4 bg-green-600 text-white hover:bg-green-900">Learn More</Button>
      </div>

    </div>
  );
}

function Publication() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up">
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Publications</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          IEEE IAS publishes leading journals and magazines, such as IEEE Transactions on Industry Applications, covering cutting-edge research in industrial technologies. Members gain access to a wealth of technical literature, including conference proceedings and industry-focused articles, to stay updated on the latest advancements.
        </p>
        <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">Learn More</Button>
      </div>
      <div className="relative group w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-green-400 via-green-100 to-green-900 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image src="/images/publications-ias.jpg" alt="Publications" fill className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-green-500 to-green-800">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-black">Embark on a journey of limitless possibilities.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-green-100">
          Explore the frontiers of industrial applications, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a href="/membership" className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-50 py-3 px-5 text-base font-medium text-green-700 hover:bg-green-100 sm:w-auto">
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
function Education() {
  return (
  <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-8 min-h-[80vh]">

      <div className="w-full md:w-1/2 flex flex-col justify-center pt-10">
          <h2 className="text-2xl font-semibold  text-green-800 mb-8 leading-snug">
  Everything You Need:           
  <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent mb-8">Education</h1>
    </h2>
    <p className="text-lg text-gray-600 max-w-md">
      The IAS Education Department oversees assessing the educational options available to IAS members, providing a variety of opportunities to stay technically and professionally updated.
    </p>
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Book className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold ml-3 text-gray-800">IEEE IAS Expert Webinars</h3>
          </div>
          <p className="text-gray-600">
          The foremost authorities in their fields who are relevant to the IAS membership will deliver these technical webinars. The series began in the middle of 2015, and you can watch previous webinars whenever it&epos; convenient for you. Future webinars will be available in a live setting where participants can prepare questions in advance to ask the presenter.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Users className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold ml-3 text-gray-800">IEEE IAS Young Professional (YP) Webinars</h3>
          </div>
          <p className="text-gray-600">
          Several webinars are available from IEEE IAS that were created by and for students and young professionals. These IAS webinars, which concentrate on the younger members, are accessible to everyone who has a keen interest in the subject matter. Anyone, IAS member or not, may also access them. Program planning for the IEEE IAS YP Webinars is currently underway.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FileText className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold ml-3 text-gray-800">Mentoring Resource</h3>
          </div>
          <p className="text-gray-600">
          The IAS Magazine&epos; Pathways articles, which show how some IAS young professionals are finding their way to fulfilling careers, can be used as an e-mentoring tool. Perhaps one of these tales can motivate or inspire you on your own professional path. To get a summary of the articles and links to read any of them, kindly click on the link below.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="zoom-out-left">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-green-700">Benefits</h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-green-500 to-green-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Industry Applications Society?
          </h1>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Joining IEEE IAS opens doors to a world of opportunities in industrial applications. As a member, you gain access to a vibrant global community of researchers, professionals, and students, fostering collaboration and idea exchange. Stay updated with cutting-edge innovations, advance your career, and contribute to shaping the future of industrial technologies.
          </p>
        </div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default function IasPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-green-50 py-16 px-6 sm:px-10 md:px-16 lg:px-32">
      <Description />
      <Conference />
      <Publication />
      <div className="mb-28">
  <Education />
</div>
      <Benefits />
      <JoinUs />
    </div>
  );
}