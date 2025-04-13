import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { SVGProps } from "react";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description: string;
    icon: React.FC<SVGProps<SVGSVGElement>>;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-fuchsia-100 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="flex flex-col justify-between h-full">
            <div>
              <item.icon className="h-8 w-8 text-fuchsia-600 mb-4" />
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <div className="mt-6">
              <a
                href="https://wie.ieee.org/"
                className="text-fuchsia-700 font-bold  inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </Card>


        </div>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent group-hover:border-fuchsia-900 relative z-20 transition-colors duration-300",
        className
      )}
    >
      <div className="relative z-50 h-full">
        <div className="p-4 flex flex-col justify-between h-full">{children}</div>
      </div>
    </div>
  );
};


export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-gray-900 font-bold tracking-wide mt-4 text-lg transition-colors duration-300",
        className
      )}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-gray-600 tracking-wide text-justify leading-relaxed text-sm transition-colors duration-300",
        className
      )}
    >
      {children}
    </p>
  );
};
