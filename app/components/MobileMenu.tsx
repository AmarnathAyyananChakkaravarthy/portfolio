import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { navigationItems } from "./NavBar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MobileMenu() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className=" flex flex-col items-center justify-center">
          <NavigationMenu className="">
            <NavigationMenuList className="flex flex-col items-center justify-center  mt-5 px-2">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index} className="" >
                  <Link href={item.href} legacyBehavior passHref >
                    <NavigationMenuLink
                      active={pathName === item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center justify-center mt-10">
            <Button className="">Contact Me</Button>
        
        </div>
      </SheetContent>
    </Sheet>
  );
}
