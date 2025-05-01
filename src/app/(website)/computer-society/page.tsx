"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/components/ui/button";
import { Users, Book, Newspaper,Globe,UserPlus,Sparkles,ClipboardList,Library,Podcast,Monitor,Award,Video} from "lucide-react";
import Link from "next/link";
import { HoverEffect } from "@/components/ui/card-hover-cs";

const benefits = [
  {
    icon: Newspaper, 
    name: "Access the Latest Research",
    description:
      "The IEEE Computer Society provides access to a vast repository of cutting-edge research papers, articles, and publications, keeping individuals updated with the latest advancements in the field of computer science and technology."
  },
  {
    icon: Globe,
    name: "Network With Your Peers",
    description:
      "Engage with a global community of like-minded professionals, researchers, and experts through IEEE CS, fostering valuable connections and collaborations to enhance knowledge and career opportunities."
  },
  {
    icon: UserPlus,
    name: "Get Recognized",
    description:
      "Participation in IEEE CS activities, conferences, and certifications enhances professional credibility, showcasing commitment to continuous learning and expertise in the domain of computer science."
  },
  {
    icon: Sparkles,
    name: "Sharpen Your Skills to Boost Your Career",
    description:
      "IEEE CS fosters a sense of community among its members, offering support and camaraderie in the pursuit of shared interests and goals. Whether you are seeking guidance, collaboration, or mentorship, the society provides a supportive environment."
  }
];

function Description() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20" data-aos="fade-up">
      <div>
        <h1 className="text-center mt-1 text-3xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-5xl">
          What is IEEE CS?
        </h1>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
        The IEEE Computer Society (IEEE CS) stands as a prominent and far-reaching global professional society, dedicated to advancing the field of computer science and technology. As a hub for innovation, IEEE CS brings together researchers, professionals, and students to collaborate, share knowledge, and drive technological breakthroughs. From pioneering research in artificial intelligence to fostering advancements in software engineering, IEEE CS provides a platform for the global tech community to shape the future of computing. Through its extensive resources, events, and publications, the society empowers its members to lead in an ever-evolving digital world.
        </p>
      </div>
      <div className="p-8 flex flex-col items-center justify-center text-center" data-aos="zoom-in">
        <Image src="/images/CS-logo.png" alt="IEEE CS Logo" width={300} height={200} className="w-auto h-auto max-w-full" />
        <div className="flex gap-10">
          <Link href={"/membership"}>
            <Button className="mt-4 w-28 bg-yellow-500 text-white hover:bg-yellow-700 cursor-pointer">Join Us</Button>
          </Link>
          <a href="https://www.computer.org" className="text-base font-semibold mt-4 leading-7 text-yellow-500">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1200 878" xmlns="http://www.w3.org/2000/svg">
          <path fill="url(#yellow-gradient)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
          <defs>
            <linearGradient id="yellow-gradient" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f97316" />
              <stop offset={1} stopColor="#f59e0b" />
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
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-yellow-500 via-yellow-600 to-yellow-600 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image src="/images/conference-cs.jpg" alt="Conferences" fill className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Conferences & Events</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
        IEEE CS conducts technical conferences that bring together students, researchers, and professionals from diverse backgrounds. These conferences serve as platforms for presenting research findings, innovative projects, and cutting-edge technologies within the field of computer science. In addition to conferences, the student branch hosts workshops and seminars focused on emerging technologies, industry trends, and skill development. These interactive sessions provide hands-on training and insights from industry experts, empowering participants to stay updated with the latest advancements and preparing them for the challenges of the tech industry. The IEEE CS also organizes hackathons and coding competitions that unleash the creativity and problem-solving skills of students. These events allow participants to work collaboratively on real-world projects, enhancing their practical knowledge and fostering teamwork.
        </p>
        <Button className="mt-4 bg-yellow-500 text-white hover:bg-yellow-600">Learn More</Button>
      </div>
    </div>
  );
}

