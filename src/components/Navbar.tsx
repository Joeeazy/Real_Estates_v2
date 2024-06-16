"use client";
import { NAV_LINKS } from "@/constants/index";
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "../../node_modules/next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  //function to toggle mobile navbar
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="fixed top-2 z-50 w-screen px-4">
      {/* navbar div  */}
      <div className="container flex items-center justify-between rounded-lg bg-black py-3">
        {/* logo and name div */}
        <div className="flex flex-shrink-0 items-center justify-between">
          <img
            className="mr-2"
            src="/logo.png"
            width={60}
            height={30}
            alt="EstatesLogo"
          />
          <span className="text-sm tracking-tight text-white">Joe Estates</span>
        </div>
        {/* nav items */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-4">
            {/* NAV_LINKS = CONSTANTS */}
            {NAV_LINKS.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-sm text-white hover:text-neutral-500"
                  href={item.url}
                >
                  {item.title}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* butttons div */}
        <div className="hidden lg:flex text-sm text-white">
          <Button variant="outline" className="mr-2 bg-black">
            Sign In
          </Button>
          <Button className="bg-slate-800">Sign Up</Button>
        </div>
        <div className="flex-col justify-end text-white md:flex lg:hidden">
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="rounded-md bg-black lg:hidden text-white">
          <ul className="flex flex-col items-center">
            {NAV_LINKS.map((item, index) => (
              <li key={index} className="py-6 ">
                <Link
                  className="text-sm text-white hover:bg-neutral-500"
                  href={item.url}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center pb-8 text-white lg:hidden">
            <Button variant="outline" className="mr-2 bg-black">
              Sign In
            </Button>
            <Button className="bg-slate-800">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
