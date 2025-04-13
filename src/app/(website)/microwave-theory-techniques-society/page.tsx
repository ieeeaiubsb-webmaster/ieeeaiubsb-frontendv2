'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button } from "@/components/ui/button";


import {
  AcademicCapIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  NewspaperIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Link from 'next/link';
import { HoverEffect } from "@/components/ui/card-hover-mtts";




const benefits = [
  {
    name: "Professonal Networking",
    description:
      "IEEE Microwave Theory and Techniques Society (MTTS) provides a platform for professionals to connect and collaborate with like-minded individuals, fostering valuable networking opportunities within the microwave and RF community.",
    icon: GlobeAltIcon,
  },
  {
    name: "Publications and Education Activities",
    description:
      "MTTS offers access to high-quality publications, including journals and conference proceedings, as well as educational resources, enabling members to stay updated with the latest research and advancements in the field.",
    icon: NewspaperIcon,
  },
  {
    name: "Discounts on IEEE/Wiley Books",
    description:
      "Members enjoy exclusive discounts on IEEE and Wiley publications, allowing them to access a wealth of technical literature at reduced prices.",
    icon: BanknotesIcon,
  },
  {
    name: "Discount for Conferences Registration",
    description:
      "MTTS members receive discounted rates for attending conferences, symposiums, and workshops, facilitating their participation in key industry events.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "GOOGLEAPPS@IEEE",
    description:
      "MTTS provides members with access to Google Apps, facilitating efficient communication and collaboration among members using tools such as Gmail, Google Drive, and Google Calendar.",
    icon: SquaresPlusIcon,
  },
  {
    name: "Scholarship for Students",
    description:
      "The society offers scholarships to support and encourage students pursuing studies and research in the field of microwave theory and techniques, empowering the next generation of RF and microwave professionals.",
    icon: AcademicCapIcon,
  },
];



function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20" data-aos="fade-up">
      <div>
        <h1 className="text-center mt-1 text-3xl font-extrabold bg-gradient-to-r from-sky-700 to-sky-900 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-5xl">
          What is IEEE MTT-S?
        </h1>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          The IEEE Microwave Theory and Techniques Society (MTTS) stands as an illustrious and influential global community passionately committed to propelling the frontiers of microwave and radio frequency (RF) technologies to unprecedented heights. Steeped in a legacy of pioneering breakthroughs and unwavering excellence, MTTS serves as a dynamic platform where brilliant minds from all corners of the world converge to explore, collaborate, and exchange visionary ideas. Researchers, seasoned professionals, and aspiring students alike find a nurturing environment within MTTS, fostering an atmosphere of innovation and knowledge sharing that resonates throughout the realm of wireless communications and beyond. This prestigious society acts as a beacon of progress, championing the development of cutting-edge technologies, and steering the course of wireless connectivity towards an era of boundless possibilities. By uniting the brightest minds and promoting a culture of exploration, MTTS heralds a future where communication knows no bounds, transforming how the world connects and thrives.
        </p>
      </div>
      <div className="p-8 flex flex-col items-center justify-center text-center" data-aos="zoom-in">
        <img src="/images/MTTS-logo.png" alt="IEEE MTT-S Logo" className="w-auto h-auto max-w-full" />
        <h2 className="font-bold text-lg mt-4">AIUB SB CHAPTER</h2>
        <div className=" flex gap-10">
          <Link href={"/membership"}>
            <Button className="mt-4 w-28 bg-sky-700 text-white hover:bg-sky-900 cursor-pointer">Join Us</Button>
          </Link>
          <a
            href="https://mtt.org"
            className="text-base font-semibold mt-4 leading-7 text-sky-600"
          >
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1200 878"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5b21b6" />
              <stop offset={1} stopColor="#0ea5e9" />
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
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-sky-400 via-sky-100 to-sky-900 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image
              src="/images/conference.JPG"
              alt="Publications"
              fill
              className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-sky-700 to-sky-900 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Conferences & Events</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          At IEEE MTTS, technical gatherings bring together experts and enthusiasts from various disciplines, creating a vibrant environment to present cutting-edge research, share breakthroughs, and discuss emerging trends. The IEEE MTTS International Microwave Symposium (IMS) is one of the most prominent and highly regarded conferences in the field of microwave theory and techniques. Organized by the IEEE Microwave Theory and Techniques Society (MTTS), the IMS attracts researchers, engineers, and professionals from around the world.
        </p>
      </div>
    </div>

  );
}

function Publication() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up">
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-sky-700 to-sky-900 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Publications</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
          The MTT-S Book Series sponsored by the MTT Society and co-published by IEEE and John Wiley is the leading series on microwave and wireless component technology. The Society has extensive Digital Products including Multimedia Products. All this has been made possible by volunteers, authors, and readers like you. The MTT-S publish monthly e-Newsletter and quarterly Student Newsletter which announcements of upcoming microwave events and deadlines for nominations, applications and calls for papers. IT also publishes peer reviewed papers in IEEE Transactions on Microwave Theory and Techniques, IEEE Transactions on Terahertz Science and Technology, IEEE Microwave and Wireless Technology Letters, IEEE Journal of Microwaves (Open Access) and IEEE Microwave Magazine that focus on that part of engineering and theory associated with microwave/millimeter-wave technology and components, electronic devices, guided wave structures and theory, electromagnetic theory, Radio Frequency Hybrid and Monolithic Integrated Circuits, including mixed-signal circuits, and systems from a few MHz to THz.
        </p>
        <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Learn More</Button>
      </div>
      <div className="relative group w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-sky-400 via-sky-100 to-sky-900 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image
              src="/images/publications.JPG"
              alt="Publications"
              fill
              className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-800 ">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-sky-900">
            Embark on a journey of limitless possibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-sky-100">
          Explore the frontiers of innovation, share knowledge, and collaborate
          to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-sky-50 py-3 px-5 text-base font-medium text-sky-700 hover:bg-sky-100 sm:w-auto"
        >
          Join Us
        </a>
      </div>
    </div>
  );
}


function Benefits() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" data-aos="zoom-out-left">
        <div className="mx-auto grid place-items-center lg:mx-0">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-700">
            Benefits
          </h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-sky-500 to-sky-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl " >
            Why join IEEE Engineering in Medicine and Biology Society?
          </h1>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Joining MTTS (IEEE Microwave Theory and Techniques Society) opens
            doors to a world of opportunities in microwave and radio frequency
            (RF) technologies. As a member, you gain access to a vibrant global
            community of researchers, professionals, and students, fostering
            collaboration and idea exchange. Stay updated with cutting-edge
            innovations, advance your career, and contribute to shaping the
            future of wireless communications and beyond.
          </p>
        </div>


        <CardHoverEffectDemo></CardHoverEffectDemo>
      </div>
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={benefits} />
    </div>
  );
}


export default function MttSPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-6 sm:px-10 md:px-16 lg:px-32">


      <Description></Description>

      <Conference></Conference>

      <Publication></Publication>

      <Benefits></Benefits>

      <JoinUs></JoinUs>

    </div>
  );
}
