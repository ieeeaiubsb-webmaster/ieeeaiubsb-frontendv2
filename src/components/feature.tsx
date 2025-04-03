import { University, Handshake, MapPinHouse } from "lucide-react";

import { FlickeringGrid } from "./magicui/flickering-grid";
import Stats from "@/components/stats";

const features = [
  {
    name: "Establishment:",
    description:
      "Founded on December 12th, 2006, under the guidance of the Office of Student Affairs (OSA) at American International University Bangladesh (AIUB).",

    icon: University,
  },
  {
    name: "Affiliation:",
    description:
      "Registered student branch under the Institute of Electrical and Electronics Engineers (IEEE), guided by the Office of Student Affairs (OSA) at AIUB.",
    icon: Handshake,
  },
  {
    name: "Location:",
    description:
      "Based in Dhaka, Bangladesh, with operations connected to IEEE headquarters in Piscataway, NJ, USA.",
    icon: MapPinHouse,
  },
];

export default function Feature() {
  return (
    <div
      className={`container grid grid-cols-1 w-full md:grid-cols-2 pt-6 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8`}
    >
      <div className={`grid-cols-1 relative`}>
        <div className="relative">
          <h2 className=" relative text-3xl inset-0 z-10 sm:text-xl md:text-5xl font-bold text-sky-800">
            IEEE AIUB Student Branch
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            The IEEE AIUB Student Branch was established in Dhaka, Bangladesh,
            as a registered student branch under the Institute of Electrical and
            Electronics Engineers (IEEE)
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute top-1 left-1 size-5 text-sky-600"
                  />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className={`grid-cols-2 relative overflow-hidden`}>
        <FlickeringGrid
          className="absolute inset-0 z-10 mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <span className={`relative inset-0 z-10 bg-transparent`}>
          <Stats />
        </span>
      </div>
    </div>
  );
}
