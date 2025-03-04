"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
 


export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
    
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Web Development</HoveredLink>
            <HoveredLink href="/contact">Interface Design</HoveredLink>
            <HoveredLink href="/contact">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/contact">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-4 gap-10 px-4">
          <HoveredLink href="/contact">Web Development</HoveredLink>
            <HoveredLink href="/contact">Interface Design</HoveredLink>
            <HoveredLink href="/contact">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/contact">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Hobby</HoveredLink>
            <HoveredLink href="/contact">Individual</HoveredLink>
            <HoveredLink href="/contact">Team</HoveredLink>
            <HoveredLink href="/contact">Enterprise</HoveredLink>
          </div>
        </MenuItem>
        
      </Menu>
    </div>
  );
}
