import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { SVGProps, useState } from "react";

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
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-yellow-500 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card className="flex flex-col justify-between h-full relative z-10">
            <div>
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <div className="mt-6">
              <a
                href="https://www.computer.org"
                className="text-yellow-500 font-bold inline-block"
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
}) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent group-hover:border-sky-900 transition-colors duration-300",
      className
    )}
  >
    <div className="flex flex-col justify-between h-full">{children}</div>
  </div>
);

export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-lg font-semibold text-gray-900">{children}</h2>
);
export const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-gray-600">{children}</p>
);