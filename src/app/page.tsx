import FeaturedHouses from "@/components/FeaturedHouses";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedHouses />
    </>
  );
}
