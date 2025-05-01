import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion"; // corrected import
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
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 bg-green-600 rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>

          <Card className="flex flex-col justify-between h-full relative z-10">
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-green-600">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
            <div className="mt-6">
              <a
                href="https://mtt.org/"
                className="text-green-600 font-bold inline-block"
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
        "rounded-2xl p-6 bg-white border border-transparent group-hover:border-green-600 transition-colors duration-300 shadow-sm",
        className
      )}
    >
      {children}
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
        "text-gray-900 font-semibold text-lg sm:text-xl tracking-tight",
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
        "mt-4 text-gray-600 leading-relaxed text-sm sm:text-base",
        className
      )}
    >
      {children}
    </p>
  );
};
