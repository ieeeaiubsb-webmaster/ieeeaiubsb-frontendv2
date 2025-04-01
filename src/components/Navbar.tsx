"use client";
import Link from "next/link";
import { navData } from "@/lib/navData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import MobileNavbar from "@/components/mobile_navbar";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-background">
      <div className="flex justify-between p-4 md:p-6">
        <Link href="/" className="text-xl font-bold">
          IEEEAIUBSB
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuViewport />
            <NavigationMenuList>
              {navData.map((section) => (
                <NavigationMenuItem key={section.name}>
                  <NavigationMenuTrigger>{section.name}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                      {section.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground",
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuIndicator />
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        {/*Mobile nav*/}
        <span className={`md:hidden`}>
          <MobileNavbar />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
