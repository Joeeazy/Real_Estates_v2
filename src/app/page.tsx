import AboutUs from "@/components/AboutUs";
import FeaturedHouses from "@/components/FeaturedHouses";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedHouses />
      <Services />
      <AboutUs />
    </>
  );
}
