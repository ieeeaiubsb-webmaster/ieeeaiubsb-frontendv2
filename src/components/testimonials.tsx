"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "motion/react";

// Sample testimonials data
const testimonials = [
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

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 " ref={ref}>
      <h2 className="text-center text-4xl font-bold text-sky-800 mb-2">
        What they say
      </h2>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-6">
                  <Avatar className="w-24 h-24 border-4 border-primary/10">
                    <AvatarImage
                      src={testimonials[currentIndex].imageSrc}
                      alt={testimonials[currentIndex].imageAlt}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="space-y-4">
                    <blockquote className="text-base italic text-muted-foreground md:text-lg">
                      &quot;{testimonials[currentIndex].text}&quot;
                    </blockquote>

                    <div>
                      <h3 className="text-base font-semibold md:text-lg">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="rounded-full"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="rounded-full"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>

        <div className="flex justify-center mt-4">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 p-0 rounded-full mx-1 ${currentIndex === index ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
