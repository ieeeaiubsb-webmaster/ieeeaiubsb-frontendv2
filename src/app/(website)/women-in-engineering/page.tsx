'use client'
import {
  AcademicCapIcon,
  AdjustmentsHorizontalIcon,
  BanknotesIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  CurrencyEuroIcon,
  GlobeAltIcon,
  LifebuoyIcon,
  NewspaperIcon,
  PresentationChartBarIcon,
  RocketLaunchIcon,
  StarIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';
import { HoverEffect } from "@/components/ui/card-hover";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const benefits = [
  {
    name: 'Networking opportunities',
    description:
      "IEEE Women in Engineering offers a forum for networking between women working in engineering. By becoming a member of this organization, individuals can broaden their professional networks and make connections with like-minded people who might be able to offer insightful advice, support, and mentorship.",
    icon: GlobeAltIcon,

  },
  {
    name: 'Newsletters and magazines',
    description:
      "Numerous materials, including newsletters, magazines, and journals, are provided by IEEE Women in Engineering which shows it’s collaborations and showcases women’s outstanding achievements.",
    icon: NewspaperIcon,

  },
  {
    name: 'Awards and recognition',
    description:
      "Women can use IEEE Women in Engineering as a forum to increase their visibility and respect in the engineering community. Members can present their work, share research, and participate in conversations and activities. In addition, they get prizes for their outstanding achievements.",
    icon: TrophyIcon,

  },
  {
    name: 'Discounted registration',
    description:
      "They can register to a variety of useful seminars, webinars, and events at discounted rates by being a member of IEEE Women in Engineering.",
    icon: BanknotesIcon,

  },
  {
    name: 'Travel grants',
    description:
      "The IEEE WIE Travel Grant program offers grants to IEEE WIE members so they can present at conferences or other activities that IEEE or IEEE WIE sponsors.",
    icon: CurrencyEuroIcon,
  },
  {
    name: 'Scholarship for Students',
    description:
      "Members of IEEE Women in Engineering are eligible for several scholarships and grants in different stages like pre-university, undergraduate, and graduate.",
    icon: AcademicCapIcon,
  },
];


const strives = [
  { description: "Provide support to ongoing activities and aid in the creation of new IEEE WIE Affinity Groups.", icon: LifebuoyIcon },
  { description: "Nominate women for IEEE Awards to honor their excellent contributions to electrical and electronics engineering.", icon: TrophyIcon },
  { description: "Create workshops at significant technical conferences to promote IEEE WIE membership and improve networking.", icon: PresentationChartBarIcon },
  { description: "Encourage women to take up leadership positions in IEEE governance and to enhance their careers.", icon: RocketLaunchIcon },
  { description: "Encourage the promotion of female members to the IEEE membership grades of Senior Member and Fellow.", icon: StarIcon },
  { description: "Encourage the creation of programs and activities that encourage women&epos; enrollment in and retention in engineering programs.", icon: AdjustmentsHorizontalIcon },
  { description: "To mentor young women in junior high and high school, administer the IEEE Student-Teacher and Research Engineer/Scientist (STAR) Program.", icon: AcademicCapIcon },
];

const publications = [
  { name: 'Newsletter', description: "IEEE WIE members receive the bi-monthly WIE Exchange newsletter which contains reports on WIE and Affinity Group activities and other relevant WIE information and features opportunities to network, volunteer, and participate in local and global WIE activities.", icon: NewspaperIcon },
  { name: 'Magazine.', description: "The award-winning 'IEEE Women in Engineering Magazine' includes profiles of women with successful careers in science, technology, engineering, and mathematics, as well as coverage of educational programs that attract young women to those disciplines.", icon: BookOpenIcon },
  { name: 'Manga Contest', description: "To bridge the gender gap and promote gender diversity, IEEE Women-in-Engineering (WIE) is organizing a Manga story contest. The winners‘ stories will be plotted in the format of Manga comics, which will be socialized with the community through IEEE WIE Newsletter and website.", icon: ChatBubbleLeftRightIcon },
];

const metrics = [
  { id: 1, stat: '30K+', emphasis: 'Members', rest: 'are part of IEEE WIE.' },
  { id: 4, stat: '100+', emphasis: 'Countries', rest: 'connected from all around the world.' },
  { id: 2, stat: '214', emphasis: 'Sections', rest: 'in total under IEEE.' },
  { id: 3, stat: '958', emphasis: 'Student Branches', rest: 'have WIE Affinity Groups.' },
];

 function Description() {
  return (
    <div className="isolate bg-white">
   
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-7xl py-20">
            <div className="text-center grid place-items-center justify-center " data-aos="fade-up">
              <h1 className="mt-1 max-w-fit text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
                What is IEEE WIE?
              </h1>
              <p className="mt-8 sm:mt-12 text-lg  text-justify leading-8 text-gray-600">
                IEEE Women in Engineering (WIE) is a global network of IEEE
                members and volunteers committed to promoting women scientists
                and engineers and motivating young women to pursue careers in
                science and engineering. WIE&epos; mission is to support women&epos;
                recruitment and retention in technical disciplines on a global
                scale. We picture a thriving IEEE community made up of both men
                and women who work together to develop for the good of all.
              </p>
              <div className="grid place-items-center my-12">
                <img src="/images/WIE-logo.png" alt="" />
              </div>

              <div className="mt-8 flex items-center justify-center gap-x-6">
                <a
                  href="/membership"
                  className="rounded-md bg-fuchsia-700 px-5 py-3 text-center text-xl font-semibold leading-8 text-white shadow-sm hover:bg-fuchsia-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-900"
                >
                  Join Us
                </a>
                <a
                  href="https://wie.ieee.org/"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
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
                  <stop stopColor="#6b21a8" />
                  <stop offset={1} stopColor="#86198f" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
 function Strive() {
  return (
    <section className="py-16 bg-fuchsia-100 " data-aos="zoom-in">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">


        <div className="relative group w-full max-w-xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-400 via-pink-200 to-violet-500 rounded-2xl blur-md opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 z-0" />

          <div className="relative z-10 p-1 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative w-full h-0 pb-[120%] rounded-xl overflow-hidden">
              <img
                src="/images/Wie_Strives.jpg"
                alt="IEEE Event"
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg scale-[1.01] transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>



        <div>
          <h2 className="text-4xl font-bold text-fuchsia-800 mb-4">IEEE WIE Strives to...</h2>
          <p className="text-gray-700 text-justify mb-6">
            The IEEE WIE aims to honor the remarkable accomplishments of women by featuring the most recent webinars, events, and program information. Additionally, the weekly highlights WIE&epos; partnerships with the IEEE Foundation, IEEE ILN, IEEE Reach, etc.
          </p>
          <ul className="space-y-4">
            {strives.map((s, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <s.icon className="h-10 w-10 text-fuchsia-700 mt-1" />
                <p className="text-gray-700 text-justify">{s.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

  );
}

 function Publications() {
  return (
    <section className="py-16 px-6 bg-white" data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-fuchsia-800 mb-6">Publications & Digital Media</h2>
          <div className="space-y-6">
            {publications.map((p) => (
              <div key={p.name} className=" gap-4 items-center">

                <div className="flex mx-auto gap-4">
                  <p.icon className=" h-5 w-5 mt-1 text-fuchsia-600" />
                  <h3 className="text-lg font-semibold  text-fuchsia-700">{p.name}</h3>
                </div>
                <p className=" ml-8 text-gray-700 text-justify">{p.description}</p>

              </div>
            ))}
          </div>
        </div>

        <div className="relative group w-full max-w-xl mx-auto">
          <div className="absolute inset-0 rotate-3 bg-gradient-to-br from-fuchsia-300 via-white to-fuchsia-700 rounded-2xl shadow-2xl group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0" />
          <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
              <img
                src="/images/Wie_publication.JPG"
                alt="IEEE Publication"
                className="absolute inset-0 w-full h-full object-cover border-4 border-white shadow-md scale-[1.01] transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

 function Metrics() {
  return (
    <section className="bg-fuchsia-900 text-white py-20 px-6 " >
      <div className="max-w-6xl mx-auto"  data-aos="zoom-in-left">
        <h2 className="text-2xl font-semibold">Valuable Metrics</h2>
        <p className="text-3xl font-bold mt-2">IEEE WIE by the Numbers</p>
        <p className="mt-4 text-fuchsia-200 text-justify">
          IEEE Women in Engineering (WIE) has experienced significant growth since its inception in 1994. This global network encourages women to pursue careers in engineering, promoting diversity and inclusion. It provides support through various programs, events, and initiatives, fostering a vibrant community for female engineers worldwide.
        </p>
        <div className="relative group w-full max-w-5xl mx-auto mt-12 mb-16">
          <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-pink-300 via-fuchsia-100 to-fuchsia-800 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
          <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
              <img
                src="/images/Wie_matrics.JPG"
                alt="WIE Statistics Overview"
                className="absolute inset-0 w-full h-full object-cover border-4 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="text-center bg-fuchsia-800 rounded-xl p-6 shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <p className="text-3xl font-bold">{m.stat}</p>
              <p className="text-white mt-2">
                <span className="font-medium">{m.emphasis}</span> {m.rest}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 function Benefits() {
  return (
    <section className="py-16 px-6 bg-white" >
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center text-fuchsia-800 mb-10">Benefits</h2>
        <h1 className="mt-1 p-2 mb-8 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-fuchsia-600 to-fuchsia-900 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
          Why join IEEE Women in Engineering?
        </h1>

        <CardHoverEffectDemo></CardHoverEffectDemo>
      </div>
    </section>
  )
}

 function JoinUs() {
  return (

    <div className="bg-gradient-to-r from-fuchsia-600 to-fuchsia-900">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-fuchsia-900">
            Embark on a journey of limitless possibilities.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-fuchsia-100">
          Explore the frontiers of innovation, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a
          href="/membership"
          className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-fuchsia-50 py-3 px-5 text-base font-medium text-fuchsia-700 hover:bg-fuchsia-200 sm:w-auto"
        >
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




export default function WIEPage() {

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <div className="bg-gray-50">
     
      <Description/>
      <Strive/>
      <Publications/>
      <Metrics />
      <Benefits />
      <JoinUs></JoinUs>


    </div>
  );
}