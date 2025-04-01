"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, PersonStanding, Boxes } from "lucide-react";
import * as motion from "motion/react-client";

const disciplines: {
  title: string;
  description: string;
  titleColor: string;
}[] = [
  {
    title: "Science",
    description:
      "Computational Intelligence\n" +
      "\n" +
      "Photonics and Optics\n" +
      "\n" +
      "Geoscience and Remote Sensing\n" +
      "\n" +
      "Information Theory",
    titleColor: "text-green-700",
  },
  {
    title: "Technology",
    description:
      "Software Engineering\n" +
      "\n" +
      "Wireless Communication and Networking\n" +
      "\n" +
      "\n" +
      "Robotics and Automation\n" +
      "\n" +
      "Standards Development ",
    titleColor: "text-sky-800",
  },
  {
    title: "Engineering",
    description:
      "Electrical and Electronics Engineering\n" +
      "\n" +
      "Power and Energy Systems\n" +
      "\n" +
      "Signal Processing\n" +
      "\n" +
      "Biomedical Engineering",
    titleColor: "text-orange-700",
  },
  {
    title: "Mathematics",
    description:
      "Information Theory and Coding\n" +
      "\n" +
      "Machine Learning and Artificial Intelligence\n" +
      "\n" +
      "Cryptography and Security\n" +
      "\n" +
      "Computational Mathematics and Optimization",
    titleColor: "text-red-700",
  },
];
export default function MissionVision() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-50 dark:bg-gray-900">
      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }} // Ensure y resets to 0
        viewport={{ once: true }} // Ensures it animates only once
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-sky-800 sm:text-4xl md:text-5xl">
              Mission and Vision
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              IEEE&apos;s core purpose is to foster technological innovation and
              excellence for the benefit of humanity.
            </p>
            <ul className="grid gap-3">
              <li className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-primary" />
                <span>Technology</span>
              </li>
              <li className="flex items-center gap-2">
                <PersonStanding className="h-5 w-5 text-primary" />
                <span>Humanity</span>
              </li>
              <li className="flex items-center gap-2">
                <Boxes className="h-5 w-5 text-primary" />
                <span>Collaboration</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter text-sky-800 sm:text-4xl md:text-5xl">
              Through STEM+ fields
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xl">
              {disciplines.map((discipline, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle
                      className={`${discipline.titleColor} || "text-black" lg:text-2xl`}
                    >
                      {discipline.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[15px] text-gray-800 dark:text-gray-400 tracking-tight">
                      {discipline.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
