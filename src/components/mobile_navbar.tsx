"use client";
import { ChevronUp, Menu } from "lucide-react";
import { navData } from "@/lib/navData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Menu />
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        className={"max-w-[95vw] w-80 overflow-y-auto overflow-x-auto"}
      >
        <AnimatePresence>
          <DropdownMenuGroup>
            {navData.map((section) => (
              <Collapsible
                key={section.name}
                className={"group w-full m-2 "}
                asChild={false}
              >
                <CollapsibleTrigger
                  className={"flex items-center justify-between w-full"}
                  asChild
                >
                  <motion.div
                    whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                    whileTap={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                    className="w-full p-2 rounded-md"
                  >
                    {section.name}
                    <ChevronUp
                      className={
                        "m-2 h-4 w-4 transition-transform duration-200 group-data-[state=closed]:rotate-180"
                      }
                    />
                  </motion.div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ staggerChildren: 0.05, duration: 0.2 }}
                  >
                    {section.items.map((item) => (
                      <DropdownMenuItem
                        key={item.name}
                        asChild
                        className={"w-full"}
                      >
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-full pl-4"
                        >
                          <item.icon className="h-4 w-4" />
                          <Link href={item.href}>{item.name}</Link>
                        </motion.div>
                      </DropdownMenuItem>
                    ))}
                  </motion.div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </DropdownMenuGroup>
        </AnimatePresence>
      </DropdownMenuContent>{" "}
    </DropdownMenu>
  );
}