function Publication() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20" data-aos="fade-up">
      <div>
        <h3 className="text-center mt-1 text-3xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-4xl">Publications</h3>
        <p className="mt-6 md:mt-8 text-base sm:text-lg text-justify leading-7 text-gray-600">
        The IEEE Computer Society publishes a variety of publications including technical journals, magazines, conference proceedings, books, and online resources. These publications cover various topics related to computer science, technology, and engineering, including but not limited to artificial intelligence, computer networks, data science, cybersecurity, software engineering, computer graphics, computer architecture, machine learning, and human-computer interaction.
        </p>
        <Button className="mt-4 bg-yellow-500 text-white hover:bg-yellow-600">Learn More</Button>
      </div>
      <div className="relative group w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 transform skew-y-[-5deg] bg-gradient-to-tr from-yellow-500 via-yellow to-yellow-600 rounded-3xl shadow-2xl group-hover:scale-105 transition duration-500 ease-in-out z-0" />
        <div className="relative z-10 p-2 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative w-full h-0 pb-[66.66%] rounded-xl overflow-hidden">
            <Image src="/images/publications-CS.JPG" alt="Publications" fill className="object-cover border-6 border-white shadow-lg scale-[1.02] transition duration-500 ease-in-out group-hover:scale-[1.03]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8 min-h-[80vh]">
        
        <div className="w-full md:w-1/2 flex flex-col justify-center pt-10">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-3">
  Everything you need:
</h2>
<h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-8">
  Education
</h1>
          <p className="text-lg text-gray-600 max-w-md">
            The IEEE CS Education Department provides a wide range of programs, tools, and content to help you grow your computer science knowledge—whether you&apos;re a student, educator, or lifelong learner.
          </p>
        </div>

        
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Book className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Bodies of Knowledge</h3>
            </div>
            <p className="text-gray-600">
              IEEE CS provides comprehensive bodies of knowledge that serve as essential references for professionals, covering various domains within the technology industry.
            </p>
          </div>

   
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Monitor className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Online Courses</h3>
            </div>
            <p className="text-gray-600">
              IEEE CS offers a wide range of courses through its online learning platform, allowing individuals to access high-quality education conveniently from anywhere in the world.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Award className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Certifications</h3>
            </div>
            <p className="text-gray-600">
              IEEE CS certifications validate expertise in specific technical areas, bolstering professional credentials and recognition within the global tech community.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Video className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Webinars</h3>
            </div>
            <p className="text-gray-600">
              Regular webinars hosted by IEEE CS feature industry experts, offering insights into cutting-edge technologies and trends, fostering continuous learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Users className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Conferences</h3>
            </div>
            <p className="text-gray-600">
              IEEE CS organizes conferences that bring together researchers, practitioners, and enthusiasts, facilitating knowledge exchange and collaboration to advance the field.
            </p>
          </div>

 
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <ClipboardList className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Boards</h3>
            </div>
            <p className="text-gray-600">
              IEEE CS establishes boards to address critical topics, promote research, and drive technological advancements, fostering innovation and best practices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Podcast className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Podcasts</h3>
            </div>
            <p className="text-gray-600">
              The platform offers podcasts, presenting engaging discussions on various technology-related topics, making learning entertaining and accessible.
            </p>
          </div>


          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-200 p-3 rounded-full">
                <Library className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold ml-3">Digital Library</h3>
            </div>
            <p className="text-gray-600">
              IEEE CS provides an extensive digital library, housing a vast collection of research papers, journals, and publications, serving as a valuable resource for academic and professional researchers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function JoinUs() {
  return (
    <div className="bg-gradient-to-r from-orange-700 to-yellow-300">
      <div className="mx-auto max-w-5xl py-16 px-6 text-center sm:py-20 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block py-2">Join IEEE today.</span>
          <span className="block text-black">Embark on a journey of limitless possibilities.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-yellow-100">
          Explore the frontiers of computing, share knowledge, and collaborate to advance technology for humanity.
        </p>
        <a href="/membership" className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-50 py-3 px-5 text-base font-medium text-yellow-500 hover:bg-yellow-100 sm:w-auto">
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
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-500">Benefits</h2>
          <h1 className="mt-1 p-2 max-w-fit text-3xl font-extrabold text-center bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why join IEEE Computer Society?
          </h1>
          <p className="mt-6 text-lg text-justify leading-8 text-gray-600">
            Joining IEEE CS opens doors to a world of opportunities in computer science and technology. As a member, you gain access to a vibrant global community of researchers, professionals, and students, fostering collaboration and idea exchange. Stay updated with cutting-edge innovations, advance your career, and contribute to shaping the future of computing.
          </p>
        </div>
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}

export default function CsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-yellow-50 py-16 px-6 sm:px-10 md:px-16 lg:px-32">
      <Description />
      <Conference />
      <Publication />
      <div className="mb-20">
  <Education />
</div>
      <Benefits />
      <JoinUs />
    </div>
  );
}